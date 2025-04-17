"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Button from "./Button";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import logo from "@/public/images/elaine-logo.jpeg";
import clsx from "clsx";

type NavbarProps = {
  classes?: {
    wrapper?: string;
    container?: string;
    button?: string;
  };
};

type NavigationProps = {
  id: number;
  title: string;
  link: string;
};

const mockNavigation: NavigationProps[] = [
  { id: 1, title: "Servicos", link: "#services" },
  { id: 2, title: "Beneficios", link: "#benefits" },
  { id: 3, title: "Testemunhos", link: "#testimonials" },
  { id: 4, title: "Contato", link: "#contact" },
];

const MobileMenu: React.FC<{ navigation: NavigationProps[] }> = ({
  navigation,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className={clsx(
          isOpen
            ? "flex fixed top-0 right-0 bottom-0 left-0 bg-purple-secondary z-20 w-full h-full overflow-y-scroll"
            : "hidden"
        )}
      >
        <Container
          classes={{
            container: "flex flex-col gap-10 items-end w-full",
          }}
        >
          <Button
            classes={{
              button: "max-w-min h-10 bg-transparent mt-2",
            }}
            onClick={toggleMenu}
          >
            <IoMdClose className="text-4xl text-purple-primary" />
          </Button>
          <Link
            href="/"
            className="flex flex-col items-center justify-between gap-4 mx-auto"
          >
            <Image src={logo} className="h-[60px] w-20" alt="Logo" />
            <div className="text-center">
              <h1 className="text-lg font-semibold">
                Elaine Estética Corporal
              </h1>
              <p className="text-[9px]">
                Ajudo você a encontrar sua melhor versão
              </p>
            </div>
          </Link>
          <ul className="flex flex-col text-center gap-10 mx-auto">
            {navigation.map(({ id, title, link }) => (
              <li
                key={id}
                className={clsx(
                  "hover:border-b transition-all duration-100 ease-in-out h-8",
                  pathname.endsWith("#" + link) && "border-b"
                )}
                onClick={toggleMenu}
              >
                <Link href={link}>{title}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <Button
        classes={{
          button: "block xl:hidden bg-transparent max-w-min h-8",
        }}
        onClick={toggleMenu}
      >
        <GiHamburgerMenu className="w-7 h-7 m-auto text-purple-primary" />
      </Button>
    </>
  );
};

const Navigation: React.FC<{
  navigation: NavigationProps[];
}> = ({ navigation }) => {
  const pathname = usePathname();

  return (
    <ul className="hidden xl:flex items-center justify-between gap-10">
      {navigation.map(({ id, title, link }) => (
        <li
          key={id}
          className={clsx(
            "hover:border-b transition-all duration-100 ease-in-out h-8",
            pathname.endsWith(link) && "border-b"
          )}
        >
          <Link href={link}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar: React.FC<NavbarProps> = ({ classes }) => {
  return (
    <header className="fixed transition duration-300 ease-in-out z-10 w-full bg-purple-secondary">
      <Container
        classes={{
          container: clsx(
            " top-0 flex items-center justify-between w-full h-24",
            classes?.container
          ),
        }}
      >
        <Link href="/" className="flex items-center justify-between gap-4">
          <Image src={logo} className="h-[60px] w-20" alt="Logo" />
          <div className="text-center">
            <h1 className="text-lg font-semibold">Elaine Estética Corporal</h1>
            <p className="text-[9px]">
              Ajudo você a encontrar sua melhor versão
            </p>
          </div>
        </Link>
        <Navigation navigation={mockNavigation} />
        <MobileMenu navigation={mockNavigation} />
      </Container>
    </header>
  );
};

export default Navbar;
