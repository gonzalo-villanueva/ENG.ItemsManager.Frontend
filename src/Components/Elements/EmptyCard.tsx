import { CardWrapper } from "./Styled";

type ComponentProps = {
  children?: React.ReactNode;
};

export const EmptyCard = ({children,...props}: ComponentProps) => {

  return (<CardWrapper>
    <div className="fullcontent">
      {children}
    </div>
  </CardWrapper>);
}