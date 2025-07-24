import Button from "../../components/ui/button"
import InputField from "../../components/ui/input"

const avatarImages = ["/icon1.png", "/icon2.png", "/icon3.png"];

const Waitlist = () => {
    return (
        <section className="w-full px-4 py-20 md:py-28 bg-background text-white">
            <div className="max-w-3xl mx-auto text-center space-y-3">
                <p className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-[#00B2FF] text-[#00B2FF] text-sm font-medium w-fit">
                    <span className="text-xl leading-none">•</span>
                    Early access
                </p>

                <h1 className="text-3xl md:text-4xl font-semibold">
                    HoldBridge is coming…..
                </h1>
                <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base">
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
                <div className=" border border-white/10 rounded-xl p-6 md:p-8 space-y-4 max-w-xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField
                            name="firstName"
                            placeholder="Enter first name"
                            required
                        />
                        <InputField
                            name="lastName"
                            placeholder="Enter last name"
                            required
                        />
                    </div>
                    <InputField
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                    />
                    <Button  className="w-full py-3 mt-2">
                        Submit
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Waitlist