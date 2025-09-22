import { forwardRef, HTMLProps } from "react";
import { cn } from "~/utils";
import styles from "./spinner.module.css";

export const Spinner = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-foreground w-12 p-1 aspect-square",
          styles.spinner,
          className
        )}
        {...props}
      />
    );
  }
);
Spinner.displayName = "Spinner";
