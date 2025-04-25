import { Button } from "./ui/button";

export const FinalCTA = () => {
  return (
    <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center gap-8 sm:gap-12">
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-medium text-center leading-">
        Start Building
        <br />
        <span className="font-normal text-[#0000008F]"> in Minutes</span>
      </h1>
      <p className="text-[#0000008F] text-base sm:text-lg md:text-2xl font-medium text-center">
        Nemo enim ipsam voluptatem quia voluptas <br /> sit aspernatur aut odit
        aut fugit
      </p>
      <Button
        size="xl"
        className="bg-[#1C59F5] flex justify-between text-2xl md:text-6xl font-semibold rounded-2xl"
      >
        Final CTA
        <img
          className="w-10 h-10 sm:w-14 sm:h-14 md:h-22 md:w-22"
          src="/github_icon.svg"
          alt="github icon"
        />
      </Button>
    </div>
  );
};
