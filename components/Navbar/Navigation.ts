import { XIcon, UserCircleIcon } from "@heroicons/react/outline";

const MenuNav = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/men" },
  { name: "Women", href: "/women" },
  { name: "Kids", href: "/kids" },
];
const SidebarNav = [
  { name: "Perfil", icon: UserCircleIcon, href: "/" },
  { name: "Mis Ordenes", icon: UserCircleIcon, href: "/men" },
  { name: "Ingresar", icon: "", href: "/women" },
  { name: "Salir", icon: "", href: "/kids" },
];

const Menu = {
  MenuNav,
  SidebarNav,
};

export default Menu;
