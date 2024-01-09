// import { fetchAllPaintings } from "@/lib/data/paintings.data";
// import Image from "next/image";



// const AllPaintings = async() => {
//   const allPaintings = await fetchAllPaintings();

  
//   return (
//     <div>
//       <h2>AllPainting</h2>
//         {allPaintings.map((painting, i) => {
//           return (
//             <div key={painting.id}>
//               <p>{painting.title}</p>
//               <Image 
//                 src={`/${painting.imgURL}`}
//                 width={500}
//                 height={500}
//                 alt='sup'
//               />
//               <p>{painting.author}</p>
//             </div>
//           )
//         })}
//     </div>
//   )
// }
// export default AllPaintings