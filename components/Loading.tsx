import { useEffect } from "react";
import anime from "animejs";

export default function Loading() {
  useEffect(() => {
    anime({
      targets: ".property-keyframes-demo .el",
      translateX: [
        { value: 50, duration: 1000, delay: 500 },
        { value: 0, duration: 1000, delay: 500 },
      ],

      translateY: [
        { value: -40, duration: 500 },
        { value: 0, duration: 500, delay: 1000 },
      ],
      scaleX: [
        { value: 2, duration: 100, delay: 500, easing: "easeOutExpo" },
        { value: 1, duration: 900 },
        { value: 2, duration: 100, delay: 500, easing: "easeOutExpo" },
        { value: 1, duration: 900 },
      ],
      scaleY: [
        { value: [1.75, 1], duration: 500 },
        { value: 2, duration: 50, delay: 1000, easing: "easeOutExpo" },
        { value: 1, duration: 450 },
      ],

      easing: "easeOutElastic(1, .8)",
      loop: true,
    });
  }, []);
  return (
    <>
      <div className=" relative m-auto w-36 h-[100vh] property-keyframes-demo flex justify-center items-center">
        <div className=" left-11  absolute rounded-sm text el w-3 h-3 bg-gradient-to-r from-gray-500 to-slate-500"></div>
      </div>
    </>
  );
}
