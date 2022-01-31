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
      'any.required': '"confirm password" é um campo obrigatorio',
      'string.empty': `"confirm password" é um campo obrigatorio`
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
// { abortEarly: false } faz com que nao pare no primeiro erro, entao consigo listar todos os erros de uma so vez
export function signUpValidation(values: UsersPermissionsRegisterInput) {
  const schema = Joi.object(fieldValidations)
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type forgotValidationProps = Pick<UsersPermissionsRegisterInput, 'email'>

export function forgotValidation(values: forgotValidationProps) {
  const { email } = fieldValidations
  const schema = Joi.object({ email })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type ResetValidationProps = {
  password: string
  confirm_password: string
}

export function resetValidation(values: ResetValidationProps) {
  const { password, confirm_password } = fieldValidations
  const schema = Joi.object({ password, confirm_password })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
