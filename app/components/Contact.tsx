// app/components/Contact.tsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-8" data-aos="fade-down">
      <h2 className="text-3xl text-center font-bold">Contact</h2>
      <form className="mt-8 max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-lg" />
        <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-lg" />
        <textarea placeholder="Your Message" className="w-full p-4 border border-gray-300 rounded-lg" rows={4}></textarea>
        <button type="submit" className="w-full bg-gray-800 text-white py-3 rounded-full hover:bg-gray-600">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
