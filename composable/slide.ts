import { fetcher } from "./fetcher";
import useSWR from "swr";

// export class MyLength {
//   public length: any;
//   public static instance: MyLength = new MyLength();
//   private constructor() {
//     fetch("https://sleorpels.herokuapp.com/api/informs?populate=*")
//       .then((response) => response.json())
//       .then((data) => {
//         this.length = data.data.length;
//       });
//     console.log("Length: ", this.length);
//   }
// }

export function startSlide(dc: any, length: number) {
  const slider = dc.querySelector(".slider");
  let currentSlide = 0;

  function nextSlide(slide: number) {
    Array.from(slider.children).forEach((item: any, index) => {
      item.style.visibility = `${!(index - slide) ? "visible" : "hidden"}`;
      item.style.transform = `translateX(${100 * (index - slide)}px)`;
      // item.style.transform = `translateX(${100 * (index - slide)}px)`;
    });
  }
  nextSlide(0); // initial slide
  var stopSliding: any = null;

  stopSliding = setInterval(() => {
    currentSlide++; // after initial slide
    if (currentSlide >= 0 && currentSlide < length) {
      nextSlide(currentSlide);
    } else {
      currentSlide = 0;
      nextSlide(currentSlide);
    }
  }, 3000);
}
