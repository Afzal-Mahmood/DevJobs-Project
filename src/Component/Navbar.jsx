import { Code2 } from 'lucide-react'
import React from 'react'
import { NavLink , Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
         <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-center h-16 container">

              <div className="text-2xl flex gap-3 font-bold text-blue-600">
                <Code2 size={30} className='text-orange-700' />
                <span>DevJobs</span>
              </div>

              <div className="hidden md:flex items-center gap-10 shadow p-2 px-6 rounded-4xl">
                <NavLink
                to="/"
                className={({ isActive }) => `${isActive ? 'text-orange-500' : 'text-gray-600'} block py-2 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`}
                >
                  Home
                </NavLink>

                <NavLink
                to="/Product"
                className={({ isActive }) => `${isActive ? 'text-orange-500' : 'text-gray-600'} block py-2 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`}
                >
                  Product
                </NavLink>

                <NavLink
                to="/About"
                className={({ isActive }) => `${isActive ? 'text-orange-500' : 'text-gray-600'} block py-2 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`}
                >
                  About
                </NavLink>

                <NavLink
                to="/Content"
                className={({ isActive }) => `${isActive ? 'text-orange-500' : 'text-gray-600'} block py-2 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`}
                >
                  Content
                </NavLink>
              </div>

              <div className=''>
                <Link className='text-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>Login</Link>
                <Link className='bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>Get Started</Link>
              </div>

          </div>
        </div>


      </nav>
    </div>
  )
}

export default Navbar