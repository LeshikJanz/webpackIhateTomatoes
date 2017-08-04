import { request } from "../../api/base";

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;

const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;

/**
 * Async checking redux form field
 *
 * @param values - form element, key - field name, value - field value
 * @param dispatch
 * @param props
 * @param {string} field
 *
 * @returns {void | Error}
 */
export const asyncValidate = (values, dispatch, props, field) => {
  return request.get(`Accounts?filter={"where":{"${field}":"${values[field]}"}}`, {}).then((res) => {
    if (res.length !== 0) {
      throw { [field]: `That ${field} is taken` }
    }
  })
};

export const required = value => (value ? undefined : 'Required');

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
export const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined;
export const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined;
export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;

export const minLength4 = minLength(4);
export const minLength8 = minLength(8);

