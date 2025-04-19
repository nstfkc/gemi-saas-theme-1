import { Facebook, Instagram } from "lucide-react";
import Logo from "./Logo";

const FooterLinkGroup = ({
  title,
  linkList,
}: {
  title: string;
  linkList: string[];
}) => {
  return (
    <>
      <div className="">
        <h3 className="font-semibold text-base">{title}</h3>
        <ul className="flex flex-col">
          {linkList.map((item, key) => (
            <a key={key} href="#">
              {item}
            </a>
          ))}
        </ul>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between gap-8 px-4">
      <div className="h-fit">
        <Logo />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-4 md:gap-8">
        <FooterLinkGroup
          title="Product"
          linkList={["Courses", "Schedule", "Pricing", "Teachers"]}
        />
        <FooterLinkGroup title="Pages" linkList={["Pricing", "Contact us"]} />
        <FooterLinkGroup
          title="Resources"
          linkList={["FAQ", "Blog", "Privacy policy", "Terms of services"]}
        />
        <FooterLinkGroup
          title="Lorem ipsum"
          linkList={["Boniviede", "Capricun", "Kalelious", "Youtitude"]}
        />
      </div>
      <div>
        <ul className="flex md:flex-col gap-4">
          <Instagram />
          <Facebook />
          <Instagram />
          <Facebook />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
