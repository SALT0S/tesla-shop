import Head from "next/head";
import { Navbar } from "../Navbar";

interface Props {
  children: React.ReactNode;
  title: string;
  pageDescription: string;
  keywords?: string;
  imageFullUrl?: string;
}

export const ShopLayout: React.FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
  keywords,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Navbar />

      {/* TODO: Sidebar */}

      <main className="m-20 mx-auto max-w-7xl px-8">{children}</main>

      <footer>{/* Todo de footer */}</footer>
    </>
  );
};
