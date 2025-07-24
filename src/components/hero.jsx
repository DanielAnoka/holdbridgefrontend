import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from './ui/button';

const LandingPage = () => {
  return (
    <section className="text-white w-full py-8 md:py-10 lg:py-24 xl:py-32 ">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Secure Escrow Services <br /> for Online Transactions
        </h1>
        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
          HoldBridge provides secure escrow services that protect both buyers and sellers.
          Trade with confidence knowing your funds are safe.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* <Button variant="primary">Get started</Button>
          <Button variant="secondary">How it works</Button> */}
           <Link to="/waitlist">
            <Button variant="primary" className="mt-4 inline-flex items-center gap-2 h-14 w-40 ">
              Join waitlist <ArrowRight size={16} />
            </Button>
          </Link>
        </div>

        <img
          src="/hero.jpg"
          alt="Dashboard preview"
          className="mt-10 rounded-md shadow-lg mx-auto w-full max-w-4xl"
        />
      </div>
    </section>
  );
};

export default LandingPage;
