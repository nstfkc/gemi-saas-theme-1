import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { FormProvider, useForm } from "react-hook-form";

const LoginHeader = () => {
  return (
    <>
      <header className="container max-w-screen-xl mx-auto py-4">
        <nav className="flex items-center justify-between p-4">
          <div>
            <Logo />
          </div>
          <div className="flex items-center gap-4">
            <p className="max-sm:hidden font-normal text-sm text-[#969696]">
              Don't have an account ?
            </p>
            <Button variant={"secondary"} className="text-sm">
              Sign up
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
};

function CustomCheckbox() {
  return (
    <div className="w-full flex items-center space-x-3">
      <Checkbox id="terms" className="size-5 border-black border-2" />
      <label
        htmlFor="terms"
        className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Keep me logged in
      </label>
    </div>
  );
}

export const LoginPageView = () => {
  const form = useForm();

  return (
    <>
      <LoginHeader />
      <div className="h-16 md:h-32" />
      {/* form start */}
      <div className="container max-w-screen-xl mx-auto flex shrink-0 justify-center items-center">
        <div className="w-[85%] sm:w-[400px] flex flex-col gap-2 items-center">
          <FormProvider {...form}>
            <div className="flex flex-col items-center mb-6">
              <h1 className="text-[40px] text-[#232323] font-semibold">
                Sign in
              </h1>
              <FormDescription className="w-full text-center text-[#969696] text-lg font-normal">
                Please login to continue to your account.
              </FormDescription>
            </div>
            <div className="w-full flex flex-col items-center gap-6">
              <FormField
                control={form.control}
                name="Email"
                render={({ field }) => (
                  <FormItem className="w-full group relative">
                    <FormLabel className="inline-block absolute top-1/2 -translate-y-1/2 left-3 bg-white px-1 text-lg font-normal group-focus-within:text-[#367AFF] group-focus-within:text-sm group-focus-within:-top-0 transition-all">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input className="peer w-full font-normal" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Password"
                render={({ field }) => (
                  <FormItem className="w-full group relative">
                    <FormLabel className="inline-block absolute top-1/2 -translate-y-1/2 left-3 bg-white px-1 text-lg font-normal group-focus-within:text-[#367AFF] group-focus-within:text-sm group-focus-within:-top-0 transition-all">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="peer w-full text-lg font-normal"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <CustomCheckbox />
              <Button className="w-full font-semibold text-lg py-7" size={"lg"}>
                Sign in
              </Button>
            </div>
            <div className="flex w-full items-center">
              <div className="h-[1px] bg-[#D9D9D9] flex-1"></div>
              <div className="max-w-fit shrink-0 p-2 text-center text-[#6E6E6E]">
                or
              </div>
              <div className="h-[1px] bg-[#D9D9D9] flex-1"></div>
            </div>
            <Button
              className="w-full font-semibold text-lg py-7 flex gap-4 justify-center items-center"
              size={"lg"}
              variant={"outline"}
            >
              <span> Sign in with Google</span>
              <img src="/googleIcon.svg" alt="" />
            </Button>

            <p className="max-sm:flex max-sm:flex-col font-normal text-lg text-center mt-6">
              <span className="text-[#6C6C6C] font-normal">
                Need an account?{" "}
              </span>
              <a href="#" className="text-[#367AFF] underline font-semibold">
                Create one
              </a>
            </p>
          </FormProvider>
        </div>
      </div>
      <div className="h-16 md:h-32" />
    </>
  );
};
