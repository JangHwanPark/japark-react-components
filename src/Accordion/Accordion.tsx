import './Accordion.css';
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import clsx from "clsx";

interface AccordionProps {
 title: string;
 description: string;
}

const Accordion = ({
 title,
 description,
} : AccordionProps) => {
 const [open, setOpen] = useState(false);
 return (
  <div className="accordion">
   <div className="accordion-header">
    <p>{title}</p>
    <FaChevronDown onClick={() => setOpen(!open)}/>
   </div>
   {open && (
    <div className={clsx('accordion-content', open ? 'open' : '')}>
     {description}
    </div>
   )}
  </div>
 );
};

export default Accordion;