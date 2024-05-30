export const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{...style, display: "block", background: "red", color: "white", padding: "5px", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  };



 export const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{...style, display: "block", background: "red", color: "white", padding: "5px", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  };