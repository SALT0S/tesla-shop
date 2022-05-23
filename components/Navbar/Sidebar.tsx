import { Popover } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Menu from "./Navigation";
import { ActiveLink } from "./ActiveLink";

export const Sidebar = () => {
  return (
    <div className="fixed top-0 w-full backdrop-blur-sm transition">
      <Popover.Panel
        focus
        className="inset-x-0 z-10 ml-auto h-screen w-5/6 origin-top-right transform transition-all md:w-2/6"
      >
        <div className="h-full w-full bg-gray-50 px-8">
          <div className="flex items-center justify-between px-5 pt-4">
            <div className="flex text-gray-800">
              <p>logo</p>
            </div>
            <div className="-mr-2">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-100">
                <span className="sr-only">Close main menu</span>
                <XIcon className="h-7 w-7" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>

          <div className="mt-6 space-y-1">
            <hr className="mx-3 bg-gray-500" />
            {Menu.SidebarNav.map((item) => (
              <ActiveLink
                key={item.name}
                href={item.href}
                text={item.name}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-gray-200"
              />
            ))}
          </div>

          <div className="mt-6 space-y-1 md:hidden">
            <hr className="mx-3 bg-gray-500" />
            {Menu.MenuNav.map((item) => (
              <ActiveLink
                key={item.name}
                href={item.href}
                text={item.name}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-gray-200"
              />
            ))}
          </div>

          <div className="mt-6 space-y-1 md:hidden">
            <hr className="mx-3 bg-gray-500" />

            {Menu.AdminPanel.map((item) => (
              <div key={item.title}>
                <p className="my-2 text-lg text-black">{item.title}</p>

                {item.menu.map((item) => (
                  <ActiveLink
                    key={item.name}
                    href={item.href}
                    text={item.name}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-gray-200"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </div>
  );
};
