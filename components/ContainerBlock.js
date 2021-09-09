import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ContainerBlock({ children }) {
  const router = useRouter();
  const meta = {
    title: "Itish Prasad Sahoo - Developer",
    description: `I've been developing websites for 2 years straight. Get in touch with me to know more.`,
    image: "/avatar.jpg",
    type: "website",
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        {/* <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        /> */}
        {/* <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        /> */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@itish_prasad" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />

        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}

export default ContainerBlock;
