import Layout from "@/components/Layout";
import OpenDrawer from "@/components/ui/Drawer";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
  SettingsIcon,
} from "lucide-react";
import { useState, useRef, useEffect, useMemo } from "react";
import { courseList, timeTable } from "@/data/test";
import CalendarDayItem from "@/components/ui/CalendarDayItem";
import CourseCard from "@/components/ui/CourseCard";
import CalendarSettings from "@/components/content/CalendarSettings";
import ImportScheduleContent from "@/components/content/ImportScheduleContent";
import dayjs from "dayjs";
import {
  SEMESTER_START,
  TOTAL_WEEKS,
  WEEK_DAY_MAP,
} from "@/constants/calendar";
import { SINGLE_PERIOD_HEIGHT } from "@/constants/calendar";

export default function Main() {
  const [currentWeek, setCurrentWeek] = useState(4);
  const [currentDay, setCurrentDay] = useState(5);
  const [showType, setShowType] = useState("day");

  const topScrollRef = useRef(null);
  const bottomScrollRef = useRef(null);

  const currentWeekDates = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const weekMonday = SEMESTER_START.add((currentWeek - 1) * 7, "day");
      return weekMonday.add(i, "day");
    });
  }, [currentWeek]);

  const currentMonthText = useMemo(() => {
    const selectedDate = currentWeekDates[currentDay - 1];

    return `${selectedDate.month() + 1}月`;
  }, [currentWeekDates, currentDay]);

  const flattenedCourses = useMemo(() => {
    return courseList.flatMap((course) => {
      const { baseInfo, sessions } = course;
      return sessions.map((session) => ({
        title: baseInfo.title,
        teacher: session.teacher || baseInfo.teacher,
        color: baseInfo.color,
        weekDay: session.weekDay,
        weekRange: session.weekRange,
        periodRange: session.periodRange,
        location: session.location,
      }));
    });
  }, []);

  useEffect(() => {
    const today = dayjs();
    const dayDiff = today.diff(SEMESTER_START, "day");
    if (dayDiff >= 0) {
      const todayWeek = Math.floor(dayDiff / 7) + 1;
      const todayWeekDay = today.get("day") || 7;
      setCurrentWeek(todayWeek);
      setCurrentDay(todayWeekDay);
    }
  }, []);

  const handlePrevWeek = () => {
    setCurrentWeek((prev) => Math.max(1, prev - 1));
  };
  const handleNextWeek = () => {
    setCurrentWeek((prev) => Math.min(TOTAL_WEEKS, prev + 1));
  };

  const filteredCourses = useMemo(() => {
    return flattenedCourses.filter((course) => {
      const inWeekRange =
        course.weekRange[0] <= currentWeek &&
        currentWeek <= course.weekRange[1];
      const matchWeekDay =
        showType === "day" ? course.weekDay === currentDay : true;
      return inWeekRange && matchWeekDay;
    });
  }, [currentWeek, currentDay, showType, flattenedCourses]);

  const coursesGroupedByWeekDay = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const weekDay = i + 1;
      return filteredCourses.filter((course) => course.weekDay === weekDay);
    });
  }, [filteredCourses]);

  useEffect(() => {
    if (showType !== "week") return;
    const topScroll = topScrollRef.current;
    const bottomScroll = bottomScrollRef.current;
    if (!topScroll || !bottomScroll) return;

    const handleTopScroll = () =>
      (bottomScroll.scrollLeft = topScroll.scrollLeft);
    const handleBottomScroll = () =>
      (topScroll.scrollLeft = bottomScroll.scrollLeft);

    topScroll.addEventListener("scroll", handleTopScroll);
    bottomScroll.addEventListener("scroll", handleBottomScroll);
    return () => {
      topScroll.removeEventListener("scroll", handleTopScroll);
      bottomScroll.removeEventListener("scroll", handleBottomScroll);
    };
  }, [showType]);

  return (
    <Layout title="Hustoday Refresh">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col space-y-1">
          <h1 className="font-semibold text-xs opacity-75">
            {dayjs().format("YYYY 年 MM 月 DD 日")}
          </h1>
          <div className="mt-1 flex flex-row space-x-2 items-center text-xs">
            <div className="rounded-3xl p-2 -translate-x-4 bg-neutral-100 dark:bg-neutral-900 flex flex-row space-x-0.5">
              <button
                onClick={handlePrevWeek}
                disabled={currentWeek === 1}
                className="text-neutral-600"
              >
                <ChevronLeftIcon size={16} />
              </button>
              <h1 className="font-semibold">
                第
                <span className="text-orange-600 ml-0.5 mr-0.5">
                  {currentWeek}
                </span>
                周
              </h1>
              <button
                onClick={handleNextWeek}
                disabled={currentWeek === TOTAL_WEEKS}
                className="text-neutral-600"
              >
                <ChevronRightIcon size={16} />
              </button>
            </div>

            {showType === "day" && currentDay !== (dayjs().get("day") || 7) && (
              <button
                className="text-orange-600 font-semibold flex flex-row items-center space-x-0.5"
                onClick={() => {
                  const today = dayjs();
                  const todayWeek =
                    Math.floor(today.diff(SEMESTER_START, "day") / 7) + 1;
                  const todayWeekDay = today.get("day") || 7;
                  setCurrentWeek(todayWeek);
                  setCurrentDay(todayWeekDay);
                }}
              >
                <span>今天</span>
                <ChevronRightIcon size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-row space-x-3 items-center">
          <div className="flex flex-row space-x-2">
            <OpenDrawer
              title="课表设置"
              desc="管理您的 Hustoday 课表"
              content={<CalendarSettings />}
            >
              <SettingsIcon size={20} />
            </OpenDrawer>
            <OpenDrawer
              title="导入课表"
              desc="导入新课表至 Hustoday"
              content={<ImportScheduleContent />}
            >
              <PlusIcon size={20} />
            </OpenDrawer>
          </div>
          <button
            onClick={() =>
              setShowType((prev) => (prev === "day" ? "week" : "day"))
            }
            className="bg-neutral-100 dark:bg-neutral-900 rounded-full px-4 py-2 font-semibold w-20"
          >
            {showType === "day" ? "周视图" : "日程"}
          </button>
        </div>
      </div>
      <div className="sticky top-4 mt-4 rounded-3xl px-4 py-3 -translate-x-4 w-[calc(100%+2rem)] bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-lg z-10">
        <div
          ref={topScrollRef}
          className="text-sm flex flex-row space-x-8 items-center justify-between flex-nowrap overflow-x-scroll min-w-full"
          style={{ scrollbarWidth: "none" }}
        >
          <div>
            <h1
              className={`text-center font-semibold ${
                showType === "day" ? "w-12" : "w-12"
              }`}
            >
              <span className="text-orange-600 mr-1">{currentMonthText}</span>
            </h1>
          </div>

          <div className="flex flex-row space-x-4">
            {currentWeekDates.map((dateObj, index) => {
              const weekDay = index + 1;
              const dayNumber = dateObj.date();
              return (
                <CalendarDayItem
                  key={index}
                  dayNumber={dayNumber}
                  weekDay={weekDay}
                  weekDayText={WEEK_DAY_MAP[weekDay]}
                  onClick={() => setCurrentDay(weekDay)}
                  isToday={dateObj.isSame(dayjs(), "day")}
                  isSelected={currentDay === weekDay && showType === "day"}
                  showType={showType}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`mt-12 flex flex-row justify-between space-x-8 ${
          showType === "day" ? "px-8" : "pl-8 sm:px-8"
        } -translate-x-8 w-[calc(100%+4rem)]`}
      >
        <div className="flex flex-col space-y-0">
          {timeTable.map((time, index) => {
            const period = index + 1;
            const simplifiedTimeData = time.split("~");
            return (
              <div
                key={index}
                className={`relative flex justify-center items-center w-12 ${SINGLE_PERIOD_HEIGHT} transition-all duration-500`}
              >
                <h1 className="font-semibold text-5xl opacity-20 z-0 w-12 text-center">
                  {period}
                </h1>
                <div className="absolute w-8 flex justify-center items-center">
                  <h1 className="font-medium text-xs text-neutral-600 dark:text-neutral-400 flex flex-col space-y-1">
                    {showType === "day" ? (
                      time
                    ) : (
                      <span className="text-center">
                        {simplifiedTimeData[0]}
                        <br />
                        {simplifiedTimeData[1]}
                      </span>
                    )}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>

        {showType === "day" && (
          <div className="flex flex-col space-y-0 flex-1 relative">
            {filteredCourses.map((course, index) => {
              const [startPeriod, endPeriod] = course.periodRange;
              const startIndex = startPeriod - 1;
              const courseHeight = `calc(${
                endPeriod - startPeriod + 1
              }*var(--single-period-height) - 16px)`;
              const courseTop = `calc(${startIndex}*var(--single-period-height))`;

              return (
                <CourseCard
                  key={index}
                  course={course}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: courseHeight,
                    top: courseTop,
                    "--single-period-height": "6.25rem",
                  }}
                />
              );
            })}
          </div>
        )}

        {showType === "week" && (
          <div
            ref={bottomScrollRef}
            className="flex flex-row space-x-4 flex-nowrap overflow-x-auto min-w-[calc(100% - 2rem)]"
          >
            {coursesGroupedByWeekDay.map((weekDayCourses, weekDayIndex) => {
              const weekDay = weekDayIndex + 1;
              return (
                <div
                  key={weekDayIndex}
                  className="flex flex-shrink-0 flex-col space-y-0 relative"
                  style={{ width: "80px" }}
                >
                  {weekDayCourses.map((course, index) => {
                    const [startPeriod, endPeriod] = course.periodRange;
                    const startIndex = startPeriod - 1;
                    const courseHeight = `calc(${
                      endPeriod - startPeriod + 1
                    }*var(--single-period-height) - 8px)`;
                    const courseTop = `calc(${startIndex}*var(--single-period-height))`;

                    return (
                      <CourseCard
                        key={index}
                        course={course}
                        style={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          width: "80px",
                          height: courseHeight,
                          top: courseTop,
                          "--single-period-height": "6.25rem",
                        }}
                        showType="week"
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}
