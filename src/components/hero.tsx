"use client";
import { Button } from "./button";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-r from-orange-400 to-green-500 pt-20 md:py-20">
      <div className="container px-4 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
              Sad Hulk Inu
              <span className="text-yellow-300"> (SADHINU)</span>
            </h1>
            <p className="max-w-[600px] text-white text-xl md:text-2xl font-semibold">
              The strongest yet saddest meme token in the crypto universe. Join
              our community and turn that frown upside down! 🐕💪
            </p>
            <div className="flex flex-col pt-6 gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-yellow-400 md:py-[31px] w-full hover:bg-yellow-500 text-gray-900 font-bold text-lg"
              >
                Buy Now
              </Button>
              <Button
                onClick={() => window.open("https://t.me/sadhulkinu", "_blank")}
                size="lg"
                variant="outline"
                className="bg-white/20 md:py-[30px] w-full hover:bg-white/30 text-white border-white"
              >
                Join Community
              </Button>
            </div>
            <div className="animate-bounce mt-4">
              <span className="inline-flex text-center flex w-full items-center justify-center bg-white/20 rounded-full px-4 py-2 mt-8 text-[25px] font-bold text-white">
                TO THE MOON! 🚀🌕
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              alt="Sad Hulk Inu Logo"
              className="aspect-square w-full max-w-[400px] md:translate-y-[80px] transform rounded-lg object-contain animate-pulse"
              src="/logo-trans.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
