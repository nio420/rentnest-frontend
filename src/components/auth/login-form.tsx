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

const demoAccounts = {
  tenant: {
    email: "mob@gmail.com",
    password: "12345",
  },
  landlord: {
    email: "mob1@gmail.com",
    password: "12345",
  },
  admin: {
    email: "admin@rentnest.com",
    password: "admin123",
  },
};

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ILoginPayload>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const fillDemoAccount = (role: keyof typeof demoAccounts) => {
    setValue("email", demoAccounts[role].email);
    setValue("password", demoAccounts[role].password);
  };

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

      <Button type="submit" className="w-full cursor-pointer" disabled={isSubmitting}>
        {isSubmitting ? "Loading..." : "Login"}
      </Button>

      <Button
        type="button"
        variant="outline"
        className="w-full flex items-center justify-center gap-2 cursor-pointer"
        onClick={() => {
          window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/auth/google`;
        }}
      >
        <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
        <span>Continue with Google</span>
      </Button>

      {/* Demo login */}
      <div className="space-y-2">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Demo Login
        </p>

        <div className="grid grid-cols-3 gap-2">
          <Button
            type="button"
            className="cursor-pointer bg-slate-100 text-slate-900 border border-slate-300 hover:bg-slate-200 font-medium transition-colors shadow-sm"
            onClick={() => fillDemoAccount("tenant")}
            disabled={isSubmitting}
          >
            Tenant
          </Button>

          <Button
            type="button"
            className="cursor-pointer bg-slate-100 text-slate-900 border border-slate-300 hover:bg-slate-200 font-medium transition-colors shadow-sm"
            onClick={() => fillDemoAccount("landlord")}
            disabled={isSubmitting}
          >
            Landlord
          </Button>

          <Button
            type="button"
            className="cursor-pointer bg-slate-100 text-slate-900 border border-slate-300 hover:bg-slate-200 font-medium transition-colors shadow-sm"
            onClick={() => fillDemoAccount("admin")}
            disabled={isSubmitting}
          >
            Admin
          </Button>
        </div>
      </div>

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
