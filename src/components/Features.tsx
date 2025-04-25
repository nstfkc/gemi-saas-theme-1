import { Box, LucideIcon } from "lucide-react";

type FeatureBoxModel = {
  title: string;
  desc: string;
  Icon: LucideIcon;
};

const items = [
  {
    title: "Lorem Ipsum",
    desc: " At vero eos et accusamus",
    icon: Box,
  },
  {
    title: "Lorem Ipsum",
    desc: " At vero eos et accusamus",
    icon: Box,
  },
  {
    title: "Lorem Ipsum",
    desc: " At vero eos et accusamus",
    icon: Box,
  },
  {
    title: "Lorem Ipsum",
    desc: " At vero eos et accusamus",
    icon: Box,
  },
  {
    title: "Lorem Ipsum",
    desc: " At vero eos et accusamus",
    icon: Box,
  },
  {
    title: "Lorem Ipsum",
    desc: " At vero eos et accusamus",
    icon: Box,
  },
];

const FeatureBox: React.FC<FeatureBoxModel> = ({ title, desc, Icon }) => {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <Icon
        className="size-[50px] rounded-full bg-[#F5F5F5] p-2"
        strokeWidth={1.5}
      />
      <h1 className="text-[28px] font-medium">{title}</h1>
      <p className="text-xl text-center text-[#0000008F]">{desc}</p>
    </div>
  );
};

export const Features = () => {
  return (
    <div className="container max-w-screen-xl mx-auto grid grid-cols-1 gap-16">
      <h1 className="sm:w-[404px] lg:w-full mx-auto text-center text-[40px] font-medium max-sm:px-4">
        <span className="text-[#0000008F] font-normal">Each feature is </span>
        minimal and adaptable
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
        {items.map((item, key) => (
          <FeatureBox
            key={key}
            title={item.title}
            desc={item.desc}
            Icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};
