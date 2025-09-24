import { forwardRef, HTMLProps } from "react";
import { Spinner } from "~/components/spinner";
import { cn } from "~/utils";

export const MediaContainer = forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLDivElement> & { loading?: boolean }
>(({ children, className, loading, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative aspect-video overflow-hidden border border-foreground bg-linear-to-b from-foreground/5 to-foreground/25",
        className
      )}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Spinner className="bg-background" />
        </div>
      )}
      {children}
    </div>
  );
});
MediaContainer.displayName = "MediaContainer";
