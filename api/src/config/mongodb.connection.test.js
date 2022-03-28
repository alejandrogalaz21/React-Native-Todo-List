import { mongodbOptions } from './mongodb.connection'

test('create mongodb options auth', () => {
  const expectedResult = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    user: 'root',
    pass: 'rootPassword',
    authSource: 'admin'
  }
  const result = mongodbOptions('root', 'rootPassword')
  expect(result).toEqual(expectedResult)
})

test('create mongodb options no auth, user and password null', () => {
  const expectedResult = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
  const result = mongodbOptions(null, null)
  expect(result).toEqual(expectedResult)
})
