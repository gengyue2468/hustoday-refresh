import Layout from "@/components/Layout";
import { Heading, NormalHeading, SubHeading } from "@/components/ui/Typography";
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
      name: "中国共产党历史（在线课程）",
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
        <NormalHeading className="opacity-50">{name}</NormalHeading>
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
        <NormalHeading>{name}</NormalHeading>
        <NormalHeading className="opacity-50">{teacher}等</NormalHeading>

        <div className="my-8">
          <NormalHeading className="font-semibold text-lg opacity-50">
            课程类别：{category}
          </NormalHeading>
          <NormalHeading className="opacity-50">
            {commentCount} 条评论，{searchCount} 人搜索过
          </NormalHeading>
        </div>

        <button className="text-white flex flex-row space-x-1 items-center bg-orange-600 rounded-full px-5 py-2.5 text-lg">
          <span className="font-semibold">了解详情</span>
          <ChevronRightIcon size={24} />
        </button>
      </div>
    );
  };

  return (
    <Layout title="爱选修">
      <Heading className="mt-12">爱选修</Heading>
      <SubHeading className="">选课不发愁~</SubHeading>

      <div className="mt-8 -translate-x-4 w-[calc(100%+2rem)]">
        <NormalHeading className="ml-4">按类别浏览</NormalHeading>

        <div className="my-4 grid grid-cols-2 grid-rows-2 gap-4">
          {category.map((cate) => (
            <CategoryCard key={cate.name} name={cate.name} icon={cate.icon} />
          ))}
        </div>

        <NormalHeading className="ml-4">当下热门的公选课</NormalHeading>

        <div className="my-4 flex flex-col space-y-4">
          {hotCourse.map((course) => (
            <CourseCard
              key={course.name}
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
