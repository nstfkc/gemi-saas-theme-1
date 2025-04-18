import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="container max-w-xl mx-auto">
      <h1 className="text-[96px] font-bold text-center leading-tight">
        <span className="text-black">Launch your</span>
        <br />
        <span className="text-gray-700">SaaS faster</span>
      </h1>
      <div className="h-8" />
      <p className="text-2xl text-gray-500 text-center">
        Nemo enim ipsam voluptatem quia volupta sit aspernatur aut odit aut
        fugit
      </p>
      <div className="h-8" />
      <div className="flex justify-center gap-4">
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
