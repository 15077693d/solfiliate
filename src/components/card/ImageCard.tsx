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
  path?: string;
  imgSrc?: string;
  title1?: string;
  title2?: string;
  title3?: string;
};

export function ImageCard({
  path = "/collection",
  imgSrc = "/nft.png",
  title1 = "Project # 00001",
  title2 = "35 SOL",
  title3 = "9.45 USD",
  className,
  ...props
}: CardProps) {
  const router = useRouter();
  return (
    <Card
      onClick={() => router.push(path)}
      className={cn("overflow-hidden", className)}
      {...props}
    >
      <CardContent className="p-0">
        <img className="w-full" src={imgSrc} />
      </CardContent>
      <CardHeader>
        {title1 && <CardTitle>{title1}</CardTitle>}
        {title2 && <CardDescription>{title2}</CardDescription>}
        {title3 && (
          <CardDescription className="text-black">{title3}</CardDescription>
        )}
      </CardHeader>
    </Card>
  );
}
