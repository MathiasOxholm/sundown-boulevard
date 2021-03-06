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
            <div className="flex flex-col gap-4 xl:gap-8 xl:flex-row justify-between xl:items-center w-full bg-white overflow-hidden rounded-2xl py-6 px-8 xl:py-12 xl:px-10 mb-8 border border-lightBorder">
              <h1 className="text-3xl xl:text-5xl font-semibold">{heading}</h1>
              {back && (
                <Link href={back}>
                  <button className="text-secondary border-secondary border hover:bg-secondary hover:text-white focus:outline-none font-bold rounded-full text-sm uppercase px-8 py-4 text-center transition">
                    Back
                  </button>
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
