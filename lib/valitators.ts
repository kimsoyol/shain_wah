import * as z from "zod";


export const poemFormSchema = z.object({
  title: z.string().max(400, {message: "Title must be less than 400 characters"}).optional(),

  body: z.string().min(3, {
    message: "Body must be at least 3 characters.",
  }),

  author: z.string().min(1, {
    message: "Author must be at least 1 characters.",
  }).max(400, {
    message: "Author must be less than 400 characters."
  }),

  imageUrl: z.string().optional(),
  relatedBook: z.string().optional(),
});


export const bookFormSchema = z.object({
  title: z.string().min(1, {message: "Book Title must be more than 1 character"}).max(400, {
    message: "Book title must be less than 400 characters"
  }),
  imageUrl: z.string().optional(),
})