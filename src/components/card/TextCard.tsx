import { Card } from "@/components/ui/card";
import { cn } from "@/utils";

type CardProps = React.ComponentProps<typeof Card> & {
  value: string;
  title: string;
};

export function TextCard({ value, title, className, ...props }: CardProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div>{value}</div>
      <div className=" text-gray-400">{title}</div>
    </div>
  );
}
