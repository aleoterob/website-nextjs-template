import type { Metadata } from "next";
import ContactForm from "../ui/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact - next.js template",
  description: "Contact - next.js template",
};

export default function Contact() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="pt-12 text-7xl text-center">
        Simple Next.js and TailWind Project
      </h1>
      <h1 className="pt-4  pb-10 text-4xl text-center">
        Form Component from Tailwind Library
      </h1>
      <ContactForm />
    </div>
  );
}