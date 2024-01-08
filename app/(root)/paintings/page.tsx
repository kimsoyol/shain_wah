
import PaintingCard, { PaintingProp } from "@/components/enduser/painting/painting-card";
import { fetchPaintings } from "@/lib/data/paintings.data";

const page = async () => {
  const paintings = await fetchPaintings();

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Paintings</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {paintings.map((painting: PaintingProp, index: number) => (
          <PaintingCard key={painting.id} painting={painting} index={index}/>
        ))}
      </section>
    </main>
  );
};
export default page;
