"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { TextArea } from "@/components/textarea";

export const PageClient = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Footer />
      <div className="sm:min-h-[70vh] my-4 flex justify-center items-start sm:my-16">
        <TextArea />
      </div>
    </div>
  );
};
