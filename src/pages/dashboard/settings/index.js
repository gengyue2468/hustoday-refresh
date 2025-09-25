import Layout from "@/components/Layout";
import ActionCard from "@/components/ui/ActionCard";
import { ChevronLeftIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Settings() {
  const headingStyle = "font-semibold text-xl ml-4";
  const { theme, setTheme } = useTheme();
  return (
    <Layout title="应用程式设置">
      <button className="bg-neutral-100 dark:bg-neutral-900 rounded-full p-1 size-8 flex justify-center items-center">
        <ChevronLeftIcon size={24} />
      </button>
      <h1 className="font-semibold text-4xl mt-4">设置</h1>
      <h1 className="mt-2 font-semibold text-3xl opacity-50">
        在此管理您的应用程式
      </h1>

      <div className="flex flex-col space-y-4 mt-8 -translate-x-4 w-[calc(100%+2rem)]">
        <div className="bg-neutral-50 dark:bg-neutral-950 px-6 py-4 rounded-3xl">
          <h1 className="font-semibold text-xl">用户界面是否合您意？</h1>
          <h1 className="font-semibold text-xl opacity-50">当前: {theme} </h1>

          <div className="mt-8 -translate-x-4 w-[calc(100%+2rem)] flex flex-col space-y-4">
            <ActionCard title="跟随系统" onClick={() => setTheme("system")} />
            <ActionCard title="明亮模式" onClick={() => setTheme("light")} />
            <ActionCard title="黑暗模式" onClick={() => setTheme("dark")} />
          </div>
        </div>

        <br />

        <h1 className={headingStyle}>通用</h1>
        <ActionCard title="账户与安全" />
        <ActionCard title="通知与提醒" />
        <ActionCard title="校区设置" />
        <ActionCard title="语言设置" />
        <ActionCard title="检查更新" />

        <br />

        <h1 className={headingStyle}>反馈与隐私</h1>
        <ActionCard title="问题反馈" />
        <ActionCard title="用户协议" />
        <ActionCard title="隐私政策" />
        <ActionCard title="关于我们" />
      </div>
    </Layout>
  );
}
