"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"; // shadcn 설치시 자동 설치되는 패키지

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Write, Plan, share. With AI at your side. Welcome to{" "}
        <span className="underline">Notion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl">
        Notion is the connected workspace where better, faster work happens.
      </h3>
      <Button>
        Enter Notion
        <ArrowRight className="h4 w-4 ml-2" />
      </Button>
    </div>
  );
};
