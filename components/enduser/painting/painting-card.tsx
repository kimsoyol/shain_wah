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
      className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full h-[37vh]">
        <Image
        
          src={`/${painting.imgURL}`}
          alt="img"
          fill
          className="rounded-xl"
        />
      </div>

      <h2 className="font-bold text-xl">{painting.title}</h2>
    </MotionDiv>
  );
};
export default PaintingCard;
