import Layout from "@/components/Layout";
import { PlusIcon, SettingsIcon } from "lucide-react";
import { useState } from "react";

export default function Main() {
  const [currentDay, setCurrentDay] = useState(5);
  const [today, setToday] = useState(5);
  const CalendarTemp = ({ num, note, ...props }) => {
    let chineseNote;
    switch (note) {
      case 1:
        chineseNote = "一";
        break;
      case 2:
        chineseNote = "二";
        break;
      case 3:
        chineseNote = "三";
        break;
      case 4:
        chineseNote = "四";
        break;
      case 5:
        chineseNote = "五";
        break;
      case 6:
        chineseNote = "六";
        break;
      case 7:
        chineseNote = "日";
        break;
    }
    const active = note === currentDay;
    const isToday = note === today;
    return (
      <div
        className={`cursor-pointer flex flex-col space-y-1 justify-center items-center rounded-full ${
          active && "text-orange-600"
        }`}
        {...props}
      >
        <span className="opacity-75 text-xs">{chineseNote}</span>
        <span className="font-semibold text-base">{num}</span>
        <span
          className={
            isToday
              ? "bg-orange-600 rounded-full w-4 h-1"
              : "bg-transparent w-4 h-1"
          }
        />
      </div>
    );
  };

  const timeTable = [
    "08:00~08:45",
    "08:55~09:40",
    "10:10~10:55",
    "11:05~11:50",
    "14:30~05:15",
    "15:20~16:05",
    "16:25~17:10",
    "17:15~18:00",
    "19:00~19:45",
    "19:50~20:35",
    "20:45~21:30",
    "21:35~22:20",
  ];

  const courseList = [
    [
      {},
      {
        title: "C语言程序设计",
        location: "西十二楼 S303",
        teacher: "胡龙",
        color: "rose",
      },
      {
        title: "综合英语（一）",
        location: "西五楼 207",
        teacher: "陈虹",
        color: "green",
      },
      {
        title: "微积分(B)上",
        location: "西十二楼 N104",
        teacher: "周少波",
        color: "yellow",
      },
    ],
    [
      {},
      {},
      {
        title: "思想道德与法治",
        location: "西十二楼 S210",
        teacher: "常晓璐",
        color: "sky",
      },
    ],
    [
      {
        title: "微积分(B)上",
        location: "西十二楼 N104",
        teacher: "周少波",
        color: "yellow",
      },
      {
        title: "综合英语（一）",
        location: "西五楼 207",
        teacher: "陈虹",
        color: "green",
      },
      {
        title: "C语言程序设计",
        location: "西十二楼 S303",
        teacher: "胡龙",
        color: "rose",
      },
    ],
    [
      {},
      {
        title: "军事理论",
        location: "西十二楼 S412",
        teacher: "曹金梅",
        color: "pink",
      },
    ],
    [
      {},
      {
        title: "微积分(B)上",
        location: "西十二楼 N104",
        teacher: "周少波",
        color: "yellow",
      },
    ],
    [
      {
        title: "工程训练（七）",
        location: "工创中心 D304-1",
        teacher: "吴亚环",
        color: "indigo",
      },
      {
        title: "工程训练（七）",
        location: "工创中心 D304-1",
        teacher: "吴亚环",
        color: "indigo",
      },
      {
        title: "工程训练（七）",
        location: "工创中心 D304-1",
        teacher: "吴亚环",
        color: "indigo",
      },
      {
        title: "工程训练（七）",
        location: "工创中心 D304-1",
        teacher: "吴亚环",
        color: "indigo",
      },
    ],
    [],
  ];

  const CourseCard = ({ title, location, teacher, color }) => {
    const noData = !title || !location || !teacher;
    const colorMap = {
      red: "bg-red-600",
      blue: "bg-blue-600",
      sky: "bg-sky-600",
      indigo: "bg-indigo-600",
      green: "bg-green-600",
      yellow: "bg-yellow-600",
      purple: "bg-purple-600",
      rose: "bg-rose-600",
      pink: "bg-pink-600",
      cyan: "bg-cyan-600",
    };

    const colorStyle = colorMap[color] || "bg-neutral-500";
    return (
      <div
        className={`${colorStyle} text-white rounded-3xl px-6 py-4 h-46 ${
          noData ? "bg-white dark:bg-black" : "w-full"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="font-semibold text-lg">{title}</h1>
            <h2 className="font-medium text-lg opacity-50">{teacher}</h2>
          </div>
          <h2 className="font-semibold text-base">{location}</h2>
        </div>
      </div>
    );
  };

  return (
    <Layout title="Hustday Refresh">
      <div className="text-xs opacity-50 mb-4">
        现在为静态网页，大部分按钮均不可用，仅供调试
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col space-y-1">
          <h1 className="font-semibold text-sm opacity-75">
            2025 年 9 月 25 日
          </h1>
          <div className="flex flex-row space-x-2 text-sm">
            <h1 className="font-semibold">第 4 周</h1>
            <button className="text-orange-600 font-semibold">回到今天</button>
          </div>
        </div>
        <div className="flex flex-row space-x-6 items-center">
          <div className="flex flex-row space-x-4">
            <button>
              <SettingsIcon size={20} />
            </button>
            <button>
              <PlusIcon size={20} />
            </button>
          </div>
          <button className="bg-neutral-100 dark:bg-neutral-900 rounded-full px-4 py-2 font-semibold">
            周视图
          </button>
        </div>
      </div>

      <div className="mt-4 rounded-full px-6 py-4 -translate-x-4 w-[calc(100%+2rem)] bg-neutral-100 dark:bg-neutral-900">
        <div className="text-sm flex flex-row items-center justify-between">
          <h1 className="font-semibold">
            <span className="text-orange-600">9</span> 月
          </h1>
          <div className="flex flex-row space-x-4">
            {[1, 2, 3, 4, 5, 6, 7].map((cal, index) => (
              <CalendarTemp
                key={index}
                num={21 + cal}
                note={cal}
                onClick={() => setCurrentDay(cal)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-row justify-between space-x-12">
        <div className="flex flex-col space-y-0">
          {timeTable.map((time, index) => (
            <div
              key={index}
              className="relative flex justify-center items-center w-12 h-25"
            >
              <h1 className="font-semibold text-5xl opacity-10 z-0">
                {index + 1}
              </h1>
              <div className="absolute w-12 flex justify-center items-center">
                <h1 className="font-medium text-xs text-neutral-600 dark:text-neutral-400">
                  {time}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-4 flex-1">
          {courseList[currentDay - 1]?.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              location={course.location}
              teacher={course.teacher}
              color={course.color}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
