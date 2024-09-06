'use client'

import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const counters = document.querySelectorAll("[data-target]");
    const speed = 200;

    const animateCounters = () => {
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;

          const increment = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 5);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();  
      });
    };

    const section = document.querySelector(".counters-section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(section);
        }
      });
    }, { threshold: 0.1 });

    if (section) {
      observer.observe(section);
    }
    animateCounters();
  }, []);

  return (
    <div>
      <Head>
        <title>Leading Machine Learning Company</title>
        <meta name="description" content="World's Leading Machine Learning Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-orange-500">Bariton</div>
          <nav className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </nav>
          <nav className={`md:flex ${menuOpen ? '' : 'hidden'}`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <li><a href="#" className="text-gray-700 hover:text-orange-500">Page</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-500">Services</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-500">Pages</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-500">Blog</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-500">Pricing</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-500">Contact</a></li>
            </ul>
          </nav>
          <div className="space-x-2">
            <button className="bg-orange-500 text-white px-4 py-2 rounded">hello</button>
            {/* <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded">Get Started Free</button> */}
          </div>
        </div>
      </header>

      <main>
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Leading Machine Learning Company</h1>
            <p className="text-xl mb-8">ML today are able to supply needs of help, information, and positive experience of maintaining intimacy with customers. Eventually, chatbot ideas bring a pleasant experience of all these qualities into the conversation.</p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <button className="bg-orange-500 text-white px-6 py-3 rounded">hello</button>
              {/* <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded">Get Started Free</button> */}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4 border border-gray-200 rounded">
              <h2 className="text-xl font-bold mb-2">Robotic Process Automation</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Et amet mi varius varius.</p>
            </div>
            <div className="p-4 bg-orange-500 text-white rounded">
              <h2 className="text-xl font-bold mb-2">Cognitive Automation</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Et amet mi varius varius.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded">
              <h2 className="text-xl font-bold mb-2">Cognitive Engagement</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Et amet mi varius varius.</p>
            </div>
          </div>
        </section>

        <div className="min-h-screen bg-gray-50">
          <main className="container mx-auto px-4 py-6">
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-4">Interior Design Studio</h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh nunc, ornare in condimentum sed, maximus luctus ipsum.
              </p>
              <button className="bg-orange-500 text-white py-2 px-4 rounded">
                Projects
              </button>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {/* <Image
                src="/images/image1.jpg"
                alt="Interior 1"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/images/image2.jpg"
                alt="Interior 2"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/images/image3.jpg"
                alt="Interior 3"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/images/image4.jpg"
                alt="Interior 4"
                width={500}
                height={300}
                className="rounded-lg"
              /> */}
            </section>
            <section className="counters-section flex justify-around mt-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold" data-target="125">0</h3>
                <p className="text-gray-600">Projects</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold" data-target="90">0</h3>
                <p className="text-gray-600">Customers</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold" data-target="32">0</h3>
                <p className="text-gray-600">Partners</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold" data-target="10">0</h3>
                <p className="text-gray-600">Years</p>
              </div>
            </section>
          </main>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400">
    <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-orange-500">Colorlib</h2>
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
            <h3 className="text-sm font-semibold  text-orange-500 tracking-wider uppercase">
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
            <h3 className="text-sm font-semibold text-orange-500 tracking-wider uppercase">
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
            <h3 className="text-sm font-semibold text-orange-500 tracking-wider uppercase">
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
          &copy; 2023-2024 All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
  );
}
