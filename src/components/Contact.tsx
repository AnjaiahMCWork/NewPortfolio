import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  // faFacebook,
  // faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
  // Step 1: Add the handleSubmit function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior.

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Step 2: Send the data to your backend API
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => {
        if (response.ok) {
          alert('Message sent successfully!');
        } else {
          alert('Failed to send the message. Please try again later.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      });
  };
  return (
    <section className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        {/* Contact Me Heading */}
        <h2 className="text-5xl font-bold mb-12 text-left text-[#fff] scale-in">
          Contact Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-x-0 space-y-10 scale-in">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#ff004f]" size="2x" />
              <div>
                <h3 className="text-2xl font-bold">Email</h3>
                <p className="text-[#fff]">anjaiahmcwork@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-[#ff004f]" size="2x" />
              <div>
                <h3 className="text-2xl font-bold">Phone</h3>
                <p className="text-[#ababab]">91+ 6360396339</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                // className="bg-[#262626] p-4 rounded-lg flex items-center justify-center hover:bg-[#ff6b7f] transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-[#ababab] hover:text-[#ff004f]" size="3x" />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                // className="bg-[#262626] p-4 rounded-lg flex items-center justify-center hover:bg-[#ff6b7f] transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faGithub} className="text-[#ababab] hover:text-[#ff004f]" size="3x" />
              </a>
              <a
              href="/AnjaiahGameDev.pdf"
              target="_blank"
              className="inline-block bg-[#ff004f] px-6 py-3 rounded-lg hover:bg-[#ff6b7f] transition-colors duration-300"
              >
                Download Resume
              </a>
              {/* <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#262626] p-4 rounded-lg flex items-center justify-center hover:bg-[#ff6b7f] transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-[#ababab] hover:text-[#fff]" size="2x" />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#262626] p-4 rounded-lg flex items-center justify-center hover:bg-[#ff6b7f] transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-[#ababab] hover:text-[#fff]" size="2x" />
              </a> */}
            </div>
          </div>

          {/* Right Section: Form */}
          <form className=" space-y-6 scale-in -ml-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-[#262626] text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff004f] transform scale-x-110"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-[#262626] text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff004f] transform scale-x-110"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full p-4 bg-[#262626] text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff004f] transform scale-x-110"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#ff004f] text-white px-8 py-3 text-lg rounded-lg hover:bg-[#ff6b7f] transition-colors duration-300 mr-auto -ml-8"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
