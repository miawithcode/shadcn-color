import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-6 md:px-16 lg:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
}
