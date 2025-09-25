import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="max-w-xl mx-auto px-8 pt-16 pb-32">
          <div className="text-xs opacity-50 mb-4">
            此页面现在为静态网页，大部分按钮均不可用，仅供调试使用
          </div>
        <main>{children}</main>
        <Navbar />
      </div>
    </div>
  );
}
