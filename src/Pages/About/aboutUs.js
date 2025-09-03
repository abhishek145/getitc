import React from "react";
import aboutHero from "../../assets/hexagon-6564551_1280.jpg";
import complianceImg from "../../assets/reportingandaudit.jpg";
import processImg from "../../assets/physics-3873118_1280.jpg";
import trustImg from "../../assets/hands-5655424_1280.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-b from-red-100 via-pink-100 to-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 grid gap-12">
    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
     <motion.p
  className="text-green-700 font-semibold text-sm tracking-wide uppercase mb-3 cursor-pointer hover:text-green-800 transition-colors"
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.6 }}
 
>
  About Us
</motion.p>


      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        State Approved{" "}
        <span className="text-blue-600 bg-yellow-200 px-2 py-1 rounded">
          ADA
        </span>
        <br />
        Compliance Partner.
      </motion.h1>

      <motion.p
  className="text-gray-600 mb-8 text-lg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
>
  We’re a Minnesota-based, state-approved ADA vendor dedicated to website accessibility. 
  With legal insight and hands-on testing experience, we guide organizations in making their 
  sites easier to use for people of all abilities.
</motion.p>

<motion.p
  className="text-gray-600 mb-8 text-lg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7, duration: 0.8 }}
>
  <strong>
    Our founder, a former attorney and operating paralegal, ensures top compliance standards, 
    giving us a unique perspective at the intersection of accessibility and business.
  </strong>
</motion.p>


      <motion.button
        className="px-6 py-3 rounded-md bg-green-700 text-white font-medium hover:bg-green-800 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/contact", { state: { scrollToContact: true } })}
      >
        Learn More
      </motion.button>
    </motion.div>
  </div>
</section>




      {/* Section 2: What We Do */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src={complianceImg}
              alt="Compliance Process"
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </div>

          {/* Content */}
          <div>
  <h2 className="text-3xl font-bold text-gray-900 mb-6">
    Get Your Free Accessibility Scan Today
  </h2>

  <p className="text-gray-600 mb-4">
    We help Minnesota businesses make their websites accessible, inclusive, and aligned with both federal ADA law and state requirements. As a state-approved ADA compliance vendor, we bring credibility and practical expertise to every project.
  </p>

  <p className="text-gray-600 mb-4">
    Our mission is simple: to make accessibility approachable. We believe compliance is more than just avoiding legal risk—it’s about reaching more people, improving visibility, and giving every visitor a better online experience.
  </p>

  <p className="text-gray-600 mb-4">
    We partner with businesses of all sizes, from local shops to public organizations, and guide them step by step without unnecessary complexity. With a focus on inclusion, professionalism, and long-term support, we’re here to ensure your website works for everyone.
  </p>
</div>

        </div>
      </section>

      {/* Section 3: Our Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Compliance Process
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            We follow a structured process to ensure that compliance is not just
            a checkbox but a value addition to your business. Our experts and
            platform work together to streamline compliance management.
          </p>

          {/* Process Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-left">
              <img
                src={processImg}
                alt="Assessment"
                className="rounded-md mb-4 h-40 w-full object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Assessment
              </h3>
              <p className="text-gray-600">
                We begin by assessing your current compliance status, identifying
                gaps, and understanding your regulatory requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-left">
              <img
                src={processImg}
                alt="Implementation"
                className="rounded-md mb-4 h-40 w-full object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Implementation
              </h3>
              <p className="text-gray-600">
                Our team helps implement necessary frameworks, tools, and
                policies to align your business with compliance standards.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-left">
              <img
                src={processImg}
                alt="Monitoring"
                className="rounded-md mb-4 h-40 w-full object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Monitoring
              </h3>
              <p className="text-gray-600">
                Continuous monitoring and automated alerts ensure you remain
                compliant even as regulations evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Trust Us */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Businesses Trust Us
            </h2>
            <p className="text-gray-600 mb-6">
              Over the years, we’ve supported startups, SMEs, and enterprises in
              achieving compliance without unnecessary stress. Our reputation is
              built on trust, innovation, and customer success.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li>🔒 Secure data handling</li>
              <li>⚡ Scalable compliance platform</li>
              <li>🤝 Dedicated support team</li>
              <li>🌍 Global compliance coverage</li>
            </ul>
          </div>

          {/* Image */}
          <div>
            <img
              src={trustImg}
              alt="Trusted Compliance"
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
