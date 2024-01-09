"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
//import { setContent } from "../slices/contentSlice";

export interface PoemProp {
  id: string;
  title: any;
  body: string;
  author: string;
  book?: string | undefined;
  poem?: string | undefined;
  createdAt: string;
}

interface Prop {
  poem: PoemProp;
  index: number;
}

const PoemCard = ({ poem, index }: Prop) => {
  const [showFullContent, setShowFullContent] = useState('');

  const toggleContent = (contentId: number) => {
    setShowFullContent((prevState) => ({
      ...prevState,
      [contentId]: !prevState[contentId],
    }));
  };

  return (
    // <Link
    //   key={poem.id}
    //   className="whitespace-pre-wrap block mb-8 sm:mb-0"
    //   href={`/poems/${poem.id}`}
    // >
    <div key={poem.id} className="whitespace-pre-wrap block mb-8 sm:mb-0">
      <p className="font-bold">{poem.title}</p>
      <p>{showFullContent[index] ? poem.body : poem.body.substring(0, 200)}</p>
      {poem.body.length > 200 && (
        <button className="mt-5 text-sm" onClick={() => toggleContent(index)}>
          {showFullContent[index] ? "Read Less" : "Read More"}
        </button>
      )}
      <hr className="place-self-end" />
    </div>
  );
};

export default PoemCard;
