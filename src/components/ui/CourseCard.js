import { SINGLE_PERIOD_HEIGHT } from "@/constants/calendar";

export default function CourseCard({ course, style, showType = "day" }) {
  const { title, location, teacher, color } = course;
  const colorMap = {
    red: "bg-red-600",
    blue: "bg-blue-600",
    sky: "bg-sky-600",
    indigo: "bg-indigo-400",
    green: "bg-green-400",
    yellow: "bg-yellow-400",
    purple: "bg-purple-600",
    rose: "bg-rose-400",
    pink: "bg-pink-600",
    cyan: "bg-cyan-600",
    teal: "bg-teal-400",
    slate: 'bg-slate-500'
  };
  const bgColor = colorMap[color] || "bg-neutral-500";

  const textStyles =
    showType === "day"
      ? {
          title: "font-semibold text-lg",
          teacher: "font-semibold text-lg opacity-50",
          location: "font-semibold text-base",
        }
      : {
          title: "font-semibold text-xs",
          teacher: "font-semibold text-xs opacity-50",
          location: "font-semibold text-xs",
        };

  return (
    <div
      className={`box-border ${bgColor} text-white ${
        showType === "day" ? "px-6 py-4 rounded-3xl " : "p-2 rounded-lg"
      } transition-all duration-500 overflow-hidden`}
      style={style}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <h1 className={textStyles.title}>{title}</h1>
          <h2 className={textStyles.teacher}>{teacher}</h2>
        </div>
        <h2 className={textStyles.location}>{location}</h2>
      </div>
    </div>
  );
}
