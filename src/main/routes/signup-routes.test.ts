import request from 'supertest'
import app from '../config/app'

describe('Signup Routes', () => {
  test('Should return 200', async () => {
    await request(app).post('/api/signup')
      .send({
        name: 'a',
        email: 'b',
        password: 'c',
        passwordConfirmation: 'c'
      })
      .expect(200)
  })
})
