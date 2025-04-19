const TestimonialsCard = () => {
  return (
    <>
      <div className="aspect-video bg-[#F5F5F5] rounded-lg px-8 sm:px-10 py-10 sm:py-14 flex flex-col gap-8">
        <p className="text-[20px] font-medium">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut
        </p>
        <div className="flex gap-4 text-[20px] font-medium">
          <img src="/profile.png" alt="pp" />
          <p>Donna B.</p>
        </div>
      </div>
    </>
  );
};

export const Testimonials = () => {
  return (
    <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 px-4 xl:px-0">
      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-[40px] leading-10">
          <span className="text-[#0000008F] font-normal">Don’t just </span>take
          our <br /> words for it
        </h2>
        <p className="text-base leading-5">
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis
        </p>
      </div>
      <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
      </div>
    </div>
  );
};
