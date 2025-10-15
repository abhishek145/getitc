import React from "react";
import aboutHero from "../../assets/hexagon-6564551_1280.jpg";
import complianceImg from "../../assets/scanandreport.jpg";
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
              The Only {" "}
              <span className="text-blue-600 bg-yellow-200 px-2 py-1 rounded">
                ADA
              </span>
              <br />
              Compliance Company with Legal Immunity Guarantee.
            </motion.h1>

            <motion.p
              className="text-gray-600 mb-8 text-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Get Into Compliance LLC stands alone in the digital
              accessibility consulting industry: <strong>we are the only
                company with an in-house legal team that can guarantee
                your business will not be sued over website accessibility
                issues for three full years.</strong> Our specialized,
              cost-effective solutions provide complete legal protection,
              not just technical compliance.
            </motion.p>

            <motion.p
              className="text-gray-600 mb-8 text-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <strong>
                Our founder, ensures top compliance standards,
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
    What We Deliver
  </h2>

  <ul className="text-gray-600 mb-6 space-y-4 list-disc pl-5">
    <li>
      <span className="font-semibold text-gray-800">Legal-Grade Compliance:</span> 
      Our in-house legal team ensures every solution is designed for courtroom defense, not just regulatory compliance.
    </li>
    <li>
      <span className="font-semibold text-gray-800">Guaranteed Protection:</span> 
      Our 3-year lawsuit immunity guarantee is backed by legal professionals who understand both compliance requirements and litigation defense strategies.
    </li>
    <li>
      <span className="font-semibold text-gray-800">Cost-Effective Excellence:</span> 
      Why pay premium rates for uncertain protection? Our specialized solutions deliver guaranteed results at competitive prices.
    </li>
    <li>
      <span className="font-semibold text-gray-800">Litigation Prevention:</span> 
      Beyond identifying compliance gaps, our legal team creates bulletproof protection strategies that eliminate lawsuit risk entirely.
    </li>
  </ul>

  <motion.button
    className="px-6 py-3 rounded-md bg-green-700 text-white font-medium hover:bg-green-800 transition"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => navigate("/contact", { state: { scrollToContact: true } })}
  >
    Get Your Free Accessibility Scan Today
  </motion.button>
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
      Why Organizations Choose Our Legal Protection
    </h2>

    <ul className="space-y-4 text-gray-700 mb-6">
      <li>
        <span className="font-semibold text-gray-800">In-House Legal Team:</span>{" "}
        We're the only compliance company with dedicated legal professionals who guarantee your protection in writing.
      </li>
      <li>
        <span className="font-semibold text-gray-800">Proven Guarantee:</span>{" "}
        Our 3-year lawsuit protection guarantee has never been successfully challenged because our legal team ensures courtroom-defensible compliance.
      </li>
      <li>
        <span className="font-semibold text-gray-800">Affordable Legal Immunity:</span>{" "}
        Our specialized approach makes complete legal protection accessible to businesses of all sizes.
      </li>
      <li>
        <span className="font-semibold text-gray-800">Trusted Legal Guidance:</span>{" "}
        When ADA compliance absolutely must provide legal protection, organizations rely on our in-house legal team's expertise.
      </li>
    </ul>

    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
      Your Complete Legal Shield
    </h3>

    <p className="text-gray-600">
      In today's litigious environment, ADA website accessibility lawsuits are not just possible—they're probable.{" "}
      <span className="font-semibold text-gray-800">Get Into Compliance LLC</span>{" "}
      provides the industry's only complete legal shield:{" "}
      <em>specialized, cost-effective solutions backed by our in-house legal team and guaranteed for three full years.</em>
    </p>
  </div>

  {/* Image */}
  <div>
    <img
      src={trustImg}
      alt="Legal Protection Guarantee"
      className="rounded-xl shadow-lg object-cover w-full"
    />
  </div>
</div>

      </section>
    </div>
  );
};

export default About;
