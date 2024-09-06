import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Colorlib</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quos perferendis ratione perspiciatis accusantium.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:ml-10 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 5.52 4.47 9.96 9.96 9.96s9.96-4.47 9.96-9.96c0-5.52-4.47-9.96-9.96-9.96zm0 18.9c-4.91 0-8.94-4.02-8.94-8.94s4.02-8.94 8.94-8.94 8.94 4.02 8.94 8.94-4.02 8.94-8.94 8.94zm-1.53-13.35h-2v2.36h2v6.29h2.73v-6.29h2.11l.28-2.36h-2.39v-1.51c0-.34.1-.61.61-.61h1.78v-2.73h-2.18c-2.09 0-2.89 1.02-2.89 2.83v1.65z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M24 4.557a9.943 9.943 0 01-2.828.775 4.93 4.93 0 002.165-2.724 9.865 9.865 0 01-3.127 1.184 4.922 4.922 0 00-8.385 4.482c-4.086-.2-7.702-2.165-10.126-5.144a4.82 4.82 0 00-.666 2.475c0 1.708.869 3.216 2.188 4.096a4.916 4.916 0 01-2.229-.616c-.054 1.659 1.163 3.217 2.88 3.554a4.93 4.93 0 01-2.224.085c.623 1.945 2.444 3.362 4.6 3.404a9.875 9.875 0 01-6.11 2.105c-.398 0-.79-.023-1.175-.069a13.955 13.955 0 007.548 2.212c9.054 0 14.009-7.507 14.009-14.009 0-.213-.005-.426-.014-.637a10.032 10.032 0 002.462-2.557z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.061 2.633.314 3.608 1.289.975.975 1.228 2.242 1.289 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.061 1.366-.314 2.633-1.289 3.608-.975.975-2.242 1.228-3.608 1.289-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.061-2.633-.314-3.608-1.289-.975-.975-1.228-2.242-1.289-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.061-1.366.314-2.633 1.289-3.608.975-.975 2.242-1.228 3.608-1.289 1.265-.058 1.645-.07 4.849-.07zM12 0c-3.257 0-3.667.012-4.947.072-1.6.074-2.959.365-4.077 1.483C1.004 2.672.713 4.031.64 5.63.581 6.91.569 7.32.569 10.577s.012 3.667.071 4.947c.074 1.6.365 2.959 1.483 4.077 1.118 1.118 2.477 1.409 4.077 1.483 1.28.06 1.69.071 4.947.071s3.667-.012 4.947-.071c1.6-.074 2.959-.365 4.077-1.483 1.118-1.118 1.409-2.477 1.483-4.077.06-1.28.071-1.69.071-4.947s-.012-3.667-.071-4.947c-.074-1.6-.365-2.959-1.483-4.077-1.118-1.118-2.477-1.409-4.077-1.483C15.667.012 15.257 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.994 3.994 0 110-7.987 3.994 3.994 0 010 7.987zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Discover
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                About
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Clients
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Journal
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Help
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2019-2020 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
