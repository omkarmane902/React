import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-7xl font-extrabold text-indigo-600">404</h1>
      <p className="text-xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </p>
      <p className="text-gray-600 mt-2 mb-6">
        Sorry, the page you are looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default PageNotFound
