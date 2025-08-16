import React, { useEffect, useRef } from "react";
import about1 from "../../assets/woman-792162_1280.jpg";
import about2 from "../../assets/woman-792162_1280.jpg";
import about3 from "../../assets/woman-792162_1280.jpg";
import contactImage from "../../assets/woman-792162_1280.jpg";
import { useLocation } from "react-router-dom";

const AboutPage = () => {
    const location = useLocation();
  const contactRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToContact && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Our Compliance Solutions
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We build trusted compliance platforms that simplify regulatory
          management for businesses of all sizes. Our mission is to ensure
          organizations stay compliant, secure, and ahead in today’s evolving
          regulatory landscape.
        </p>
      </section>

      {/* Section 1 */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img src={about1} alt="Compliance Solutions" className="rounded-xl shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            Compliance can be complex, but we make it simple. Our mission is to
            empower businesses to meet local and global compliance requirements
            effortlessly. From financial reporting to healthcare regulations, we
            help organizations maintain transparency and accountability.
          </p>
          <p className="text-gray-600">
            With our compliance platforms, you can focus on innovation and
            growth while we take care of the rules, processes, and frameworks
            that keep your business safe and secure.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Why Compliance Matters</h2>
          <p className="text-gray-600 mb-4">
            Non-compliance can lead to legal issues, heavy penalties, and loss
            of trust. In today’s digital-first world, ensuring regulatory
            alignment is no longer optional — it’s critical for survival.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Prevent financial losses and penalties.</li>
            <li>Build trust with customers, partners, and investors.</li>
            <li>Stay updated with evolving laws and regulations.</li>
            <li>Secure sensitive data and protect user privacy.</li>
          </ul>
        </div>
        <img src={about2} alt="Why Compliance" className="rounded-xl shadow-lg" />
      </section>

      {/* Section 3 */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img src={about3} alt="Future of Compliance" className="rounded-xl shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-4">The Future of Compliance</h2>
          <p className="text-gray-600 mb-4">
            Compliance is not just about following rules — it’s about building a
            culture of responsibility. Our solutions leverage automation,
            real-time monitoring, and AI-driven insights to help businesses stay
            ahead of compliance challenges.
          </p>
          <p className="text-gray-600">
            We envision a world where compliance is no longer a burden but a
            powerful enabler of growth, trust, and innovation.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-gray-50 py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div ref={contactRef}>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              Have questions about compliance or want to explore how our
              solutions can help your business? Get in touch with us today.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src={contactImage}
              alt="Contact"
              className="rounded-xl shadow-lg w-full md:w-4/5"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
