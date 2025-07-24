import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./ui/button";
import { Link } from "react-router-dom";

const SecureTransactions = () => {
  return (
    <section className=" text-white px-4 py-16">
      <div
        className="mx-auto max-w-[94%] flex flex-col md:flex-row items-center gap-10 border border-white/10  rounded-[30px] p-6 md:p-10 shadow-lg"

      >

        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            Ready To secure Your <br className="hidden md:block" />
            Transactions?
          </h2>
          <p className="text-white/70 text-sm md:text-base">
            Take the stress out of transactions. Start using HoldBridge and enjoy simple, secure payments.
          </p>
          <Link to="/waitlist">
            <Button variant="primary" className="mt-4 inline-flex items-center gap-2 h-14 w-40">
              Join waitlist <ArrowRight size={16} />
            </Button>
          </Link>
        </div>


        <div className="flex-1 w-full">
          <img
            src="/hero.jpg"
            alt="Dashboard preview"
            className="w-full h-full rounded-[20px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SecureTransactions;
