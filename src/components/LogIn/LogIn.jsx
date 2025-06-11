import React from 'react';
import { useFormik } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha'; // ✅ new import
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { validationSchema } from './validation';

export default function LogIn() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      recaptcha: '', // ✅ updated from hcaptcha
    },
    validationSchema,
    onSubmit: values => {
      console.log('Login submitted:', values);
      // Handle login logic here
    },
  });

  const handleRecaptchaChange = token => formik.setFieldValue('recaptcha', token);

  return (
    <div className="min-h-screen flex">
      {/* Left: Form */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 p-10 flex flex-col justify-center"
      >
        <div className="flex justify-center mb-8">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dnpn8ljki/image/upload/v1749452665/logo_1_exrbma.png"
              alt="logo"
              className="h-20"
            />
          </Link>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col"
          >
            <label htmlFor="email" className="text-sm font-semibold mb-1">
              Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`p-3 rounded-lg border ${
                formik.touched.email && formik.errors.email
                  ? 'border-red-500'
                  : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-sm text-red-500 mt-1">{formik.errors.email}</span>
            )}
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col"
          >
            <label htmlFor="password" className="text-sm font-semibold mb-1">
              Password
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`p-3 rounded-lg border ${
                formik.touched.password && formik.errors.password
                  ? 'border-red-500'
                  : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {formik.touched.password && formik.errors.password && (
              <span className="text-sm text-red-500 mt-1">{formik.errors.password}</span>
            )}
          </motion.div>

          {/* Google reCAPTCHA */}
          <div>
            <label className="text-sm font-semibold mb-2 block">Confirm you're not a robot</label>
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY" // ⛔ Replace with your actual site key
              onChange={handleRecaptchaChange}
            />
            {formik.touched.recaptcha && formik.errors.recaptcha && (
              <span className="text-sm text-red-500 mt-1 block">{formik.errors.recaptcha}</span>
            )}
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={formik.isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
          >
            Log In
          </motion.button>

          {/* Links */}
          <div className="text-sm text-center text-gray-700 space-y-1">
            <p>
              Don't have an account?{' '}
              <Link
                to="/sign-up"
                className="text-blue-600 font-medium cursor-pointer hover:underline"
              >
                Sign Up
              </Link>
            </p>
            <p>
              Forgot password?{' '}
              <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                <Link to='/forgate-password'>Recover</Link>
              </span>
            </p>
          </div>
        </form>
      </motion.div>

      {/* Right: Image */}
      <div className="hidden lg:block w-1/2">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="h-screen w-full object-cover"
          src="https://res.cloudinary.com/dnpn8ljki/image/upload/v1749528800/sign_cs9oh6.png"
          alt="Login visual"
        />
      </div>
    </div>
  );
}
