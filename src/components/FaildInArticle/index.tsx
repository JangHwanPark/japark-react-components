import * as React from 'react';
import clsx from "clsx";
import {useFadeIn} from "../../hooks";

interface FadeInArticleProps extends React.HTMLAttributes<HTMLElement> {
  articleType?: "p" | "div" | "article";
  children?: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
}

const FadeInArticle: React.FC<FadeInArticleProps> = (props) => {
  const {
    articleType: Article = "p",
    children,
    className,
    direction = "left",
    delay = 0,
    ...rest
  } = props;

  const { componentRef } = useFadeIn(direction, delay);
  const classes = clsx(className);

  return (
      <Article ref={componentRef} className={classes} {...rest}>
        {children}
      </Article>
  );
};

export default FadeInArticle;