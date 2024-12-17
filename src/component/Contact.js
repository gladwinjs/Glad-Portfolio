import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styled, { keyframes } from "styled-components";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
 // For animations

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v14ncg3", // Replace with your EmailJS service ID
        "template_r949i7n", // Replace with your EmailJS template ID
        form.current,
        "q7GVJiK0WZxxjsW8j" // Replace with your EmailJS public key
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for reaching out. I will get back to you soon.",
            confirmButtonColor: "#007bff",
          });
          form.current.reset();
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Oops, something went wrong!",
            text: "Please try again later.",
            confirmButtonColor: "#d33",
          });
        }
      );
  };

  return (
    <ContactContainer>
      {/* Background Animation */}
      <AnimatedBackground />

      <FormContainer
        as={motion.form}
        ref={form}
        onSubmit={sendEmail}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Contact Me
        </motion.h1>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I'd love to hear from you. Please fill out the form below.
        </motion.p>
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          whileFocus={{ scale: 1.05 }}
        />
        <motion.textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          whileFocus={{ scale: 1.05 }}
        ></motion.textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;

/* Background Animation */
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

/* Styled Components */
const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to right, #6a11cb, #2575fc);
`;

const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #6a11cb, #2575fc, #ff7eb3, #ff758c);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  z-index: 0;
  opacity: 0.8;
`;

const FormContainer = styled.form`
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #007bff;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    color: #666;
  }

  input,
  textarea {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: #f9f9f9;

    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
    }
  }

  textarea {
    resize: none;
  }

  button {
    background: #007bff;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #0056b3;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
    }
  }
`;
