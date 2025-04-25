import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogPortal,
} from "./ui/dialog";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";

const NavigationItems = () => {
  return (
    <>
      <NavigationMenuItem>
        <NavigationMenuLink>Docs</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>Pricing</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>Contact</NavigationMenuLink>
      </NavigationMenuItem>
    </>
  );
};

const MobileMenu = () => {
  return (
    <Dialog>
      <DialogTrigger className="lg:hidden">
        <MenuIcon size="32" />
      </DialogTrigger>
      <DialogPortal>
        <DialogContent className="min-h-[400px]">
          <DialogHeader className="hidden">
            <DialogTitle>Mobile menu</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center h-full w-full">
            <NavigationMenu>
              <NavigationMenuList className="flex-col">
                <NavigationItems />
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export const Header = () => {
  return (
    <header className="container max-w-screen-xl mx-auto py-4">
      <nav className="flex items-center justify-between p-4">
        <div>
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" />
            <span>LOGO</span>
          </a>
        </div>
        <div className="hidden lg:flex gap-4">
          <NavigationMenu>
            <NavigationMenuList className="gap-8">
              <NavigationItems />
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <Button className="hidden lg:inline" variant="outline">
            Sign in
          </Button>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};
