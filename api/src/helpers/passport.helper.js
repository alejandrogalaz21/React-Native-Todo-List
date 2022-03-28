import bcrypt from 'bcryptjs'
import User from '../app/users/user.model'

export const serialize = (user, done) => done(null, user._id)

export const deserialize = (id, done) => {
  User.findById(id)
    .lean()
    .then(user => {
      done(null, user)
    })
    .catch(error => {
      console.error(error)
      done(new Error('Failed to deserialize an user'))
    })
}

export const authCB = selector => async (_token, _secret, response, done) => {
  const profile = selector(response)
  const user = await User.findOne({ email: profile.email }).lean()

  if (!user) {
    const password = 'probono.2020'
    const salt = bcrypt.genSaltSync(10)
    const hashed = bcrypt.hashSync(password, salt)

    const data = Object.assign(profile, { password: hashed })
    const newUser = await User.create(data)
    done(null, newUser)
  }
  done(null, user)
}

export const selectors = {
  twitter: ({ displayName, emails, photos }) => {
    return {
      name: displayName.split(' ').slice(0, 1).join(' '),
      lastName: displayName.split(' ').slice(1).join(' '),
      email: emails[0].value,
      picture: photos[0].value.replace(/_normal/, '')
    }
  },
  facebook: ({ name, emails, photos }) => ({
    name: name.givenName,
    lastName: name.familyName,
    email: emails[0].value,
    picture: photos[0].value
  }),
  google: ({ displayName, emails, photos }) => ({
    name: displayName.split(' ').slice(0, 1).join(' '),
    lastName: displayName.split(' ').slice(1).join(' '),
    email: emails[0].value,
    picture: photos[0].value.replace(/sz=50/gi, 'sz=250')
  })
}

export const jwtCB = (payload, done) => {
  User.findById(payload._id)
    .then(user => {
      if (!user) return done(null, false)
      return done(null, payload)
    })
    .catch(error => console.log(error))
}
