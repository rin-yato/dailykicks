const easing = [0.6, 0.01, -0.05, 0.95];
const easing1 = [0.43, 0.13, 0.23, 0.96];
const easing2 = [0.6, -0.05, 0.01, 0.99];
const duration = 0.6;
const slideUp = 40;
const slideDown = -40;
const right = 40;
const left = -40;
const stagger = 0.1;

const Animation = {
  Fade: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      duration: duration,
      ease: easing,
    },
  },
  SlideUp: {
    initial: {
      y: slideUp,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    transition: {
      duration: duration,
      ease: easing,
    },
  },
  SlideDown: {
    initial: {
      y: slideDown,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    transition: {
      duration: duration,
      ease: easing,
    },
  },
  SlideLeft: {
    initial: {
      x: left,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    transition: {
      duration: duration,
      ease: easing,
    },
  },
  SlideRight: {
    initial: {
      x: right,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    transition: {
      duration: duration,
      ease: easing,
    },
  },
  Scale: {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
    transition: {
      duration: duration,
      ease: easing,
    },
  },
  ScaleX: {
    initial: {
      scaleX: 0,
      opacity: 0,
    },
    animate: {
      scaleX: 1,
      opacity: 1,
    },
    transition: {
      duration: duration,
      ease: easing,
    },
  },
  ScaleY: {
    initial: {
      scaleY: 0,
      opacity: 0,
    },
    animate: {
      scaleY: 1,
      opacity: 1,
    },
    transition: {
      duration: duration,
      ease: easing,
    },
  },
  ScaleXY: {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
    transition: {
      duration: duration,
      ease: easing,
    },
  },
  Stagger: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: stagger,
      },
    },
  },
  SlideUpFromBottom: {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    transition: {
      duration: duration,
      ease: easing,
    },
  },
};

export default Animation;
