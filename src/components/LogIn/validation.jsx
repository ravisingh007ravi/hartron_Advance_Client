import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  hcaptcha: Yup.string().required('Captcha verification is required'),
});


export const validationSchemaEMail = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  hcaptcha: Yup.string().required('Captcha verification is required'),
});