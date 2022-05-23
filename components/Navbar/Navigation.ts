import { XIcon, UserCircleIcon } from "@heroicons/react/outline";

const MenuNav = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/men" },
  { name: "Women", href: "/women" },
  { name: "Kids", href: "/kids" },
];
const SidebarNav = [
  { name: "Perfil", href: "/" },
  { name: "Mis Ordenes", href: "/men" },
  { name: "Ingresar", href: "/women" },
  { name: "Salir", href: "/kids" },
];

const AdminPanel = [
  {
    title: "Admin Panel",
    menu: [
      { name: "Productos", href: "/" },
      { name: "Ordenes", href: "/men" },
      { name: "Usuarios", href: "/women" },
    ],
  },
];

const Menu = {
  MenuNav,
  SidebarNav,
  AdminPanel,
};

export default Menu;
