// @ts-nocheck
import React, { useState, useEffect } from "react";
import { AnimatedLi, AnimatedDiv } from "../Animated";
import { shuffle } from "lodash-es";
import { ReactComponent as Logo } from "./logo.svg";
import {
  delay,
  spring,
  logoAnimation,
  logoTransition,
} from "./animation.config";
import s from "./styles.module.css";

const initialColors = [
  ["#FF008C", "#FFF0FC"],
  ["#D309E1", "#A3F9A1"],
  ["#9C1AFF", "#F1FA0F"],
  ["#7700FF", "#77E0FF"],
];

function Animation() {
  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    setTimeout(() => setColors(shuffle(colors)), delay * 1000);
  }, [colors]);

  return (
    <section className={s.animated}>
      <ul>
        {colors.map(([background, fill], idx) => (
          <AnimatedLi
            key={background}
            layoutTransition={spring}
            style={{ background, "--logo-color": fill }}
          >
            <AnimatedDiv
              animate={logoAnimation}
              transition={{ ...logoTransition, delay: idx * (delay / 2) }}
            >
              <Logo className={s.logo} />
            </AnimatedDiv>
          </AnimatedLi>
        ))}
      </ul>
    </section>
  );
}

export default Animation;
