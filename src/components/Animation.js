import React, { useMemo } from "react";
import Lottie from "react-lottie";

export default function Animation(props) {
  return useMemo(() => {
    //Lottie Settings
    const defaultOptions = {
      loop: true,
      autoplay: false,
      animationData: props.animation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

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
  }, [props.isStopped, props.isPaused, props.animation]);
}
