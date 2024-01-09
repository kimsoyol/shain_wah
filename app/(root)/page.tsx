import Loading from "@/components/ui/loading";
import { Suspense } from "react";
import { fetchHomePaintings } from "@/lib/data/paintings.data";
import Image from "next/image";
import PaintingCard, {
  PaintingProp,
} from "@/components/enduser/painting/painting-card";

const page = async () => {
  const paintings = await fetchHomePaintings();

  return (
    <main className="">
        <section className="flex gap-5 flex-wrap justify-center mt-5 lg:mt-10">
        <p>Recent Poems...</p>
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
