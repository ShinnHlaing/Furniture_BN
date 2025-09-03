import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { Loader2 } from "lucide-react";
// form validation test
const emailSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
});

export default function NewsLetterForm() {
  const [load, setLoad] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "example@email.com",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof emailSchema>) {
    console.log(values);
    setLoad(true);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full"
        autoComplete="off"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative space-y-0">
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@gmail.com"
                  {...field}
                  className="pr-12"
                />
              </FormControl>
              <FormMessage />
              <Button
                size="icon"
                className="absolute top-[4px] right-[3.5px] z-20 size-7"
              >
                {load ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Icons.paperPlane className="size-3" aria-hidden="true" />
                )}

                <span className="sr-only">Join newsletter</span>
              </Button>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
