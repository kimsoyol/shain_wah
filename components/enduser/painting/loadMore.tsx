// "use client";

// import { fetchPaintings } from "@/lib/data/paintings.data";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";
// import PaintingCard, { PaintingProp } from "./painting-card";

// let page = 2;

// export type PaintingCard = JSX.Element;

// function LoadMore() {
//   const { ref, inView } = useInView();
//   const [data, setData] = useState<PaintingCard[]>([]);

//   useEffect(() => {
//     if (inView) {
//       fetchPaintings(page).then((res) => {
//         setData([...data, ...res]);
//         page++
//       });
//     }
//   }, [inView, data]);

//   return (
//     <>
//       <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
//         {data}
//       </section>
//       <section className="flex justify-center items-center w-full">
//         <div ref={ref}>
//           <Image
//             src="./spinner.svg"
//             alt="spinner"
//             width={56}
//             height={56}
//             className="object-contain"
//           />
//         </div>
//       </section>
//     </>
//   );
// }

// export default LoadMore;
