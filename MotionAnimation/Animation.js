const Animation = {
  Fade: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  SlideUp: {
    initial: {
      y: 40,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: 40,
      opacity: 0,
    },
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  SlideDown: {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -100,
      opacity: 0,
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  SlideLeft: {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -100,
      opacity: 0,
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  SlideRight: {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: 100,
      opacity: 0,
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
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
    exit: {
      scale: 0,
      opacity: 0,
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
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
    exit: {
      scaleX: 0,
      opacity: 0,
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
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
    exit: {
      scaleY: 0,
      opacity: 0,
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
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
    exit: {
      scale: 0,
      opacity: 0,
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};


export default Animation;