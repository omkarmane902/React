import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12 flex justify-center">
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">
          About House Price Predictor
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          The <span className="font-semibold">House Price Predictor</span> is a
          web application designed to estimate house prices based on key
          features such as area, number of bedrooms, bathrooms, and location.
          It helps users get a quick and realistic idea of property value.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          This project is built using modern web technologies including
          <span className="font-semibold"> React</span> for the frontend and
          <span className="font-semibold"> Tailwind CSS</span> for responsive and
          clean UI design. The backend can be integrated with a machine learning
          model or API for real-time predictions.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Key Features
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Modern and responsive user interface</li>
          <li>Real-time price prediction (API based)</li>
          <li>Easy-to-use form inputs</li>
          <li>Scalable architecture</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-3 mt-2">
          <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
            React
          </span>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
            Tailwind CSS
          </span>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
            JavaScript
          </span>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
            Node.js (Optional)
          </span>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
            ML Model (Future)
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
