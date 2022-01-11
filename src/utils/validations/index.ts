import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import Joi from 'joi'

const fieldValidations = {
  username: Joi.string()
    .min(5)
    .required()
    .messages({ 'string.empty': `"username" é um campo obrigatorio` }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'confirm password does not match with password',
      // any.only funcionou para o .valid
      'any.required': '"confirm password" é um campo obrigatorio'
      //Mais exemplos de personalização de mensagem de erro
      //https://github.com/sideway/joi/blob/v14.3.1/API.md#list-of-errors
      //https://stackoverflow.com/questions/48720942/node-js-joi-how-to-display-a-custom-error-messages
    })
}

export type FieldErrors = {
  [key: string]: string
}

export function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}
  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }
  return errors
}

export type SignInValues = {
  email: string
  password: string
}
export function signInValidation(values: SignInValues) {
  const { email, password } = fieldValidations
  const schema = Joi.object({ email, password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export function signUpValidation(values: UsersPermissionsRegisterInput) {
  const schema = Joi.object(fieldValidations)
  console.log(schema.describe())
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
