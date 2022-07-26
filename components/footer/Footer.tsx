import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-7 text-center text-sm text-gray-700">
      <nav aria-label="footer navigation">
        <ul className="inline-flex gap-5">
          <li className="py-2">
            <Link href={"/about"} passHref prefetch={false}>
              <a className="hover:underline">
                Tesla &copy; {new Date().getFullYear()}
              </a>
            </Link>
          </li>

          <li className="py-2">
            <Link href={"/about/legal"} passHref prefetch={false}>
              <a className="hover:underline">Privacy & Legal</a>
            </Link>
          </li>

          <li className="py-2">
            <Link href={"/about/locations"} passHref prefetch={false}>
              <a className="hover:underline">Locations</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
