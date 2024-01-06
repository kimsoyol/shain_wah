"use client";

import { createImg } from "@/lib/actions/poem.actions";

import { useFormState } from "react-dom";
import { Input } from "./input";

const ImageUp = () => {
  const initialState = { errors: {}, message: null };
  const [state, dispatch] = useFormState(createImg, initialState);

  
  return (
    <div>
      ImageUp
      <form action={dispatch}>
        <input
          id="title"
          name="title"
          type="text"
          aria-describedby="title-error"
          placeholder="title"
        />
        <input
          id="author"
          name="author"
          type="text"
          aria-describedby="img-error"
          placeholder="author"
          required
        />
        <input id="img" name="img" type="file" aria-describedby="img-error" required/>
        <button type="submit">add </button>
      </form>
    </div>
  );
};
export default ImageUp;

// {state.errors?img &&
//   state.errors.img.map(error:string) => (
//     <p key={error}>
//       {error}
//     </p>
//   )
// }
