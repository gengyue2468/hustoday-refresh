import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="max-w-3xl mx-auto px-8 pt-16 pb-32">
        <main>{children}</main>
        <Navbar />
      </div>
    </div>
  );
}
