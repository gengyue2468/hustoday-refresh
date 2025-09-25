import Layout from "@/components/Layout";

export default function Hot() {
  const HotCard = ({ children }) => {
    return (
      <div className="rounded-3xl px-6 py-4 bg-neutral-100 dark:bg-neutral-900 text-xl">
        {children}
      </div>
    );
  };

  const imageStyle = "rounded-3xl my-4";
  const highlightStyle = "text-orange-600 font-semibold";
  const referenceStyle = "opacity-50 font-semibold";
  return (
    <Layout title="热点">
      <h1 className="font-semibold text-4xl mt-12">热点</h1>
      <h1 className="mt-2 font-semibold text-3xl opacity-50">
        永不失去对华中大热点的访问权限
      </h1>

      <div className="mt-8 flex flex-col space-y-4 -translate-x-4 w-[calc(100%+2rem)]">
        <HotCard>
          <span className={highlightStyle}>#仅供测试#</span>
          <div className="my-4">
            <p>此页内容仅供测试，侵删</p>
          </div>
          <span className={referenceStyle}>2025 年 9 月 25 日 21：26</span>
        </HotCard>

        <HotCard>
          <span className={highlightStyle}>#快讯#</span>
          <div className="my-4">
            <p>
              今日下午，在中操举行的汉超高校组揭幕赛中，华中科技大学以4：0的比分战胜武汉理工大学。（喻家山下记者千问、小九）
            </p>
            <img
              src="/image_1758805833765.jpg"
              alt="华中科技大学以4：0的比分战胜武汉理工大学"
              className={imageStyle}
            />
          </div>
          <span className={referenceStyle}>
            来源:喻家山下 <br />
            2025 年 9 月 25 日 17：34
          </span>
        </HotCard>

        <HotCard>
          <span className={highlightStyle}>#早安华中大#</span>
          <div className="my-4">
            <p>吃完这些苦苦苦苦苦苦苦苦苦苦就能迎来国庆假期的甜了呢！</p>
            <p>今日编辑：正在上课的千问</p>
            <img
              src="/image_1758806515315.jpg"
              alt="吃完这些苦苦苦苦苦苦苦苦苦苦就能迎来国庆假期的甜了呢！"
              className={imageStyle}
            />
          </div>
          <span className={referenceStyle}>
            来源:喻家山下 <br />
            2025 年 9 月 25 日 07：32
          </span>
        </HotCard>
      </div>
    </Layout>
  );
}
