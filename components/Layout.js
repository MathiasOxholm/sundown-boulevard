import Head from "next/head";
import Link from "next/link";

const Layout = ({ title, children, heading, back }) => {
  return (
    <>
      <Head>
        <title>{title} | Sundown Boulevard</title>
      </Head>
      <main id="main">
        <div className="container mx-auto flex flex-col">
          {heading && (
            <div className="flex flex-row justify-between items-center w-full bg-white overflow-hidden rounded-2xl py-12 px-10 mb-8">
              <h1 className="text-5xl font-semibold">{heading}</h1>
              {back && (
                <Link href={back}>
                  <a className="text-xl font-semibold text-primary">Back</a>
                </Link>
              )}
            </div>
          )}
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
