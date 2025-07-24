import Image from "next/image";
import { useRef } from "react";

export default function ReviewSection() {
  const sectionRef = useRef(null);
  const divRef1 = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="section"
      className="min-h-screen relative z-10 bg-white flex flex-col gap-0 items-center 
        px-10 py-40 -mt-[1px] rounded-t-[50px] will-change-transform overflow-hidden"
    >
      {/* <div className="w-full grid grid-cols-3"> */}
        <div className="w-full space-y-5 absolute left-10 top-10">
          <h1 className="font-semibold text-2xl text-start text-zinc-900 leading-[1]">
            Clients
          </h1>
          {/* <p className="text-xl text-start font-semibold text-zinc-600 w-[90%]">
            What our clients want to say about their workspace transformation
            experience with us.
          </p> */}
        </div> 

      <div
        ref={divRef1}
        className="w-[80%] flex items-center justify-center gap-10"
      >
        <div className="relative flex-1">
          <div className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-5">
            <h1
              id="first-div"
              className="text-4xl font-semibold tracking-tight text-zinc-600"
            >
              &quot;Excellent service from start to finish! They helped us design our
              new office layout and provided high-quality chairs and desks that
              our team absolutely loves&&quot;
            </h1>
            <div className="flex items-start">
              <p className="text-xl font-semibold text-orange-600">//&nbsp;</p>
              <div className="flex flex-col">
                <p className="text-xl font-semibold">Sarah Johnson</p>
                <p className="text-lg font-semibold text-zinc-400">
                  Project Manager, TechStart Solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="h-24 w-24 border-4 border-orange-600 rounded-full overflow-hidden">
            <Image
              width={200}
              height={200}
              src="/images/home/clients/user1.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-24 w-24 border-4 border-orange-600 rounded-full overflow-hidden">
            <Image
              width={200}
              height={200}
              src="/images/home/clients/user1.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-24 w-24 border-4 border-orange-600 rounded-full overflow-hidden">
            <Image
              width={200}
              height={200}
              src="/images/home/clients/user1.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
