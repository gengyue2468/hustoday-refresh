import { Heading, NormalHeading } from "./Typography";

export default function CalendarCard({ title, status, ...props }) {
  return (
    <div className="rounded-3xl px-6 py-4 bg-neutral-100 dark:bg-neutral-900" {...props}>
      <NormalHeading>{title}</NormalHeading>
      <div className="mt-12">{status}</div>
    </div>
  );
}
