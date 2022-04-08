import React, { Suspense } from "react";
// import {motion} from "framer-motion"
import lazy from "react-lazy-named";

const MotionDiv = lazy(() =>
  import("framer-motion").then((mod) => ({
    default: mod.motion.div,
  }))
);
// or
// const MotionDiv = lazy(() => import("framer-motion"), "motion.div");

export const AnimatedDiv = (props) => (
  <Suspense fallback={<div className={props.className}>{props.children}</div>}>
    <MotionDiv {...props} />
  </Suspense>
);
const MotionA = lazy(() =>
  import("framer-motion").then((mod) => ({
    default: mod.motion.a,
  }))
);
// const MotionA = lazy(() => import("framer-motion"), "motion.a");

export const AnimatedA = (props) => (
  <Suspense
    fallback={
      <a className={props.className} href={props.href}>
        {props.children}
      </a>
    }
  >
    <MotionA {...props} />
  </Suspense>
);

const MotionLi = lazy(() => import("framer-motion"), "motion.li");

export const AnimatedLi = (props) => (
  <Suspense fallback={<li className={props.className}>{props.children}</li>}>
    <MotionLi {...props} />
  </Suspense>
);

const MotionUl = lazy(() => import("framer-motion"), "motion.ul");

export const AnimatedUl = (props) => (
  <Suspense fallback={<ul className={props.className}>{props.children}</ul>}>
    <MotionUl {...props} />
  </Suspense>
);
