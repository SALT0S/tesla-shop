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

export const AuthLayout: React.FC<Props> = ({
  children,
  title,
  pageDescription,
  keywords,
}) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Navbar />

      <main className="container mx-auto max-w-7xl flex-[1_0_auto] px-8">
        {children}
      </main>

      <Footer />
    </div>
  );
};
