import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub , FaTwitter , FaLinkedin} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-gray-200 text-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-14">
        
        {/* 4-Column Grid Matching the Image Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-200">
          
          {/* Column 1: Brand Info (4 cols wide) */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
              <span className="text-orange-600">&lt;/&gt;</span> DevJobs
            </Link>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs">
              A modern job board built for software engineers. Connect with top tech companies and find your next remote or on-site role.
            </p>
          </div>

          {/* Column 2: Platform Links (2 cols wide) */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold text-gray-900">Platform</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/jobs" className="hover:text-orange-600 transition">Find Jobs</Link></li>
              <li><Link to="/profiles" className="hover:text-orange-600 transition">Profiles</Link></li>
              <li><Link to="/alerts" className="hover:text-orange-600 transition">Job Alerts</Link></li>
              <li><Link to="/salaries" className="hover:text-orange-600 transition">Salary Tool</Link></li>
              <li><Link to="/companies" className="hover:text-orange-600 transition">Companies</Link></li>
            </ul>
          </div>

          {/* Column 3: Community Links (2 cols wide) */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold text-gray-900">Community</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-orange-600 transition">About</Link></li>
              <li><Link to="/careers" className="hover:text-orange-600 transition">Careers</Link></li>
              <li><Link to="/content" className="hover:text-orange-600 transition">Blog & Content</Link></li>
              <li><Link to="/contact" className="hover:text-orange-600 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Subscribe Box (4 cols wide) */}
          <div className="lg:col-span-4">
            <h3 className="text-base font-bold text-gray-900">Subscribe</h3>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4">
              <div className="flex items-center bg-gray-200/80 rounded-full p-1.5 focus-within:ring-2 focus-within:ring-orange-500">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  className="w-full bg-transparent px-4 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-700 transition cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-3 text-xs text-gray-500">
              Get weekly developer job updates straight to your inbox.
            </p>
          </div>

        </div>

        {/* Bottom Copyright & Social Icons Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved | DevJobs
          </p>

          {/* Circular Outlined Social Buttons */}
          <div className="flex items-center space-x-3">
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full border border-orange-500 text-orange-600 flex items-center justify-center hover:bg-orange-600 hover:text-white transition"
            >
              <FaGithub className='w-4 h-4' />
            </a>

            {/* Twitter / X */}
            <a
              href="https://twitter.com"
              target="_blank"
            //   rel="noreferrer"
            //   aria-label="Twitter"
              className="w-9 h-9 rounded-full border border-orange-500 text-orange-600 flex items-center justify-center hover:bg-orange-600 hover:text-white transition"
            >
              <FaTwitter className='w-4 h-4' />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-orange-500 text-orange-600 flex items-center justify-center hover:bg-orange-600 hover:text-white transition"
            >
              <FaLinkedin className='w-4 h-4' />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}