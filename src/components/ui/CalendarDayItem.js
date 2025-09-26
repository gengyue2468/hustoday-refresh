export default function CalendarDayItem({
  dayNumber,
  weekDay,      
  weekDayText, 
  onClick,
  isToday, 
  isSelected, 
  showType,
}) {
  return (
    <div
      className={`transition-all duration-500 cursor-pointer flex flex-col space-y-1 justify-center items-center rounded-full ${
        showType === "day" ? "w-6" : "w-20"
      } ${isSelected ? "text-orange-600" : "text-neutral-700 dark:text-neutral-300"}`}
      onClick={onClick}
    >
      <span className="opacity-75 text-xs">{weekDayText}</span>
      <span className="font-semibold text-base">{dayNumber}</span>
      <span className={isToday ? "bg-orange-600 rounded-full w-4 h-1" : "bg-transparent w-4 h-1"} />
    </div>
  );
}
