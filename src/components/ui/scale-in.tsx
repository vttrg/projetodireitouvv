"use client";
import { animated, useInView, useSpring } from "@react-spring/web";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  delay?: number;
};

export function ScaleIn({ delay, ...args }: Props) {
  const [ref, inView] = useInView({
    once: true,
  });
  const springs = useSpring({
    from: {
      opacity: 0,
      scale: 0.85,
    },
    to: {
      opacity: inView ? 1 : 0,
      scale: inView ? 1 : 0.85,
    },
    delay,
  });

  return <animated.div ref={ref} {...args} style={springs} />;
}
