import { NormalHeading } from "../ui/Typography";
import ActionCard from "../ui/ActionCard";
import { CheckIcon } from "lucide-react";
import CalendarCard from "../ui/CalendarCard";

export default function CalendarSettings() {
  return (
    <div className="flex flex-col space-y-2">
      <NormalHeading>我的课表</NormalHeading>

      <div className="grid grid-rows-1 grid-cols-2 gap-4">
        <CalendarCard title="2025-2026 （秋）" status={<CheckIcon size={24} />} />
        <CalendarCard title="2025-2026 （春）" status={null} />
      </div>

      <NormalHeading className="mt-4">通用</NormalHeading>
      <div className="flex flex-col space-y-2">
        <ActionCard title="网安时间" />
        <ActionCard title="切换令时" />
        <ActionCard title="是否展示非本周课程" />
        <ActionCard title="课程表水平线" />
      </div>
    </div>
  );
}
