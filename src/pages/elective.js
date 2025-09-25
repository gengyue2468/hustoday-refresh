import Layout from "@/components/Layout";
import {
  AlbumIcon,
  ChevronRightIcon,
  FlaskConicalIcon,
  GraduationCapIcon,
  WrenchIcon,
} from "lucide-react";

export default function Elective() {
  const categoryIconSize = 36;

  const category = [
    {
      name: "公选课",
      icon: <AlbumIcon className="text-orange-600" size={categoryIconSize} />,
    },
    {
      name: "专业课",
      icon: (
        <GraduationCapIcon
          className="text-orange-600"
          size={categoryIconSize}
        />
      ),
    },
    {
      name: "劳动课",
      icon: <WrenchIcon className="text-orange-600" size={categoryIconSize} />,
    },
    {
      name: "物理实验",
      icon: (
        <FlaskConicalIcon className="text-orange-600" size={categoryIconSize} />
      ),
    },
  ];

  const hotCourse = [
    {
      name: "艺术鉴赏与评论 —— 中国古典音乐名著赏析",
      teacher: "莫音宏",
      category: "人文与艺术",
      commentCount: 5,
      searchCount: 1421,
    },
    {
      name: "中国共产党历史",
      teacher: "夏增民",
      category: "中国与世界",
      commentCount: 5,
      searchCount: 1208,
    },
    {
      name: "中国文化史",
      teacher: "白杨",
      category: "中国与世界",
      commentCount: 45,
      searchCount: 1142,
    },
    {
      name: "艺术鉴赏与评论 —— 电影赏析",
      teacher: "陶然",
      category: "人文与艺术",
      commentCount: 3,
      searchCount: 1127,
    },
    {
      name: "中国茶文化与茶健康（在线课程）",
      teacher: "陈梁凯",
      category: "人文与艺术",
      commentCount: 6,
      searchCount: 1122,
    },
  ];

  const CategoryCard = ({ icon, name, ...props }) => {
    return (
      <div
        {...props}
        className="rounded-3xl px-6 py-4 bg-neutral-100 dark:bg-neutral-900 flex flex-col space-y-2 justify-center items-center"
      >
        <div>{icon}</div>
        <h1 className="font-semibold text-xl opacity-50">{name}</h1>
      </div>
    );
  };

  const CourseCard = ({
    name,
    teacher,
    category,
    commentCount,
    searchCount,
    ...props
  }) => {
    return (
      <div
        {...props}
        className="rounded-3xl px-6 py-4 bg-neutral-100 dark:bg-neutral-900"
      >
        <h1 className="font-semibold text-xl">{name}</h1>
        <h1 className="font-semibold text-xl opacity-50">{teacher}等</h1>

        <div className="my-8">
          <h1 className="font-semibold text-xl opacity-50">课程类别：{category}</h1>
          <h1 className="font-semibold text-xl opacity-50">
            {commentCount} 条评论，{searchCount} 人搜索过
          </h1>
        </div>

        <button className="flex flex-row space-x-1 items-center bg-orange-600 rounded-full px-5 py-2.5 text-lg">
          <span className="text-white font-semibold">了解详情</span>
          <ChevronRightIcon size={24} />
        </button>
      </div>
    );
  };

  const headingStyle = "font-semibold text-xl ml-4";
  return (
    <Layout title="爱选修">
      <h1 className="font-semibold text-4xl mt-12">爱选修</h1>
      <h1 className="mt-2 font-semibold text-3xl opacity-50">选课不发愁~</h1>

      <div className="mt-8 -translate-x-4 w-[calc(100%+2rem)]">
        <h1 className={headingStyle}>按类别浏览</h1>

        <div className="my-4 grid grid-cols-2 grid-rows-2 gap-4">
          {category.map((cate) => (
            <CategoryCard name={cate.name} icon={cate.icon} />
          ))}
        </div>

        <h1 className={headingStyle}>当下热门的公选课</h1>

        <div className="my-4 flex flex-col space-y-4">
          {hotCourse.map((course) => (
            <CourseCard
              name={course.name}
              teacher={course.teacher}
              category={course.category}
              commentCount={course.commentCount}
              searchCount={course.searchCount}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
