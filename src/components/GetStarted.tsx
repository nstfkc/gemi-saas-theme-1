import { ReactNode } from "react";

const StepCard = ({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="max-w-[434px] max-h-fit lg:max-h-[512px] grid grid-rows-2 px-10 py-14 md:py-16 bg-[#F5F5F5] relative rounded-xl">
      <div className="row-span-1">
        <p className="text-[12px] font-medium">{step}</p>
      </div>
      <div className="absolute -top-3 right-0 z-0">
        <img
          className="w-[317px] h-[317px]"
          src="/astronault.png"
          alt="astronault"
        />
      </div>
      <div className="row-span-1 z-1">
        <h1 className="font-medium text-[28px]">{title}</h1>
        <div className="h-8" />
        <p className="text-base font-medium text-[#0000008F] leading-5">
          {children}
        </p>
      </div>
    </div>
  );
};

export const GetStarted = () => {
  return (
    <div className="container max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 grid grid-cols-1 gap-8">
      <h1 className="text-black font-medium text-[40px] text-center">
        Get started{" "}
        <span className="text-[#0000008F] font-normal">in three steps</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 sm:gap-8">
        <StepCard step="STEP ONE" title="Donec sodales">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec.
        </StepCard>
        <StepCard step="STEP TWO" title="Nam quam nunc">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec.
        </StepCard>
        <StepCard step="STEP THREE" title="Cum sociis">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec.
        </StepCard>
      </div>
    </div>
  );
};
