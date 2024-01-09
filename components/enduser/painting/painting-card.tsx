import { MotionDiv } from "@/components/ui/motionDiv";
import Image from "next/image";

export interface PaintingProp {
  id: string;
  title: any;
  imgURL: string;
  author: string;
  book?: string | undefined;
  poem?: string | undefined;
  createdAt: string;
}

interface Prop {
  painting: PaintingProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const PaintingCard = ({ painting, index }: Prop) => {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="max-w-xs rounded relative"
    >
      <div className="border-solid border-[1.5px] p-2 h-auto rounded-lg w-full">
        <Image
          width={413}
          height={413}
          src={`/${painting.imgURL}`}
          alt="img"
          className="aspect-[4/3] h-auto lg:aspect-square bg-cover bg-center w-full rounded-xl"
        />
      </div>

      <h2 className="font-bold text-xl text-center">{painting.title}</h2>
    </MotionDiv>
  );
};
export default PaintingCard;
