import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            About Brooho
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Brooho is a premier online destination for exquisite jewellery that celebrates beauty and elegance. We are passionate about creating unique pieces that capture the essence of special moments and become cherished symbols of love and style.
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="border border-gray-200 rounded-lg p-8 bg-white">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                Handcrafted with Care
              </h3>
              <p className="mt-2 text-gray-500">
                Each piece of jewellery at Brooho is meticulously handcrafted by skilled artisans. We pay attention to every detail to ensure exceptional quality and craftsmanship in every creation.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-8 bg-white">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M22 12h-4l-3 9L9 3l-3 9H2"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                Timeless Elegance
              </h3>
              <p className="mt-2 text-gray-500">
                Our jewellery embodies timeless elegance, combining classic designs with contemporary influences. We strive to create pieces that stand the test of time and remain cherished for generations.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-8 bg-white">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                Personalized Service
              </h3>
              <p className="mt-2 text-gray-500">
                We are committed to providing personalized service to our customers. Our dedicated team is here to assist you in finding the perfect piece of jewellery and to ensure your shopping experience is exceptional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
