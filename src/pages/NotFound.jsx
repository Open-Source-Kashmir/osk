import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <p className="text-sm font-semibold text-blue-600">404</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Page not found</h1>
      <p className="mt-2 text-base text-gray-600 dark:text-gray-300">Sorry, we couldn’t find the page you’re looking for.</p>
      <div className="mt-6 flex items-center gap-4">
        <Link to="/" className="no-underline bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition">
          Go back home
        </Link>
        <Link to="/community" className="no-underline text-blue-700 dark:text-blue-400 hover:underline">
          Visit community
        </Link>
      </div>
    </div>
  )
}


