"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Textarea } from "@/src/components/ui/textarea";
import { useState } from "react";

const formSchema = z.object({
  emailAddress: z.string().email(),
  message: z.string(),
  name: z.string(),
});

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      name: "",
      message: "",
    },
  });

  //   const accountType = form.watch("accountType");

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("values at submit", { values });
    // e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // setStatus("Email sent successfully!");
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred while sending email.");
    }
  };

  return (
    // <main className="flex  flex-col items-center justify-between text-white w-full">
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-5 shadow-lg  border p-5 mt-10 md:mt-0 md:p-10 rounded-3xl text-white w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Name"
                    type="text"
                    {...field}
                    className="bg-white text-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email address"
                    type="email"
                    {...field}
                    className="bg-white text-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    {...field}
                    className="bg-white text-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button
          className=" bg-white text-black
 hover:bg-red-700 hover:text-white
 px-[1em] py-[0.75em]
 rounded-[1.5em]"
        >
          Submit
        </Button>
      </form>
      {status && <p className="mt-4 text-white">{status}</p>}
    </Form>
    // </main>
  );
}
