const FeatureBox = () => {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <img className="size-[50px]" src="/box_icon.svg" alt="box icon" />
      <h1 className="text-[28px] font-medium">Lorem Ipsum</h1>
      <p className="text-xl text-center text-[#0000008F]">
        At vero eos et accusamus
      </p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="container max-w-screen-xl mx-auto grid grid-cols-1 gap-16">
      <h1 className="sm:w-[404px] lg:w-full mx-auto text-center text-[40px] font-medium max-sm:px-4">
        <span className="text-[#0000008F] font-normal">Each feature is </span>
        minimal and adaptable
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
        <FeatureBox />
        <FeatureBox />
        <FeatureBox />
        <FeatureBox />
        <FeatureBox />
        <FeatureBox />
      </div>
    </div>
  );
};

export default Features;
