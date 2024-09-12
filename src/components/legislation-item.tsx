import { cn } from "@/lib/utils";

type LegislationItemProps = {
  title: string;
  description: string;
  className?: string;
};

export function LegislationItem({
  title,
  description,
  className,
}: LegislationItemProps) {
  return (
    <div
      className={cn("flex flex-1 gap-4 rounded-sm bg-[#e5dfd2] p-4", className)}
    >
      <div className="text-foreground/80">
        <h3 className="mb-2.5 text-xl font-semibold lg:text-2xl">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}
