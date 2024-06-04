"use client";

import Link from "next/link";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { sendEmail } from "@/utils/send-email";
import { useForm } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div className="mt-20 max-w-7xl max-h[90vh] px-10 ">
      <h2 className="text-3xl lg:text-6xl text-white text-center mb-20 tracking-tight font-extrabold">
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
              className="cursor-pointer"
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
        <div className="bg-black flex flex-col rounded-2xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col p-6 text-[black] bg-gradient-to-r from-pink-800 to-violet-900 rounded-2xl"
          >
            <label className="mb-2 text-white-100" htmlFor="name">
              Name
            </label>
            <input
              className="bg-white py-2 px-4 rounded-lg mb-4"
              type="text"
              placeholder="Your Name"
              required
              {...register("name", { required: true })}
            />
            <label className="mb-2 text-white-100" htmlFor="email">
              Email
            </label>
            <input
              className="bg-white py-2 px-4 rounded-lg mb-4"
              type="email"
              placeholder="Email"
              required
              {...register("email", { required: true })}
            />

            <label className="mb-2 text-white-100" htmlFor="message">
              Message
            </label>
            <textarea
              className="bg-white py-2 px-4 rounded-lg mb-4"
              placeholder="Enter your message"
              rows={4}
              required
              {...register("message", { required: true })}
            />
            <button
              type="submit"
              value="Submit"
              className="mdLg:ml-6 cursor-pointer rounded-full bg-white text-black py-2 px-4 mdLg:py-3 mdLg:px-6 mdLg:text-lg font-bold hover:bg-[#f0f0f0] transition duration-300 ease-in-out mt-4 mdLg:mt-6"
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
