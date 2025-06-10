import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import { validationSchemaEMail } from './Validation';
import { Link } from 'react-router-dom';
import HCaptcha from '@hcaptcha/react-hcaptcha'; // Import HCaptcha

export default function ConfirmationEMail() {
  const formik = useFormik({
    initialValues: {
      email: '',
      hcaptcha: '' // Add hcaptcha to initial values
    },
    validationSchema: validationSchemaEMail, // Changed from validationSchemaEMail to validationSchema
    onSubmit: values => {
      console.log('Form submitted:', values);
    },
  });

  // Add these handler functions
  const handleHCaptchaVerify = (token) => {
    formik.setFieldValue('hcaptcha', token);
    formik.setFieldTouched('hcaptcha', true);
  };

  const handleHCaptchaExpire = () => {
    formik.setFieldValue('hcaptcha', '');
  };

  const INPUTDATA = [
    { name: 'email', label: 'Email', placeholder: 'Enter your email', type: 'email' },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left: Form */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 p-10 flex flex-col justify-center"
      >
        <div className="flex justify-center mb-8 select-none">
          <Link to='/'>         
            <img src="https://res.cloudinary.com/dnpn8ljki/image/upload/v1749452665/logo_1_exrbma.png" alt="logo"
              className="h-20"
            />
          </Link>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {INPUTDATA.map(({ name, label, placeholder, type }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col"
            >
              <label htmlFor={name} className="text-sm font-semibold mb-1">
                {label}
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
                className={`p-3 rounded-lg border ${
                  formik.touched[name] && formik.errors[name]
                    ? 'border-red-500'
                    : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
              />
              {formik.touched[name] && formik.errors[name] && (
                <span className="text-sm text-red-500 mt-1">{formik.errors[name]}</span>
              )}
            </motion.div>
          ))}

          <div>
            <label className="text-sm font-semibold mb-2 block">Confirm you're not a robot</label>
            <HCaptcha
              sitekey="1d122fe2-7f0e-422a-9a60-212c5100aaa"
              onVerify={handleHCaptchaVerify}
              onExpire={handleHCaptchaExpire}
            />
            {formik.touched.hcaptcha && formik.errors.hcaptcha && (
              <span className="text-sm text-red-500 mt-1 block">{formik.errors.hcaptcha}</span>
            )}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={formik.isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
          >
            Resend confirmation email
          </motion.button>

          <div className="text-sm text-center text-gray-700 space-y-1">
            <p>
              Already got an account?{' '}
              <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                <Link to='/log-in'>Log in</Link></span>
            </p>
            <p>
              Don't have an account yet?{' '}
              <span className="text-blue-600 font-medium cursor-pointer hover:underline"><Link to='/sign-up'>Sign up for free.</Link></span>
            </p>
          </div>
        </form>
      </motion.div>

      {/* Right: Image */}
      <div className="hidden lg:block w-1/2 select-none">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="h-screen w-full object-cover"
          src="https://res.cloudinary.com/dnpn8ljki/image/upload/v1749528800/sign_cs9oh6.png"
          alt="Signup visual"
        />
      </div>
    </div>
  )
}