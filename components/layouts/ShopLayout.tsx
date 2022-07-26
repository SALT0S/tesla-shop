import Head from "next/head";
import { Footer } from "../footer";
import { Navbar } from "../navbar";

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

      <main className="container mx-auto max-w-7xl flex-1 px-8">
        {children}
      </main>

      <Footer />
    </>
  );
};
