import {
  forgotValidation,
  resetValidation,
  signInValidation,
  signUpValidation
} from '.'

describe('validations', () => {
  describe('signInValidation() ', () => {
    it('should return empty error ', () => {
      const values = {
        email: '',
        password: ''
      }
      expect(signInValidation(values)).toMatchInlineSnapshot(`
        Object {
          "email": "\\"email\\" is not allowed to be empty",
          "password": "\\"password\\" is not allowed to be empty",
        }
      `)
    })

    it('should return invalid email error', () => {
      const values = {
        email: 'invalid-email',
        password: '1234'
      }
      expect(signInValidation(values)).toMatchInlineSnapshot(`
        Object {
          "email": "\\"email\\" must be a valid email",
        }
      `)
    })
  })

  describe('SignUpValidation()', () => {
    it('should return empty error', () => {
      const values = {
        email: '',
        password: '',
        username: ''
      }
      expect(signUpValidation(values)).toMatchObject({
        email: expect.any(String),
        password: expect.any(String),
        username: expect.any(String),
        confirm_password: expect.any(String)
      })
    })

    it('should return username min required error', () => {
      const values = { username: '123', email: '', password: '' }

      expect(signUpValidation(values).username).toMatchInlineSnapshot(
        `"\\"username\\" length must be at least 5 characters long"`
      )
    })

    it('should return username custom error', () => {
      const values = { username: '', email: '', password: '' }

      expect(signUpValidation(values).username).toMatchInlineSnapshot(
        `"\\"username\\" é um campo obrigatorio"`
      )
    })

    it('should return confirm_password error ', () => {
      const values = { username: '', email: '', password: '' }
      expect(signUpValidation(values).confirm_password).toMatchInlineSnapshot(
        `"\\"confirm password\\" é um campo obrigatorio"`
      )
    })

    it('should return confirm password error', () => {
      const values = {
        username: 'brenno',
        email: 'brenno@gmail.com',
        password: '12345',
        confirm_password: '1234'
      }
      expect(signUpValidation(values)).toMatchInlineSnapshot(`
        Object {
          "confirm_password": "confirm password does not match with password",
        }
      `)
    })
  })

  describe('ForgotValidation', () => {
    it('should return email error', () => {
      const values = {
        email: ''
      }
      expect(forgotValidation(values)).toMatchInlineSnapshot(`
        Object {
          "email": "\\"email\\" is not allowed to be empty",
        }
      `)
    })
  })

  describe('ResetValidation', () => {
    it('should return to be empty values ', () => {
      const values = {
        password: '',
        confirm_password: ''
      }
      //Como o confirm_password faz referencia ao password, ele so sera validado quando o password passar
      expect(resetValidation(values)).toMatchObject({
        password: expect.any(String)
      })
    })

    it('should return to be empty confirm_password', () => {
      const values = {
        password: '1234',
        confirm_password: ''
      }
      expect(resetValidation(values).confirm_password).toMatchInlineSnapshot(
        `"\\"confirm password\\" é um campo obrigatorio"`
      )
    })

    it('should return does not match confirm password', () => {
      const values = {
        password: '1234',
        confirm_password: '321'
      }
      expect(resetValidation(values).confirm_password).toMatchInlineSnapshot(
        `"confirm password does not match with password"`
      )
    })
  })
})
