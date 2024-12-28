import type { Metadata } from "next";
import ContactForm from "../ui/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact - next.js template",
  description: "Contact - next.js template",
};

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center w-[90%]">
      <h1 className="pt-12 text-4xl sm:text-6xl md:text-6xl lg:text-6xl  xl:text-8xl text-center">
        Next.js and TailWind Project
      </h1>
      <h1 className="pt-4  pb-6 text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-center">
        Custom Form Component
      </h1>
      <ContactForm />
    </div>
  );
}
