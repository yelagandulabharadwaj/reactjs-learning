import React from "react";
import { ReactNode } from "react";
interface Childrenprops {
  children: ReactNode;
}

const ChildrenComponent = ({ children }: Childrenprops) => {
  return <div className="alert alert-primary">{children}</div>;
  
};

export default ChildrenComponent;
