import * as React from 'react';
import clsx from "clsx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {useRef} from "react";

interface FadeInTitleProps  extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  titleType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
}

gsap.registerPlugin(useGSAP);
const FadeInTitle: React.FC<FadeInTitleProps > = (props) => {
  const {
    titleType: Heading = "h1",
    title,
    className,
    direction = null,
    delay = 0,
    ...rest
  } = props;

  const headingRef = useRef(null);
  const classes = clsx(className)

  const distance = 200;
  let fadeDirection;
  switch (direction) {
    case "left":
      fadeDirection = {x: -distance};
      break;
    case "right":
      fadeDirection = {x: distance};
      break;
    case "bottom":
      fadeDirection = {y: distance};
      break;
    case "top":
      fadeDirection = {y: distance};
      break;
    default:
      fadeDirection = {x: 0};
  }

  useGSAP(() => {
    gsap.from(headingRef.current, 1, {
      ...fadeDirection,
      opacity: 0,
      delay
    })
  })

  return (
      <Heading ref={headingRef} className={classes} {...rest}>{title}</Heading>
  );
};

export default FadeInTitle;