"use client";
import { animated, useInView, useSpring } from "@react-spring/web";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  delay?: number;
};

export function SlideUp({ delay, ...args }: Props) {
  const [ref, inView] = useInView({
    once: true,
  });
  const springs = useSpring({
    from: {
      opacity: 0,
      y: 40,
    },
    to: {
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 40,
    },
    delay,
  });

  return <animated.div ref={ref} {...args} style={springs} />;
}
