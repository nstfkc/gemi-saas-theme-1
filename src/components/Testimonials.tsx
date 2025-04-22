import DonnaBProfileImage from "/profile.png";

type TestimonialsCardModel = {
  testimonial: string;
  author: string;
  pp: string;
};

const testimonialsData = [
  {
    testimonial:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut",
    author: "Donna B.",
    pp: DonnaBProfileImage,
  },
  {
    testimonial:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut",
    author: "Donna B.",
    pp: DonnaBProfileImage,
  },
  {
    testimonial:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut",
    author: "Donna B.",
    pp: DonnaBProfileImage,
  },
];

const TestimonialsCard: React.FC<TestimonialsCardModel> = ({
  testimonial,
  author,
  pp,
}) => {
  return (
    <>
      <div className="max-w-[434px] sm:aspect-video bg-[#F5F5F5] rounded-lg px-8 sm:px-10 py-8 sm:py-14 flex flex-col gap-8">
        <p className="text-lg sm:text-[20px] font-normal">{testimonial}</p>
        <div className="flex gap-4 text-lg sm:text-[20px] font-medium">
          <img src={pp} alt="pp" />
          <p>{author}</p>
        </div>
      </div>
    </>
  );
};

export const Testimonials = () => {
  return (
    <div className="container max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-2 sm:px-4 md:px-6  ">
      <div className="flex flex-col gap-6">
        <h2 className="font-medium text-[40px] leading-12">
          <span className="text-[#0000008F] font-normal">Don’t just </span>take
          our <br /> words for it
        </h2>
        <p className="max-w-sm text-base leading-5">
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis
        </p>
      </div>
      <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-4 sm:gap-8">
        {testimonialsData.map((Item, key) => (
          <TestimonialsCard
            key={key}
            testimonial={Item.testimonial}
            author={Item.author}
            pp={Item.pp}
          />
        ))}
      </div>
    </div>
  );
};
