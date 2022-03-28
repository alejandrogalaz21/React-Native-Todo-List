import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import User from './../../src/app/users/user.model'
import { settings } from './../../src/keys'

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: settings.secret
}

export const jwtStrategy = Model =>
  new Strategy(options, (payload, done) => {
    Model.findById(payload._id)
      .then(user => {
        if (!user) return done(null, false)
        return done(null, payload)
      })
      .catch(error => console.log(error))
  })

passport.use(jwtStrategy(User))
