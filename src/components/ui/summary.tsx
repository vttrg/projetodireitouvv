"use client";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import { ReactNode, useState } from "react";

type SummaryProps = {
    trigger: string;
    children: ReactNode;
};

export function Summary({ trigger, children }: SummaryProps) {
    const [open, setOpen] = useState(false)

    return (
        <div className="text-foreground/80">
            <button className="flex items-center gap-3 group" 
                    onClick={() => setOpen(!open)}
                    data-state={open ? 'open' : 'closed'}
            >
                <TriangleRightIcon 
                    className="size-7 text-foreground/75 transition-transform duration-200 ease-linear group-data-[state=open]:rotate-90"
                />
                <span className="text-lg">{trigger}</span>
            </button>

            <div className="pl-3 overflow-hidden transition-all duration-200 ease-linear grid-rows-[0fr] grid data-[state=open]:grid-rows-[1fr] group" 
            data-state={open ? 'open' : 'closed'}
            >
                <div className="px-7 py-5 border-l border-black/15 min-h-0 invisible transition-all duration-200 ease-linear group-data-[state=open]:visible">
                    {children}
                </div>
            </div>

        </div>
    )
}