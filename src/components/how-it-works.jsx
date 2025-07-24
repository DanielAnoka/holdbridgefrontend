import StepCard from "../components/ui/step-card";

const steps = [
  {
    title: "Create Transaction",
    description:
      "Buyer and seller agree on terms and create a secure escrow transaction.",
    image: "/step1.png",
  },
  {
    title: "Secure Payment",
    description:
      "Buyer deposits funds into our secure escrow account for protection.",
    image: "/step2.png",
  },
  {
    title: "Complete & Release",
    description:
      "Once both parties confirm completion, funds are released to the seller.",
    image: "/step3.png",
  },
];

const HowItWorks = () => {
  return (
    <section className=" text-white py-20 px-4" id="how-it-works">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">How HoldBridge Works</h2>
        <p className="text-white/80 max-w-xl mx-auto text-sm md:text-base">
          Every transaction follows a clear path—funds are safely held,
          work gets delivered, payments are released. No risks, no drama.
        </p>
      </div>

      <div className="mt-12 grid gap-2 md:grid-cols-3">
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
