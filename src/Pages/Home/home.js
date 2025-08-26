"use client";
import heroImage from "../../assets/compliance-5899191_1280.jpg";
import { motion } from "framer-motion";
import aboutImage from "../../assets/man-5899192_1280.jpg"; 
import compliance1 from "../../assets/conflict-of-interest-7727331_1280.png";
import compliance2 from "../../assets/ball-63527_1280.jpg";
import compliance3 from "../../assets/man-76202_1280.jpg";

export default function Home() {
  const cards = [
    { id: 1, title: "Regulatory compliance", desc: "Being a state enforced regulation, being compliant with the latest regulations helps your business avoid a civil liability and improve consumer faith.", img: compliance1 },
    { id: 2, title: "Data protection", desc: "Ensure latest WCAG regulations for your website and ongoing improvements with secure workflows.", img: compliance2 },
    { id: 3, title: "Audit & Reporting", desc: "Automated reporting and real-time auditing to help you stay compliant and avoid penalties.", img: compliance3 },
   
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-2 gap-12 items-center overflow-hidden">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-green-700 font-semibold text-sm tracking-wide uppercase mb-3">
          Welcome To Get Into Compliance
          </p>
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
          Making Websites<br/> Accessible for Everyone
          </h1>
          <p className="text-gray-600 mb-8">
          We help businesses make their websites accessible to ALL.
         </p>
          <div className="flex gap-4 flex-wrap mb-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-md bg-green-700 text-white font-medium hover:bg-green-800 transition"
            >
              Get your Free website accessibility check

            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              Learn More →
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            src={heroImage}
            alt="Hero"
            className="rounded-2xl shadow-lg object-cover w-full max-w-lg md:max-w-full"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          />

          {/* <motion.div
            className="absolute bottom-[-20px] left-1/6 transform -translate-x-1/8 md:left-1/2 md:translate-x-1/2 bg-green-100 rounded-xl shadow-lg p-5 w-72 md:w-64"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-xs text-gray-500 mb-2">Compliance Status</p>
            <h3 className="text-lg font-bold text-gray-900">Audit Ready</h3>
            <p className="text-2xl font-bold text-gray-800">✔ Fully Compliant</p>
            <p className="text-sm text-green-600 mb-4">Updated Today</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex justify-between"><span>📝 Reports Generated</span> <span>12</span></li>
              <li className="flex justify-between"><span>🔒 Data Secured</span> <span>100%</span></li>
              <li className="flex justify-between"><span>⚖️ Compliance Checks</span> <span>Passed</span></li>
            </ul>
          </motion.div> */}
        </motion.div>
      </div>

      {/* About & Mission */}
      <div className="bg-white py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.img
              src={aboutImage}
              alt="About Compliance"
              className="rounded-2xl shadow-lg mb-6 w-full"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            {/* <motion.div
              className="bg-teal-800 text-white p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="text-xs uppercase tracking-wider font-semibold mb-2">Our Mission</p>
              <p className="text-lg leading-relaxed">
                Empower businesses to stay compliant, protect data, and automate reporting with reliable tools.
              </p>
            </motion.div> */}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">Avoid lawsuits with a compliant, user-friendly website

</h2>
            <p className="text-gray-600 mb-4">
            Accessibility lawsuits are rapidly increasing, making compliance more important than ever. Protect your business by scanning your website today to uncover its accessibility status and take the first step toward reducing risk and building inclusivity.

            </p>
           
            <div className="grid grid-cols-2 gap-4">
              {["Automation", "Security", "Accuracy", "Transparency", "Efficiency"].map((value, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 text-gray-800"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * i }}
                >
                  <span className="text-green-600 text-lg">✔</span>
                  <span>{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Compliance Cards */}
      <div className="px-6 md:px-16 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Expert Get Into Compliance Attorneys</h1>
          <p className="mt-4 text-lg text-gray-600">Helping businesses stay compliant, protect data, and streamline reporting.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
            >
              <img src={card.img} alt={card.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold text-gray-800">{card.title}</h2>
              <p className="mt-2 text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Benefit for your business          </h2>
          <p className="mt-4 text-lg text-gray-600">Web accessibility is the right thing to do          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Showcase inclusivity", desc: "Help build a more accessible internet while improving the digital experience for millions.", icon: "🛠️" },
            { title: "Reach untapped markets", desc: "An accessible website opens the door to over $8 trillion in disposable income worldwide.", icon: "📡" },
            { title: "Elevate your brand", desc: "Accessibility highlights your commitment to leadership and values, strengthening reputation with every interaction.", icon: "🔒" },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3, duration: 0.8 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">How It Works</h2>
          {/* <p className="mt-4 text-lg text-gray-600">Simple steps to stay compliant and protect your business.</p> */}
        </motion.div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { step: 1, title: "Quick Review", desc: "We take an initial look at your site." },
            { step: 2, title: "Practical Guidance", desc: "We point out what works well and what could improve." },
            { step: 3, title: "Support Along the Way", desc: "We provide resources so your team can update confidently." },
          ].map((step, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3, duration: 0.8 }}
            >
              <div className="text-green-600 text-3xl font-bold mb-2">{step.step}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      {/* <div className="bg-gray-50 py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600">Trusted by businesses worldwide for reliable compliance solutions.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: "Alice Johnson", role: "CFO, TechCorp", quote: "The compliance automation saved us countless hours and reduced errors significantly." },
            { name: "Michael Lee", role: "CEO, FinServe", quote: "A reliable solution that keeps our data safe and compliance on track." },
            { name: "Sarah Thompson", role: "Operations Manager, SecureBank", quote: "Real-time monitoring and reports make audits effortless." },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3, duration: 0.8 }}
            >
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* FAQ Section */}
      {/* <div className="bg-white py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600">Answers to the most common compliance queries.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { q: "What regulations do you support?", a: "Our platform supports GDPR, HIPAA, and other regional compliance standards." },
            { q: "Can we automate reports?", a: "Yes! Reports are generated automatically and can be customized for audits." },
            { q: "Is my data secure?", a: "All data is encrypted at rest and in transit with industry-standard security." },
            { q: "Do you provide client support?", a: "Absolutely! Our support team helps you configure and manage compliance workflows." },
          ].map((faq, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 rounded-2xl p-6 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* Newsletter / Contact CTA */}
      <div className="bg-green-700 py-16 px-6 lg:px-12 text-white text-center rounded-xl max-w-7xl mx-auto mt-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated on Compliance</h2>
        <p className="mb-6">Subscribe to receive the latest updates, tips, and compliance alerts.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md text-gray-800 w-64 max-w-full"
          />
          <button className="px-6 py-2 rounded-md bg-white text-green-700 font-semibold hover:bg-gray-100 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
