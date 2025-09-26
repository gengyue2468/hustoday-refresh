import { ChevronRightIcon } from "lucide-react";
import { NormalHeading } from "./Typography";

const ActionCard = ({ title, desc, ...props }) => {
  return (
    <div
      className="bg-neutral-100 dark:bg-neutral-900 rounded-3xl px-6 py-4"
      {...props}
    >
      <div className="flex flex-row items-center justify-between space-x-4 w-full">
        <div>
          <NormalHeading>{title}</NormalHeading>
          <NormalHeading className="opacity-50">{desc}</NormalHeading>
        </div>
        <div>
          <ChevronRightIcon size={28} />
        </div>
      </div>
    </div>
  );
};
export default ActionCard;
