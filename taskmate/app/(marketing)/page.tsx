import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFonts = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ]
})

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className={cn("flex items-center justify-center flex-col",
      headingFont.className)}>
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 uppercase rounded-full ">
          <Medal className="h-5 w-5 mr-2" />
          No 1 task Management
        </div>
        <h1
          className=
            "text-3xl md:text-6xl text-center text-neutral-800"
            
        >
          Taskmate help team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-2 p-2 rounded-md mt-4 w-fit">
          work forward
        </div>
      </div>

      <div className={cn("text-sm md:text-xl text-neutral-400 mt-4 max-w-sm md:max-w-2xl text-center mx-auto",
      textFonts.className)}>
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to home office, the way your team works is unique -
        accomplish it all with Taskmate
      </div>

      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get Taskmate for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
