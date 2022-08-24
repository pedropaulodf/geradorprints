import "./styles.scss";

type CardProgilePropsType = {
  data: {
    key: number;
    name: string;
    imgUrl: string;
  };
  iconComponent: any;
};

export default function CardProfile({
  data,
  iconComponent,
}: CardProgilePropsType) {
  return (
    <div className="cardprofile-container">
      <div className="avatar-name-box">
        <div>
          <img src={data.imgUrl} alt={`${data.name} photo`} />
        </div>
        <div>
          <p>{data.name}</p>
        </div>
      </div>
      <div>{iconComponent}</div>
    </div>
  );
}
