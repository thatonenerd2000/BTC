const Logo = (props) => {
  return (
    <span style={{ fontSize: props.size }}>
      &#123;
      <span id="BEET" style={{ color: "#7a1c41" }}>
        <i>BEET</i>
      </span>
      <span style={{ textDecoration: "underline" }}>the</span>
      <span id="clock" style={{ color: "black" }}>
        CLOCK
      </span>
      &#125;
    </span>
  );
};

export default Logo;
