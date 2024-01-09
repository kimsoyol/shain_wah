"use client";

import { FormBtn } from "@/components/ui/formBtn";
import { Input } from "@/components/ui/input";
import { createPainting } from "@/lib/actions/painting.actions";

import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

const BookForm = () => {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(createPainting, initialState);
  const { pending } = useFormStatus();

  return (
    <div>
      ImageUp
      <form action={dispatch}>
        <Input
          id="title"
          name="title"
          type="text"
          aria-describedby="title-error"
          placeholder="title"
          className="mt-5"
        />
        <Input
          id="author"
          name="author"
          type="text"
          aria-describedby="img-error"
          placeholder="author"
          required
          className="mt-5"
        />
        <div>
          {state.errors?.author && (
            <p className="mt-2 text-sm text-red-500">{state.errors.author}</p>
          )}
        </div>
        <Input
          id="img"
          name="img"
          type="file"
          aria-describedby="img-error"
          className="mt-5"
          required
        />

        <FormBtn type="submit" className="mt-5" aria-disabled={pending}>
          Create Book
        </FormBtn>
      </form>
    </div>
  );
};
export default BookForm;

// {state.errors?img &&
//   state.errors.img.map(error:string) => (
//     <p key={error}>
//       {error}
//     </p>
//   )
// }
