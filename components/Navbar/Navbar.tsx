import { Popover } from "@headlessui/react";
import { DesktopBar } from "./DesktopBar";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
  return (
    <Popover>
      <DesktopBar />
      <Sidebar />
    </Popover>
  );
};
