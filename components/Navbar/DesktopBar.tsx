import Link from "next/link";
import Image from "next/image";

import { Popover } from "@headlessui/react";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";

import Menu from "./Navigation";
import { ActiveLink } from "./ActiveLink";

import TeslaLogo from "../../public/logo/tesla-logo.svg";

export const DesktopBar = () => {
  return (
    <nav
      className="z-10 mt-4 flex w-full items-center justify-between px-4 sm:h-10 sm:px-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
        <div className="flex w-full items-center md:w-auto md:justify-between">
          <Link href="/">
            <a className="h-7">
              <Image src={TeslaLogo} height={30} width={100} alt="Logo Tesla" />
            </a>
          </Link>

          <span className="px-4">|</span>

          <Link href="/">
            <a className="bg-white py-1 px-2 font-bold text-black">Shop</a>
          </Link>
        </div>
      </div>

      <div className="hidden md:block md:space-x-8">
        {Menu.MenuNav.map((item) => (
          <ActiveLink
            key={item.name}
            text={item.name}
            href={item.href}
            className="font-medium text-gray-700 hover:font-semibold hover:text-neutral-900 "
          />
        ))}
      </div>

      <div className="flex items-center">
        <div className="mx-3 hidden items-center md:block">
          <Popover.Button className="inline-flex items-center justify-center text-gray-900">
            <span className="sr-only">Open search icon</span>
            <SearchIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        <div className="mx-3 flex cursor-pointer items-center">
          <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
        </div>

        <Popover.Button>
          <span className="sr-only">Open main menu</span>
          <p
            aria-hidden="true"
            className="py-1 px-2 font-medium text-black hover:font-semibold hover:text-gray-700 md:block"
          >
            Menu
          </p>
        </Popover.Button>
      </div>
    </nav>
  );
};
