import clsx from "clsx";

interface TimelineItems {
  title?: string;
  date?: string;
  contents?: string;
}

interface TimelineProps {
  items: TimelineItems[];
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const Timeline = ({ items, className, size = "md" }: TimelineProps) => {
  // size가 undefined가 아니라는 것을 보장하기 위해 NonNullable 사용
  const sizeStyles: Record<NonNullable<TimelineProps["size"]>,
      { date: string; title: string; contents: string }> = {
    sm: {
      date: "text-xs",
      title: "text-md font-bold",
      contents: "text-xs",

    },
    md: {
      date: "text-sm",
      title: "text-base font-bold",
      contents: "text-sm",
    },
    lg: {
      date: "text-base",
      title: "text-xl font-bold",
      contents: "text-base",
    },
    xl: {
      date: "text-base",
      title: "text-2xl font-bold",
      contents: "text-lg",
    },
    "2xl": {
      date: "text-base",
      title: "text-3xl font-bold",
      contents: "text-xl",
    },
  };

  const classes = clsx(className);

  return (
      <ul className={classes}>
        {items.map((item, index) => (
            <li key={index}>
              <div className={sizeStyles[size].date}>{item.date}</div>
              <h2 className={sizeStyles[size].title}>{item.title}</h2>
              {item.contents && (
                  <p className={sizeStyles[size].contents}>
                    {item.contents}
                  </p>
              )}
            </li>
        ))}
      </ul>
  );
};

export default Timeline;
