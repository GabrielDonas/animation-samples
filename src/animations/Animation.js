import React from "react";
import Lottie from "react-lottie";
import spinningWheel from "./dots.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: spinningWheel,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Animation() {
  return (
    <div style={{ margin: "1rem", display: "flex" }}>
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
}
