import "./card.css";

type CardProps = {
  text: string;
  onClick: (folder: string) => void;
};

const Card = ({ text, onClick }: CardProps) => {
  return (
    <div className="card" onClick={() => onClick(text)} key={text}>
      <div className="card-image">IMAGE</div>
      <div className="card-name">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
