import Layout from "@/components/Layout";
import ActionCard from "@/components/ui/ActionCard";
import OpenDrawer from "@/components/ui/Drawer";
import { NormalHeading } from "@/components/ui/Typography";
import {
  CheckIcon,
  ChevronRightIcon,
  PlusIcon,
  SettingsIcon,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Main() {
  const [currentDay, setCurrentDay] = useState(5);
  const [today, setToday] = useState(5);
  const [showType, setShowType] = useState("day");

  const topScrollRef = useRef(null);
  const bottomScrollRef = useRef(null);

  useEffect(() => {
    if (showType !== "week") return;

    const topScroll = topScrollRef.current;
    const bottomScroll = bottomScrollRef.current;

    if (!topScroll || !bottomScroll) return;

    const handleTopScroll = () => {
      bottomScroll.scrollLeft = topScroll.scrollLeft;
    };

    const handleBottomScroll = () => {
      topScroll.scrollLeft = bottomScroll.scrollLeft;
    };

    topScroll.addEventListener("scroll", handleTopScroll);
    bottomScroll.addEventListener("scroll", handleBottomScroll);

    return () => {
      topScroll.removeEventListener("scroll", handleTopScroll);
      bottomScroll.removeEventListener("scroll", handleBottomScroll);
    };
  }, [showType]);

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
    const active = showType === "day" && note === currentDay;
    const isToday = note === today;
    return (
      <div
        className={`transition-all duration-500 cursor-pointer flex flex-col space-y-1 justify-center items-center rounded-full ${
          showType === "day" ? "w-6" : "w-20"
        }  ${active && "text-orange-600"}`}
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
    [{}],
  ];

  const CourseCard = ({ title, location, teacher, color }) => {
    const noData = !title || !location || !teacher;
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
    };

    const colorStyle = colorMap[color] || "bg-neutral-500";
    const headingStyle =
      showType === "day" ? "font-semibold text-lg" : "font-semibold text-xs";
    const subHeadingStyle =
      showType === "day"
        ? "font-semibold text-lg opacity-50"
        : "font-semibold text-xs opacity-50";
    const locationStyle =
      showType === "day" ? "font-semibold text-base" : "font-semibold text-xs";
    return (
      <div
        className={`box-border ${colorStyle} transition-all duration-500 text-white  ${
          noData ? "bg-white dark:bg-black" : ""
        } ${
          showType === "week"
            ? "w-20 px-2 py-2.5 h-46 rounded-xl"
            : "rounded-3xl w-full h-46 px-6 py-4"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className={headingStyle}>{title}</h1>
            <h2 className={subHeadingStyle}>{teacher}</h2>
          </div>
          <h2 className={locationStyle}>{location}</h2>
        </div>
      </div>
    );
  };

  return (
    <Layout title="Hustoday Refresh">
      <div className="text-xs opacity-50 mb-4">
        现在为静态网页，部分按钮不可用，仅供调试
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col space-y-1">
          <h1 className="font-semibold text-sm opacity-75">
            2025 年 9 月 25 日
          </h1>
          <div className="flex flex-row space-x-2 items-center text-sm">
            <h1 className="font-semibold">
              第 <span className="text-orange-600 ml-0.5 mr-0.5">4</span> 周
            </h1>
            {showType === "day" && currentDay !== today && (
              <button
                className="text-orange-600 font-semibold flex flex-row items-center space-x-0.5"
                onClick={() => setCurrentDay(today)}
              >
                <span>回到今天</span>
                <ChevronRightIcon size={16} />
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-row space-x-6 items-center">
          <div className="flex flex-row space-x-4">
            <OpenDrawer
              title="课表设置"
              desc="管理您的 Hustoday 课表"
              content={
                <div className="flex flex-col space-y-2">
                  <NormalHeading>我的课表</NormalHeading>

                  <div className="grid grid-rows-1 grid-cols-2 gap-4">
                    <CourseCard
                      title="2025-2026 （秋）"
                      teacher="待定"
                      location={<CheckIcon size={24} />}
                      color="blue"
                    />
                    <CourseCard
                      title="2025-2026 （春）"
                      teacher="待定"
                      location={<CheckIcon size={0} />}
                      color="red"
                    />
                  </div>

                  <NormalHeading className="mt-4">通用</NormalHeading>
                  <div className="flex flex-col space-y-2">
                    <ActionCard title="网安时间" />
                    <ActionCard title="切换令时" />
                    <ActionCard title="是否展示非本周课程" />
                    <ActionCard title="课程表水平线" />
                  </div>
                </div>
              }
            >
              <SettingsIcon size={20} />
            </OpenDrawer>

            <OpenDrawer
              title="导入课表"
              desc="导入新课表至 Hustoday"
              content={
                <div className="flex flex-col space-y-2">
                  <ActionCard title="一键导入课表" />
                  <ActionCard title="一键导入研究生课表" />
                  <ActionCard title="一键导入劳动课程" />
                  <ActionCard title="一键导入物理课表" />
                  <ActionCard title="一键导入考试" />
                  <ActionCard title="自定义添加单个课程" />
                </div>
              }
            >
              <PlusIcon size={20} />
            </OpenDrawer>
          </div>
          <button
            onClick={() => setShowType(showType === "day" ? "week" : "day")}
            className="bg-neutral-100 dark:bg-neutral-900 rounded-full px-4 py-2 font-semibold w-20"
          >
            {showType === "day" ? "周视图" : "日程"}
          </button>
        </div>
      </div>

      <div className="sticky top-4 mt-4 rounded-3xl px-4 py-3 -translate-x-4 w-[calc(100%+2rem)] bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-lg z-10">
        <div
          ref={topScrollRef}
          className={`text-sm flex flex-row ${
            showType === "day" ? "space-x-8" : "space-x-8"
          } items-center justify-between flex-nowrap overflow-x-scroll`}
          style={{ scrollbarWidth: "none" }}
        >
          <div className="">
            <h1
              className={`font-semibold ${showType === "day" ? "w-8" : "w-10"}`}
            >
              <span className="text-orange-600">9</span> <span>月</span>
            </h1>
          </div>

          <div
            className={`flex flex-row ${
              showType === "day" ? "space-x-4" : "space-x-2"
            } `}
          >
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

      <div
        className={`mt-12 flex flex-row justify-between space-x-8  ${
          showType === "day" ? "px-4" : "pl-4 sm:px-4"
        } -translate-x-4 w-[calc(100%+2rem)]`}
      >
        <div className="flex flex-col space-y-0">
          {timeTable.map((time, index) => {
            const simplifiedTimeData = time.split("~");
            return (
              <div
                key={index}
                className={`relative flex justify-center items-center ${
                  showType === "day" ? "w-12" : "w-10"
                } h-25 transition-all duration-500`}
              >
                <h1 className="font-semibold text-5xl opacity-20 z-0 w-12">
                  {index + 1}
                </h1>
                <div className="absolute w-8 flex justify-center items-center">
                  <h1 className="font-medium text-xs text-neutral-600 dark:text-neutral-400">
                    {showType === "day" ? (
                      time
                    ) : (
                      <span className="text-center flex flex-col space-y-1 justify-center items-center">
                        {simplifiedTimeData[0]} {simplifiedTimeData[1]}
                      </span>
                    )}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        {showType === "day" && (
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
        )}

        {showType === "week" && (
          <div
            ref={bottomScrollRef}
            className="flex flex-row space-x-2 flex-nowrap overflow-x-scroll"
          >
            {courseList.map((course, index) => (
              <div className="flex flex-col space-y-4 w-20" key={index}>
                {course?.map((course, index) => (
                  <CourseCard
                    key={index}
                    title={course.title}
                    location={course.location}
                    teacher={course.teacher}
                    color={course.color}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
