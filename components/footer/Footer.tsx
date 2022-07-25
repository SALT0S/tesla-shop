import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link href={"/about"} passHref prefetch>
              <a>Tesla &copy; {new Date().getFullYear()}</a>
            </Link>
          </li>
          <li>
            <Link href={"/about/legal"} passHref prefetch>
              <a>Privacy & Legal</a>
            </Link>
          </li>
          <li>
            <Link href={"/about/locations"} passHref prefetch>
              <a>Locations</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
