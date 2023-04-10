import { ReactNode } from "react";
import "./card.css";

type CardProps = {
  text: string;
  icon: string | ReactNode;
  onClick: (folder: string) => void;
};

const Card = ({ text, onClick, icon }: CardProps) => {
  return (
    <div className="card" onClick={() => onClick(text)} key={text}>
      <div className="card-image">
        {typeof icon === "string" ? (
          <img src={`data:image/svg+xml;utf8,${icon}`} />
        ) : (
          icon
        )}
      </div>
      <div className="card-name">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
