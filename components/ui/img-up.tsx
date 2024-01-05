"use client";

import { createImg } from "@/lib/actions/actions";
import { useFormState, useFormStatus } from "react-dom";

function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      add
    </button>
  );
}

const ImageUp = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createImg, initialState);

  return (
    <div> 
      ImageUp
      <form action={dispatch}>
        <input id="img" name="img" type="file" />
        <SubmitBtn />
      </form>
    </div>
  );
};
export default ImageUp;
