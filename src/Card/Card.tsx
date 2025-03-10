import clsx from "clsx";

const Card = ({
 title,
 description,
 imgUrl,
 size = "md",
 className,
}: CardProps) => {
 const cardClass = clsx(
  className,
  "border border-gray-200 rounded-lg",
  {
   "w-72": size === "sm",
   "w-80": size === "md",
   "w-96": size === "lg",
  },
 );
 const imgClass = clsx(
  "h-auto rounded-t-lg object-cover",
 );
 return (
  <div
   className={cardClass}
   aria-labelledby={`card-title-${title}`}
  >
   {imgUrl && (
    <img
     src={imgUrl}
     alt={`${title} image`}
     className={imgClass}
    />
   )}
   <div className="p-4">
    <p className="font-bold text-lg">
     {title}
    </p>
    <p className="mt-4">
     {description}
    </p>
   </div>
  </div>
 );
};

export default Card;