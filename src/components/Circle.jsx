function Circle(props) {
  return (
    <div
      className="circle"
      style={{
        height: props.height,
        width: props.width,
        lineHeight: props.lineHeight,
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      {props.name}
    </div>
  );
}

export default Circle;
