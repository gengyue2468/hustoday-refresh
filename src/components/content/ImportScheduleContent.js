import ActionCard from "../ui/ActionCard";

export default function ImportScheduleContent() {
  return (
    <div className="flex flex-col space-y-2">
      <ActionCard title="一键导入课表" />
      <ActionCard title="一键导入研究生课表" />
      <ActionCard title="一键导入劳动课程" />
      <ActionCard title="一键导入物理课表" />
      <ActionCard title="一键导入考试" />
      <ActionCard title="自定义添加单个课程" />
    </div>
  );
}
