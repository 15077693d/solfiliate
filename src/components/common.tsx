import { cn } from "@/utils";
import React from "react";

export const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children }) => {
  return (
    <div className={cn("m-auto max-w-7xl p-2 md:px-7", className)}>
      {children}
    </div>
  );
});
