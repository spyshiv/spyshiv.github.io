"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function NavbarMenu() {
  const navItems = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Experience",
      link: "/experience"
    },
    {
      name: "Projects",
      link: "/projects"
    },
    {
      name: "Contact",
      link: "/contact"
    }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo path="./../profile.png" name="Shiv Baran Singh" />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton
            variant="primary"
            href="./../shiv-resume-2025.pdf"
            target="_blank"
            download="ShivBaranSingh_Principal_Developer_2025.pdf"
          >
            Resume
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo path="./../profile.png" name="Shiv Baran Singh" />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              variant="primary"
              href="./../shiv-resume-2025.pdf"
              target="_blank"
              download="ShivBaranSingh_Principal_Developer_2025.pdf"
            >
              Resume
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
