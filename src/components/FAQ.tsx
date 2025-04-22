import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

const CustomAccordionItems = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => {
  return (
    <>
      <TabsTrigger
        value={value}
        className="w-full flex gap-8 items-center justify-between px-4 py-4 data-[state=active]:bg-[#F5F5F5] [&[data-state=inactive]>svg]:text-[#F5F5F5] max-md:[&[data-state=active]>svg]:rotate-90 [&[data-state=inactive]>p]:font-normal font-medium text-base md:text-lg group [&[data-state=active]]:shadow-none rounded-none"
      >
        <p className="max-h-fit whitespace-normal text-left">{children}</p>
        <ChevronRight
          className="size-8 group:data-[state=active]:hidden transition-all"
          strokeWidth={1.5}
        />
      </TabsTrigger>
    </>
  );
};

const FaqAccordion = () => {
  return (
    <Tabs
      defaultValue="faq-1"
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-0"
    >
      <TabsList className="h-full w-full grid grid-cols-1 p-0 bg-white">
        <CustomAccordionItems value="faq-1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor?
        </CustomAccordionItems>
        <TabsContent
          value="faq-1"
          className="md:hidden font-normal text-base md:text-lg bg-[#F5F5F5] px-6 py-10 sm:px-10 sm:py-14"
        >
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </TabsContent>
        <CustomAccordionItems value="faq-2">
          Donec sodales sagittis magna?
        </CustomAccordionItems>
        <TabsContent
          value="faq-2"
          className="md:hidden font-normal text-base md:text-lg bg-[#F5F5F5] px-6 py-10 sm:px-10 sm:py-14"
        >
          Change your password here.
        </TabsContent>
        <CustomAccordionItems value="faq-3">
          Vivamus elementum semper nisi?
        </CustomAccordionItems>
        <TabsContent
          value="faq-3"
          className="md:hidden font-normal text-base md:text-lg bg-[#F5F5F5] px-6 py-10 sm:px-10 sm:py-14"
        >
          Change your password here.
        </TabsContent>
        <CustomAccordionItems value="faq-4">
          Curabitur ullamcorper ultricies nis?
        </CustomAccordionItems>
        <TabsContent
          value="faq-4"
          className="md:hidden font-normal text-base md:text-lg bg-[#F5F5F5] px-6 py-10 sm:px-10 sm:py-14"
        >
          Change your password here.
        </TabsContent>
        <CustomAccordionItems value="faq-5">
          Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper?
        </CustomAccordionItems>
        <TabsContent
          value="faq-5"
          className="md:hidden font-normal text-base md:text-lg bg-[#F5F5F5] px-6 py-10 sm:px-10 sm:py-14"
        >
          Change your password here.
        </TabsContent>
      </TabsList>
      <div className="bg-[#F5F5F5] rounded-lg px-16 py-18 hidden md:block">
        <TabsContent value="faq-1" className="font-normal text-lg rounded-none">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </TabsContent>
        <TabsContent value="faq-2" className="font-normal text-lg rounded-none">
          Change your password here.
        </TabsContent>
        <TabsContent value="faq-3" className="font-normal text-lg rounded-none">
          Change your password here.
        </TabsContent>
        <TabsContent value="faq-4" className="font-normal text-lg rounded-none">
          Change your password here.
        </TabsContent>
        <TabsContent value="faq-5" className="font-normal text-lg rounded-none">
          Change your password here.
        </TabsContent>
      </div>
    </Tabs>
  );
};

export const FAQ = () => {
  return (
    <div className="container max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6">
      <FaqAccordion />
    </div>
  );
};
