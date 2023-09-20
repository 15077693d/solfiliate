import { BellIcon, CheckIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/utils";
import { useRouter } from "next/router";

type CardProps = React.ComponentProps<typeof Card> & {
  value: string;
  title: string;
};

export function TextCard({ value, title, className, ...props }: CardProps) {
  return (
    <div className="flex flex-col items-center">
      <div>{value}</div>
      <div className=" text-gray-400">{title}</div>
    </div>
  );
}
