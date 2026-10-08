"use client";

import { useFormik } from "formik";

import { ContactUsSchema } from "@/lib/validators";

export default function ContactForm() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    resetForm,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      message: "",
    },
    validationSchema: ContactUsSchema,
    onSubmit: (values) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="grid md:grid-cols-2 md:gap-6">
        {/* Full Name */}
        <div className="group relative z-0 mb-6 w-80 md:w-full">
          <label
            htmlFor="fullname"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            نام و نام‌خانوادگی
          </label>

          <input
            id="fullname"
            name="fullname"
            type="text"
            value={values.fullname}
            onChange={handleChange}
            onBlur={handleBlur}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 text-sm text-gray-900 outline-none focus:border-[#C67C4E] focus:ring-0"
            placeholder="نام و نام خانوادگی خود را وارد کنید ..."
          />

          {touched.fullname && errors.fullname && (
            <p className="mt-2 text-xs text-red-500">{errors.fullname}</p>
          )}
        </div>

        {/* Email */}
        <div className="group relative z-0 mb-6 w-80 md:w-full">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            ایمیل
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 text-sm text-gray-900 outline-none focus:border-[#C67C4E] focus:ring-0"
            placeholder="example@domain.com"
          />

          {touched.email && errors.email && (
            <p className="mt-2 text-xs text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="group relative z-0 mb-6 w-80 md:w-full">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          پیام شما
        </label>

        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={5}
          className="peer block w-full resize-none appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 text-sm text-gray-900 outline-none focus:border-[#C67C4E] focus:ring-0"
          placeholder="متن پیام شما..."
        />

        {touched.message && errors.message && (
          <p className="mt-2 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="absolute mt-10 mb-2 rounded-lg bg-[#C67C4E] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#C67C4E] focus:ring-4 focus:ring-[#C67C4E] focus:outline-none md:left-0 md:mt-52"
      >
        ارسال پیام
      </button>
    </form>
  );
}