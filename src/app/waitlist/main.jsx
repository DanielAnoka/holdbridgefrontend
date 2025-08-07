import { useState } from "react";
import Button from "../../components/ui/button";
import InputField from "../../components/ui/input";

const avatarImages = ["/icon1.png", "/icon2.png", "/icon3.png"];

const Waitlist = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section className="w-full px-4 py-20 md:py-28 bg-background text-white text-center">
                <div className="max-w-xl mx-auto space-y-6">
                    <img
                        src="/happy2.png"
                        className="mx-auto opacity-100"
                        style={{ width: '501.63px', height: '243.86px', transform: 'rotate(0deg)' }}
                    />
                    <h1 className="text-2xl md:text-3xl font-semibold">
                        You’re on the waitlist!
                    </h1>
                    <p className="text-white/70 text-sm md:text-base max-w-md mx-auto">
                        Thanks for signing up. You’ve been successfully added to the waitlist.
                        We’ll reach out to you via email with next steps as soon as we begin onboarding.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full px-4 py-20 md:py-28 bg-background text-white">
            <div className="max-w-3xl mx-auto  space-y-3">
                <div className="flex justify-center ">
                    <p className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-[#00B2FF] text-[#00B2FF] text-sm font-medium w-fit ">
                        <span className="text-xl leading-none">•</span>
                        Early access
                    </p>
                </div>


                <h1 className="text-3xl md:text-4xl font-semibold text-center">
                    HoldBridge is coming…..
                </h1>
                <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base text-center">
                    Join our waitlist and be among the first to trade with confidence
                </p>
                <div className="flex justify-center items-center gap-2">
                    <div className="flex -space-x-2">
                        {avatarImages.map((src, index) => (
                            <img
                                key={index}
                                className="w-8 h-8 rounded-full border border-white"
                                src={src}
                                alt={`user-${index + 1}`}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-white/70">100+ Joined already</span>
                </div>
                <form
                    className="border border-white/10 rounded-xl p-6 md:p-8 space-y-4 max-w-xl mx-auto"
                    onSubmit={handleSubmit}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField
                            name="firstName"
                            placeholder="Enter first name"
                            required
                            label="First name"
                        />
                        <InputField
                            name="lastName"
                            placeholder="Enter last name"
                            required
                            label="Last name"
                        />
                    </div>
                    <InputField
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                        label="Email address"
                    />
                    <Button className="w-full py-3 mt-2">Submit</Button>
                </form>
            </div>
        </section>
    );
};

export default Waitlist;
