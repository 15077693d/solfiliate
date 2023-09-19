"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string(),
  description: z.string(),
  logoImage: z.any(),
  bannerImage: z.any(),
  listOfNfts: z.any(),
  price: z.coerce.number().min(0),
  affiliateCutPercent: z.coerce.number().min(0).max(100),
});

export function MintForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name:</FormLabel>
              <FormControl>
                <Input placeholder="Decide Your Collection Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description:</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe Your Collection"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="logoImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Logo Image:</FormLabel>
              <FormDescription>
                This icon represents your collection and appears in search
                results
              </FormDescription>
              <FormControl>
                <Input
                  placeholder="Decide Your Collection Name"
                  {...field}
                  type="file"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bannerImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Banner Image:</FormLabel>
              <FormDescription>
                This image will appear at the top of your collection page
              </FormDescription>
              <FormControl>
                <Input
                  placeholder="Decide Your Collection Name"
                  {...field}
                  type="file"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="listOfNfts"
          render={({ field }) => (
            <FormItem>
              <FormLabel>List of NFTs:</FormLabel>
              <FormDescription>
                This image will appear in your collection page
              </FormDescription>
              <FormControl>
                <Input
                  placeholder="Decide Your Collection Name"
                  {...field}
                  type="file"
                  multiple
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price:</FormLabel>
              <FormDescription>
                How much you wanna sell each NFT in sol
              </FormDescription>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="affiliateCutPercent"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Affiliate cut (%):</FormLabel>
              <FormDescription>
                Decide the percentage of each sale to reward influencers for
                successful promotions
              </FormDescription>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Launch Collection</Button>
      </form>
    </Form>
  );
}
