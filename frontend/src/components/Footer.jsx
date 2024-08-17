import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 text-center sm:text-left">
          <div className="">
            <h2 className="text-lg font-bold mb-4">Abstract</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-lg font-bold mb-4">Resources</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-lg font-bold mb-4">Community</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Forum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-lg font-bold mb-4">Company</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-center sm:text-left">
              &copy; Copyright {new Date().getFullYear()} Abstract Studio
              Design, Inc. <br />
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
