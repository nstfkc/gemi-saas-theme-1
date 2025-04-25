const SandwichImage = () => {
  return (
    <div className="">
      <img
        className="relative z-40 -mb-[27%]"
        src="/sandwich_top.png"
        alt="sandwich top"
      />
      <img
        className="relative z-30 sm:-ml-[5%]"
        src="/sandwich_middle.png"
        alt="sandwich middle"
      />
      <img
        className="relative z-20 -mt-[31%]"
        src="/sandwich_bottom.png"
        alt="sandwich bottom"
      />
    </div>
  );
};

export const Sandwich = () => {
  return (
    <div className="container max-w-screen-2xl mx-auto flex justify-center max-sm:px-8 max-md:px-19">
      <SandwichImage />
    </div>
  );
};
