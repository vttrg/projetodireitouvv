import { cn } from "@/lib/utils";

type ViolenceTypesProps = {
    number: number;
    title: string;
    description: string;
    className?: string;
};

export function ViolenceTypes({ number, title, description, className} : ViolenceTypesProps ) {
  return (
    <div className={cn("flex gap-4", className)}>
      <div className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-[#e5dfd2]">
        <p className="text-2xl font-bold">{number}</p>
      </div>
      <div className="text-foreground/80">
        <h3 className="mb-2.5 text-2xl font-semibold">{title}</h3>
        <p className="text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
