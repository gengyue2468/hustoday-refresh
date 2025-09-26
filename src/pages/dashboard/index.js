import Layout from "@/components/Layout";
import { BadgeCheckIcon } from "lucide-react";
import ActionCard from "@/components/ui/ActionCard";

export default function Dashboard() {
  const headingStyle = "font-semibold text-lg ml-4";
  return (
    <Layout title="我的">
      <img src="/logo.webp" className="rounded-full size-8" />
      <div className="mt-4">
        <h1 className="font-semibold text-3xl">BriGriff,</h1>
        <h1 className="mt-2 font-semibold text-2xl opacity-50">
          您今天看起来很聪明!
        </h1>

        <h2 className="mt-4 font-medium text-orange-600 flex flex-row space-x-2 items-center">
          <BadgeCheckIcon size={18} />{" "}
          <span>2025 年 9 月起加入 华中科技大学</span>
        </h2>

        <div className="flex flex-col space-y-4 mt-8 -translate-x-4 w-[calc(100%+2rem)]">
          <h1 className={headingStyle}>重点</h1>
          <ActionCard title="活动通知" desc="不要错过参与活动的最新消息" />
          <ActionCard title="互动通知" desc="爱选修的互动通知" />

          <h1 className={headingStyle}>通用</h1>
          <ActionCard
            title="已修课程"
            desc="选修过的实验、中国语文等会显示在这里"
          />
          <ActionCard title="我的评论" desc="您发表的评论会显示在这里" />
          <ActionCard title="我点的赞" desc="这里有您点过的赞" />

          <h1 className={headingStyle}>个性化</h1>
          <ActionCard title="个人资料" desc="个性化您的头像和欢迎语句" />
          <ActionCard
            title="设置"
            desc="修改应用程序设置"
            onClick={() => open("/dashboard/settings")}
          />
        </div>
      </div>
    </Layout>
  );
}
