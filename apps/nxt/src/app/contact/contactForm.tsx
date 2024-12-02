"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";
import { InputErrorMSG } from "@repo/ui/input-error-msg";

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(8),
  message: z.string().min(2).max(10),
});

type FormFields = z.infer<typeof schema>;

export default function ContactForm() {
  const [count, setCount] = useState(0);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    // defaultValues: {
    //   email: "test@email.com",
    // },
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      setCount(count + 1);
      await new Promise((resolve, reject) =>
        setTimeout(() => (count % 2 === 0 ? resolve(true) : reject()), 1000)
      );
      alert(JSON.stringify(data));
    } catch (error) {
      setError("root", {
        message: "Every second submit fails. Please try again.",
      });
    }
  };

  return (
    <form className="tutorial gap-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <Label htmlFor="Name">Name</Label>
        <Input
          {...register("name")}
          hasError={!!errors.name}
          id="name"
          type="text"
          placeholder="Name..."
        />
        {errors.name && <InputErrorMSG>{errors.name.message}</InputErrorMSG>}
      </div>
      <div className="mb-6">
        <Label htmlFor="email">Email</Label>
        <Input
          {...register("email")}
          hasError={!!errors.email}
          id="email"
          type="text"
          placeholder="Email..."
        />
        {errors.email && <InputErrorMSG>{errors.email.message}</InputErrorMSG>}
      </div>
      <div className="mb-6">
        <Label htmlFor="message">Message</Label>
        <Input
          {...register("message")}
          hasError={!!errors?.message}
          id="message"
          type="text"
          placeholder="Message..."
        />
        {errors.message && (
          <InputErrorMSG>{errors.message?.message}</InputErrorMSG>
        )}
      </div>
      <div className="mb-6">
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading..." : "Submit"}
        </Button>
      </div>
      {errors.root && <InputErrorMSG>{errors.root.message}</InputErrorMSG>}
    </form>
  );
}
