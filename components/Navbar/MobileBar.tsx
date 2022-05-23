import { Popover } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Menu from "./Navigation";
import { ActiveLink } from "./ActiveLink";

export const MobileBar = () => {
  return (
    <div className="fixed top-0 w-full backdrop-blur-sm transition">
      <Popover.Panel
        focus
        className="inset-x-0 z-10 ml-auto h-screen w-5/6 origin-top-right transform transition-all md:w-3/6"
      >
        <div className="absolute h-full w-full overflow-hidden bg-gray-50">
          <div className="flex items-center justify-between px-5 pt-4">
            <div className="flex text-white  ">
              <span className="bg-white py-1 px-2 text-xl font-bold text-black">
                A
              </span>
              <p className="bg-[#C48F5A] py-1 px-2 text-lg font-bold hover:bg-[#B27D48]">
                Alica Art
              </p>
            </div>
            <div className="-mr-2">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-100">
                <span className="sr-only">Close main menu</span>
                <XIcon className="h-7 w-7" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>

          <div className="space-y-1 px-2">
            <hr className="my-2 mx-3 bg-gray-500" />
            {Menu.SidebarNav.map((item) => (
              <ActiveLink
                key={item.name}
                href={item.href}
                text={item.name}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-gray-200"
              />
            ))}
          </div>

          <div className="space-y-1 px-2 md:hidden">
            <hr className="my-2 mx-3 bg-gray-500" />
            {Menu.MenuNav.map((item) => (
              <ActiveLink
                key={item.name}
                href={item.href}
                text={item.name}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-gray-200"
              />
            ))}
          </div>
        </div>
      </Popover.Panel>
    </div>
  );
};
