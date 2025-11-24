"use client";

import { NavsMenu, SearchInput, Logo, MobileMenu } from "@/components/layout";
import { SignInButton } from "@/components/auth";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between md:px-10 px-4 py-5">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <NavsMenu />
        </div>

        {/* Desktop Right Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <SignInButton />
          <SearchInput />
        </div>

        {/* Mobile Sidebar */}
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
