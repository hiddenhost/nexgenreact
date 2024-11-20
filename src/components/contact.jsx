import React from "react";

const ContactForm = () => {
  return (
    <div id="contact" className="min-h-screen bg-[#1101d] flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-[#1101d] text-white rounded-lg shadow-md py-6 px-8"> {/* Reduced `py-10` to `py-6` */}
        <h1 className="text-3xl font-bold text-center mb-4">Ready to See Results?</h1>
        <p className="text-gray-400 text-center mb-6"> {/* Adjusted `mb-8` to `mb-6` */}
          Fill out the details and get a chance to connect with us
        </p>
        <form id="contact"
          action="https://formsubmit.co/6fc5eaa03d06a86f2bd54eb032746ed3"
          method="POST"
          className="space-y-6"
        >
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              required
              className="w-full px-4 py-3 bg-[#1d1d2b] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              className="w-full px-4 py-3 bg-[#1d1d2b] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 bg-[#1d1d2b] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              required
              className="w-full px-4 py-3 bg-[#1d1d2b] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full px-4 py-3 bg-[#1d1d2b] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-500 h-32"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-md hover:from-purple-600 hover:to-purple-800 focus:outline-none"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
