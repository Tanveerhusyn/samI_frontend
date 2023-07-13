import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch with Brooho
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We'd love to hear from you! If you have any questions, feedback, or inquiries, please feel free to
            reach out to us using the contact form below or send an email to <a className="text-indigo-600" href="mailto:samigems@brooho.com">samigems@brooho.com</a>.
          </p>
        </div>

        <div className="mt-16">
          <div className="max-w-2xl mx-auto">
            <form>
              <div className="grid grid-cols-2 gap-8">
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-black hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
