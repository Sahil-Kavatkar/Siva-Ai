import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Context-Aware Responses",
    description: "Advanced algorithms process and understand complex queries using RAG and Graph-RAG technologies.",
    icon: "🤖",
    details: "Our system combines multiple data sources to provide accurate, contextual responses tailored to your specific needs."
  },
  {
    title: "Predictive Analytics",
    description: "Anticipate trends and make data-driven decisions with our advanced forecasting capabilities.",
    icon: "📈",
    details: "Leverage historical data and machine learning to predict future outcomes and optimize business strategies."
  },
  {
    title: "Workflow Automation",
    description: "Streamline processes and boost productivity with intelligent automation solutions.",
    icon: "⚡",
    details: "Automate repetitive tasks and create efficient workflows that save time and reduce errors."
  },
  {
    title: "Multi-Modal Processing",
    description: "Process text, images, audio, and video content with advanced AI capabilities.",
    icon: "🎯",
    details: "Handle diverse data types and extract meaningful insights across different formats."
  },
  {
    title: "Enterprise Integration",
    description: "Seamlessly connect with existing enterprise systems and databases.",
    icon: "🔄",
    details: "Easy integration with your current tech stack ensures smooth adoption and deployment."
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security with compliance to industry standards.",
    icon: "🔒",
    details: "Maintain data privacy and security with advanced encryption and access controls."
  }
];

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-purple-900/50 to-gray-900/50 p-6 rounded-lg transform transition-all duration-300">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold text-neon-purple mb-4">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
          {/* Hover details section */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-neon-purple/10 text-neon-purple font-medium p-4 rounded-lg mt-4 shadow-md"
          >
            {feature.details}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
