import React from "react";
import { Heading } from "./_components/heading";

const LandingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center jutify-center md: justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
      </div>
    </div>
  );
};

// 5분 30초 부터
export default LandingPage;
