"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { loginSchema } from "@/schemas/auth.schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { loginAction } from "@/app/(auth)/action/login-action";
import { ILoginPayload } from "@/lib/authTypes";

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo")?? "";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginPayload>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: ILoginPayload) => {
    const result = await loginAction.bind(null, redirectTo)(data);

    if (result.success) {
      toast.success(result.message);
      router.push("/");
      router.refresh();
      return;
    }

    toast.error(result.message);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium">Email</label>
        <Input
          {...register("email")}
          autoComplete="email"
          placeholder="Enter your email"
          required
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Password</label>
        <Input
          type="password"
          required
          autoComplete="current-password"
          {...register("password")}
          placeholder="Enter your password"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Loading..." : "Login"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Do not have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-primary hover:underline cursor-pointer"
        >
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
