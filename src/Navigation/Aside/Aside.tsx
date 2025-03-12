import { ReactNode } from "react";

const Aside = ({ children }: { children: ReactNode }) => {
 return (
  <div>
   <aside>{children}</aside>
  </div>
 );
};

export default Aside;