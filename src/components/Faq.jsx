"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does Holdbridge protect my payment?",
    answer:
      "Holdbridge safely holds your payment until the agreed work is delivered and confirmed. This protects both buyers and sellers from fraud or non-delivery.",
  },
  {
    question: "What happens if there’s a dispute?",
    answer:
      "Our support team will review the case and mediate to reach a fair resolution based on the provided evidence.",
  },
  {
    question: "How long does it take to release funds?",
    answer:
      "Funds are typically released within 24 hours of work approval or as agreed upon during the transaction.",
  },
  {
    question: "Can I get a refund if the work isn’t delivered?",
    answer:
      "Yes. If the work is not delivered as agreed, Holdbridge will refund your payment after review.",
  },
  {
    question: "Is there a fee for using Holdbridge?",
    answer:
      "Yes. A small service fee is applied to each transaction to support secure payment processing and customer protection.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-white w-full py-16 px-4 md:px-6 lg:px-10" id="faq">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[32px] md:text-[40px] font-bold leading-[48px]">
          Frequently Asked Questions
        </h2>
        <p className="text-white/70 text-[16px] leading-[26px] mt-3 mb-10">
          Quick answers to help you understand how Holdbridge keeps your
          payments safe and your transactions smooth.
        </p>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className=" border border-white/10 rounded-[12px] px-6 py-6 transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-[18px] font-medium leading-[28px]">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <p className="text-white/70 text-[14px] leading-[24px] mt-4">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
