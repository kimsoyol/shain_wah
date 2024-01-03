"use client";

import { toast } from "sonner";
import { Textarea } from "../ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { poemFormSchema } from "@/lib/valitators";
import { poemDefaultValues } from "@/constants";

// { type }: { type: "Create" | "Update" }

const PoemForm = () => {
  const type = 'Create'
  const initialValues = poemDefaultValues;

  const form = useForm<z.infer<typeof poemFormSchema>>({
    resolver: zodResolver(poemFormSchema),
    defaultValues: initialValues,
  });

  function onSubmit(values: z.infer<typeof poemFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log('clickz');

    toast("A new poem created!");

    console.log(values);
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Title <span className="optionText">(optional)</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="poem title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Body</FormLabel>
              <FormControl>
                <Textarea placeholder="poem body" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input placeholder="author" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Image link <span className="optionText">(optional)</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="add Image link if you want..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="relatedBook"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Related Book <span className="optionText">(optional)</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="add Related Book if you want..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Submitting..." : `${type} poem `}
        </Button>
      </form>
    </Form>
  );
};
export default PoemForm;
