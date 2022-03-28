import Email from 'email-templates'
import path from 'path'
import { getConfig } from './../keys'
import { decryptionAES } from '../helpers/encryption.helper'

export const generateMailer = async () => {
  try {
    const config = await getConfig()
    const templates = path.resolve(__dirname, 'templates')
    const transport = config.mailer

    if (transport) {
      transport.auth.pass = decryptionAES(transport.auth.pass)
    } else {
      throw new Error('Sin credenciales de mailer')
    }

    const mailer = new Email({
      transport,
      views: {
        root: templates,
        options: { extension: 'hbs' }
      },
      message: { from: config.mailer.auth.user },
      preview: false,
      send: true,
      juice: true,
      juiceResources: {
        preserveImportant: true,
        webResources: {
          relativeTo: path.join(__dirname, 'build')
        }
      }
    })

    return mailer
  } catch (error) {
    console.log(error)
  }
}
