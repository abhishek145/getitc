import React from "react";
import aboutHero from "../../assets/woman-792162_1280.jpg";
import complianceImg from "../../assets/woman-792162_1280.jpg";
import processImg from "../../assets/woman-792162_1280.jpg";
import trustImg from "../../assets/woman-792162_1280.jpg";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-green-700 font-semibold text-sm tracking-wide uppercase mb-3">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Compliance Made Simple, <br /> Secure, and Reliable
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            We help businesses navigate the complex world of regulatory
            compliance with technology-driven solutions. From data protection to
            financial regulations, our platform ensures you stay compliant,
            avoid risks, and build trust with your customers.
          </p>
          <button className="px-6 py-3 rounded-md bg-green-700 text-white font-medium hover:bg-green-800 transition">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={aboutHero}
            alt="About Compliance"
            className="rounded-2xl shadow-lg object-cover w-full max-h-[400px]"
          />
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
              Simplifying Compliance for Every Business
            </h2>
            <p className="text-gray-600 mb-6">
              Compliance requirements vary across industries and regions —
              whether it’s GDPR, HIPAA, ISO standards, or financial audits. Our
              platform brings everything under one dashboard, reducing
              complexity and ensuring that your organization stays audit-ready
              at all times.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li>✅ Centralized compliance documentation</li>
              <li>✅ Real-time monitoring and reporting</li>
              <li>✅ Easy integration with existing systems</li>
              <li>✅ Automated alerts for policy updates</li>
            </ul>
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
