import {
  CalendarDaysIcon,
  CircleUserRoundIcon,
  MessageCircleMoreIcon,
  SendIcon,
} from "lucide-react";

export const iconSize = 24;

export const navItems = [
  {
    name: "课表",
    href: "/",
    icon: <CalendarDaysIcon size={iconSize} />,
  },
  {
    name: "热点",
    href: "/hot",
    icon: <MessageCircleMoreIcon size={iconSize} />,
  },
  {
    name: "爱选修",
    href: "/elective",
    icon: <SendIcon size={iconSize} />,
  },
  {
    name: "我的",
    href: "/dashboard",
    icon: <CircleUserRoundIcon size={iconSize} />,
  },
];
