import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 -mt-16">
      <div className="flex flex-col md:flex-row shadow-xl w-full max-w-4xl bg-white">
        {/* Left Image Section */}
        <div className="md:w-1/2 w-full h-60 md:h-auto">
          <img 
            src="/trendyhub/western-2.jpg" 
            alt="Trendy Hub" 
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 w-full flex flex-col justify-center px-4 md:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">TRENDY_HUB</h1>
          <p className="text-lg md:text-xl mb-6 text-center">
            Discover the <span className="text-red-700">latest trends now</span>
          </p>
          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={Yup.object({
              username: Yup.string()
                .required('Username or email is required')
                .test('is-valid', 'Must be a valid email or at least 5 characters', function (value) {
                  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    return true;
                  }
                  return value && value.length >= 5;
                }),
              password: Yup.string().required('Password is required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="w-full max-w-sm mx-auto">
                <div className="mb-4">
                  <Field 
                    type="text" 
                    name="username" 
                    placeholder="Username or email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage name="username" component="div" className="text-red-600 text-sm mt-1" />
                </div>
                <div className="mb-6">
                  <Field 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-red-700 text-white font-semibold py-2 rounded-md hover:bg-gray-800"
                >
                  Log In
                </button>
                <div className="flex flex-col md:flex-row justify-between mt-4 text-sm">
                  <a href="#" className="text-gray-800 hover:text-red-600 mb-2 md:mb-0">Forgot password?</a>
                  <a href="#" className="text-red-600 mb-2 md:mb-0">Reset password?</a>
                </div>
                <div className="text-sm mt-4">
                  <p className="text-gray-600">Don’t have an account? 
                    <a href="/Signup" className="ml-1 mr-1 text-red-600">Sign Up</a> 
                    Here
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
