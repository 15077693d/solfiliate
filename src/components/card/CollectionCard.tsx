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

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card> & {
  imgSrc: string;
};

export function CollectionCard({ imgSrc, className, ...props }: CardProps) {
  return (
    <Card className={cn("overflow-hidden", className)} {...props}>
      <CardContent className="p-0">
        <img className="w-full" src={imgSrc} />
      </CardContent>
      <CardHeader>
        <CardTitle>Collection</CardTitle>
        <CardDescription>9 Items</CardDescription>
      </CardHeader>
    </Card>
  );
}
