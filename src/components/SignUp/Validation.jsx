import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short').required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  recaptcha: Yup.string().required('Please complete the reCAPTCHA'),
});

export const validationSchemaEMail = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  recaptcha: Yup.string().required('Please verify you are not a robot'), // ✅ add this line
});