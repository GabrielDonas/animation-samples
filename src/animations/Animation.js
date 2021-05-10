import React, { useMemo } from "react";
import Lottie from "react-lottie";
import spinningWheel from "./dots.json";

//Lottie Settings
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: spinningWheel,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Animation(props) {
  return useMemo(() => {
    return (
      <div style={{ margin: "1rem", display: "flex" }}>
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          isStopped={props.isStopped}
          isPaused={props.isPaused}
        />
      </div>
    );
  }, [props.isStopped, props.isPaused]);
}
