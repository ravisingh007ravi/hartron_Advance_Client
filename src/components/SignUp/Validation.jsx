import * as Yup from 'yup';


export const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'At least 8 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm your password'),
    hcaptcha: Yup.string().required('Please complete the captcha'),
  });
  
export const validationSchemaEMail = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });