import { useEffect } from "react";
import anime from "animejs";

export default function Loading() {
  useEffect(() => {
    anime
      .timeline({
        endDelay: 200,
        duration: 200,
        easing: "easeInOutQuad",
        direction: "alternate",
        loop: true,
      })
      .add({ targets: ".one", background: "#2563eb" }, 0);

    anime
      .timeline({
        endDelay: 200,
        delay: 200,
        duration: 200,
        easing: "easeInOutQuad",
        direction: "alternate",
        loop: true,
      })
      .add({ targets: ".two", background: "#db2777" }, 0);
    anime
      .timeline({
        endDelay: 200,
        delay: 400,
        duration: 200,
        easing: "easeInOutQuad",
        direction: "alternate",
        loop: true,
      })
      .add({ targets: ".three", background: "#059669" }, 0);
  }, []);
  return (
    <>
      <div id="tri" className=" relative m-0">
        <div style={style.one} className="one"></div>
        <div style={style.two} className="two"></div>
        <div style={style.three} className="three"></div>
      </div>
    </>
  );
}

const style = {
  one: {
    display: "inline-block",
    width: "10px",
    height: "10px",
    margin: "2px",
    borderRadius: "2px",
    backgroundColor: "#9ca3af",
  },
  two: {
    display: "inline-block",
    width: "10px",
    height: "10px",
    margin: "2px",
    borderRadius: "2px",
    backgroundColor: "#9ca3af",
  },
  three: {
    display: "inline-block",
    width: "10px",
    height: "10px",
    borderRadius: "2px",
    margin: "2px",
    backgroundColor: "#9ca3af",
  },

  tri: {},
};
