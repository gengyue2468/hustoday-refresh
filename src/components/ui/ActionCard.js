import { ChevronRightIcon } from "lucide-react";

const ActionCard = ({ title, desc, ...props }) => {
  return (
    <div
      className="bg-neutral-100 dark:bg-neutral-900 rounded-3xl px-6 py-4"
      {...props}
    >
      <div className="flex flex-row items-center justify-between space-x-4 w-full">
        <div>
          <h1 className="font-semibold text-lg">{title}</h1>
          <h2 className="font-medium text-lg opacity-50">{desc}</h2>
        </div>
        <div>
          <ChevronRightIcon size={24} />
        </div>
      </div>
    </div>
  );
};
export default ActionCard;
