import { ReactChild, ReactChildren, ReactElement, ReactNode } from "react";

interface MaybeProps {
  test: any;
  children: ReactChildren | ReactChild | ReactNode | ReactElement;
}

const Maybe = ({ test, children }: MaybeProps) => {
  return <>{test ? children : null}</>;
};

export default Maybe;
