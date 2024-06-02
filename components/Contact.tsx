"use client";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/supabase";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("messages")
        .insert([formData]);

      if (error) {
        throw error;
      }

      console.log("Form data submitted successfully:", data);
      // Optionally, display a success message to the user
    } catch (error) {
      console.error("Error submitting form data:", error.message);
      // Optionally, display an error message to the user
    }
  };

  return (
    <div className="mt-40 max-w-7xl min-h-[70vh] px-10">
      <h2 className="text-3xl lg:text-6xl text-white text-center mb-40 tracking-tight font-extrabold">
        Hire Me!
      </h2>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 gap-8">
        <div>
          <h3 className="font-bold mb-8 text-gray-100 tracking-wider text-xl">
            LET'S CONNECT
          </h3>
          <p className="text-gray-300 tracking-tight">
            I'm currently looking for new opportunities.Feel free to reach by
            email or by using the contact form
          </p>
          <div
            className="text-left mt-6"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "200px",
            }}
          >
            <Link
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} color="#fff" />
            </Link>
            <Link
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} color="#fff" />
            </Link>
            <Link
              href="mailto:your.email@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={30} color="#fff" />
            </Link>
          </div>
        </div>
        <div className="bg-black-200 flex flex-col rounded-2xl">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col p-6 text-black"
          >
            <label className="mb-2 text-white-100" htmlFor="name">
              Name
            </label>
            <input
              className="bg-white py-2 px-4 rounded-lg mb-4"
              type="text"
              placeholder="Your Name"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label className="mb-2 text-white-100" htmlFor="email">
              Email
            </label>
            <input
              className="bg-white py-2 px-4 rounded-lg mb-4"
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label className="mb-2 text-white-100" htmlFor="message">
              Message
            </label>
            <textarea
              className="bg-white py-2 px-4 rounded-lg mb-4"
              placeholder="Enter your message"
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="mdLg:ml-6 cursor-pointer rounded-full bg-gradient-to-r from-pink-800 to-violet-900 p-3 text-base text-slate-200 hover:from-pink-700 hover:to-violet-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
