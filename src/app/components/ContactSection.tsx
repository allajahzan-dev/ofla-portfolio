import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import HeadingAnimated from "@/components/animated/HeadingAnimated";

export default function ContactSection() {
    return (
        <section
            style={{ backgroundImage: 'url("/images/home/contact/contact.png")' }}
            className="min-h-screen relative z-20 bg-[#171717] flex flex-col gap-20 items-center 
            px-10 py-40 rounded-t-[50px] will-change-transform overflow-hidden bg-cover bg-center"
        >
            <div className="w-full grid grid-cols-3">
                <HeadingAnimated
                    title={
                        <div className="flex flex-col gap-28">
                            <p
                                className={cn(
                                    "text-2xl font-medium tracking-wide text-white",
                                    oswald.className
                                )}
                            >
                                SULTHAN
                            </p>
                            <h1 className="font-semibold text-8xl text-start text-white leading-[1]">
                                Let&rsquo;s connect
                                <br />
                                {/* shop */}
                            </h1>
                        </div>
                    }
                    subTitle={<></>}
                    className="flex flex-col gap-5"
                    isContactSection={true}
                />

            </div>
        </section>
    );
}
