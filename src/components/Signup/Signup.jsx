import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// Define the validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  contact: Yup.string()
    .test('contact', 'Invalid email address or phone number', value => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;
      return emailRegex.test(value) || phoneRegex.test(value);
    })
    .required('Email or phone number is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(/(?=.*[!@#$%^&(),.?":{}|<>])/, 'Password must contain at least one special character')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  dateOfBirth: Yup.object({
    day: Yup.number().min(1).max(31).required('Day is required'),
    month: Yup.string().required('Month is required'),
    year: Yup.number().min(1900).max(new Date().getFullYear()).required('Year is required'),
  }),
  gender: Yup.string().required('Gender is required'),
});

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordToggle = () => setShowPassword(!showPassword);
  const handleConfirmPasswordToggle = () => setShowConfirmPassword(!showConfirmPassword);

  const today = new Date();
  const currentDay = today.getDate();
  const currentMonthIndex = today.getMonth();
  const currentYear = today.getFullYear();

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    { value: '', label: 'Month' },
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' },
  ];
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const currentMonth = months[currentMonthIndex + 1].value;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-sm md:max-w-md bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-3xl font-bold text-red-700">TRENDY_HUB</h1>
        </div>

        <h2 className="text-center text-2xl font-bold mb-2 text-gray-800">Create a new account</h2>
        <p className="text-center text-sm text-gray-600 mb-4">It's quick and easy.</p>
        <hr className='mb-4' />
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            contact: '',
            password: '',
            confirmPassword: '',
            dateOfBirth: {
              day: currentDay,
              month: currentMonth,
              year: currentYear,
            },
            gender: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log('Form data', values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
                <div>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-700 focus:border-red-700 sm:text-sm"
                  />
                  <ErrorMessage name="firstName" component="div" className="text-red-600 text-sm mt-1" />
                </div>
                <div>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-700 focus:red-orange-700 sm:text-sm"
                  />
                  <ErrorMessage name="lastName" component="div" className="text-red-600 text-sm mt-1" />
                </div>
              </div>

              <div>
                <Field
                  type="text"
                  name="contact"
                  placeholder="Email or Mobile Number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-700 focus:border-red-700 sm:text-sm"
                />
                <ErrorMessage name="contact" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div>
                <div className="relative">
                  <Field
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-700 focus:border-red-700 sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={handlePasswordToggle}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                  </button>
                </div>
                <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div>
                <div className="relative">
                  <Field
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-700 focus:border-red-700 sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={handleConfirmPasswordToggle}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                  </button>
                </div>
                <ErrorMessage name="confirmPassword" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <div className="flex space-x-2 sm:space-x-4 mt-2">
                  <div className="flex-1">
                    <Field
                      as="select"
                      name="dateOfBirth.day"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-700 focus:border-red-700 sm:text-sm"
                    >
                      <option value="">Day</option>
                      {days.map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="dateOfBirth.day" component="div" className="text-red-700 text-sm mt-1" />
                  </div>
                  <div className="flex-1">
                    <Field
                      as="select"
                      name="dateOfBirth.month"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-700 focus:border-red-700 sm:text-sm"
                    >
                      {months.map(month => (
                        <option key={month.value} value={month.value}>{month.label}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="dateOfBirth.month" component="div" className="text-red-700 text-sm mt-1" />
                  </div>
                  <div className="flex-1">
                    <Field
                      as="select"
                      name="dateOfBirth.year"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-700 focus:border-red-700 sm:text-sm"
                    >
                      <option value="">Year</option>
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="dateOfBirth.year" component="div" className="text-red-700 text-sm mt-1" />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <div className="mt-2 flex space-x-4">
                  <label className="flex items-center">
                    <Field
                      type="radio"
                      name="gender"
                      value="male"
                      className="form-radio h-4 w-4 text-red-700 transition duration-150 ease-in-out"
                    />
                    <span className="ml-2 text-sm text-gray-700">Male</span>
                  </label>
                  <label className="flex items-center">
                    <Field
                      type="radio"
                      name="gender"
                      value="female"
                      className="form-radio h-4 w-4 text-red-700 transition duration-150 ease-in-out"
                    />
                    <span className="ml-2 text-sm text-gray-700">Female</span>
                  </label>
                  <label className="flex items-center">
                    <Field
                      type="radio"
                      name="gender"
                      value="other"
                      className="form-radio h-4 w-4 text-red-700 transition duration-150 ease-in-out"
                    />
                    <span className="ml-2 text-sm text-gray-700">Other</span>
                  </label>
                </div>
                <ErrorMessage name="gender" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                  disabled={isSubmitting}
                >
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
