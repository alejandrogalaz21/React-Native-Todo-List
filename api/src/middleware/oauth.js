import passport from 'passport'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'
// prettier-ignore
import { deserialize, serialize, jwtCB } from './../../src/helpers/passport.helper'
import { settings, getConfig } from './../../src/keys'

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: settings.secret
}

// Serialize the user.id to save in the cookie session
passport.serializeUser(serialize)

// Deserialize the cookieUserId to user in the database
passport.deserializeUser(deserialize)

getConfig().then(config => {
  if (config.oauth) {
    // Configure strategies to passport
    passport.use(new JWTStrategy(options, jwtCB))
  }
})
