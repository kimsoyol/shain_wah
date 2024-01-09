import Loading from "@/components/ui/loading";
import { Suspense } from "react";
import { fetchHomePaintings } from "@/lib/data/paintings.data";
import Image from "next/image";
import PaintingCard, {
  PaintingProp,
} from "@/components/enduser/painting/painting-card";
import { fetchHomePomes } from "@/lib/data/poems.data";
import PoemCard, { PoemProp } from "@/components/enduser/poem/poemCard";

const page = async () => {
  const poems = await fetchHomePomes();
  const paintings = await fetchHomePaintings();

  return (
    <main className="">
        <section className="flex gap-5 flex-wrap justify-center mt-5 lg:mt-10">
        {poems && 
          poems.map((poem: PoemProp, index:number) => (
            <PoemCard key={poem.id} poem={poem} index={index} />
          ))
        }
        <div></div>
      </section>
      <Suspense fallback={<Loading />}>
        <section className="flex gap-5 flex-wrap justify-center mt-5 lg:mt-10">
          {paintings &&
            paintings.map((painting: PaintingProp, index: number) => (
              <PaintingCard
                key={painting.id}
                painting={painting}
                index={index}
              />
            ))}
        </section>
      </Suspense>
    </main>
  );
};
export default page;
