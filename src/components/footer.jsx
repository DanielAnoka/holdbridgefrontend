import React from "react";

const Footer = () => {
  return (
    <footer className="bg-darkbg text-white px-4 py-10">
      <div className="max-w-7xl mx-auto border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between gap-8">
      
        <div className="flex items-start gap-3">
          <img
            src="/logo.png"
            alt="HoldBridge"
            className="w-[50px] h-[50px] object-contain mt-1"
          />
          <div>
            <a href="/" className="block mb-1">
              <span className="text-xl font-semibold">HoldBridge</span>
            </a>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              Secure Escrow Services for Online Transactions
            </p>
          </div>
        </div>

     
        <div className="flex gap-12 text-sm item-center md:item-end ">
          <div>
            <h4 className="font-semibold mb-3">Quick links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="/">Home</a></li>
              <li><a href="#how-it-works">How it works</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#contact">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-6xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/60 gap-4">
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">LinkedIn</a>
        </div>
        <p className="text-center">© 2025 HoldBridge. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
