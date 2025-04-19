import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="container max-w-xl mx-auto">
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-center leading-tight">
        <span className="text-black">Launch your</span>
        <br />
        <span className="block bg-linear-to-b from-[#000] to-[#666666] bg-clip-text text-transparent">
          SaaS faster
        </span>
      </h1>
      <div className="h-8" />
      <p className="text-base sm:text-lg md:text-2xl text-gray-500 max-sm:px-2 text-center">
        Nemo enim ipsam voluptatem quia volupta sit aspernatur aut odit aut
        fugit
      </p>
      <div className="h-8" />
      <div className="flex max-sm:flex-col max-sm:px-8 justify-center gap-4">
        <Button onClick={() => alert("hi")} size="lg">
          Primary Button
        </Button>
        <Button size="lg" variant="secondary">
          Secondary Button
        </Button>
      </div>
    </div>
  );
};
