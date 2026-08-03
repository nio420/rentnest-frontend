"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { registerSchema } from "@/schemas/auth.schema";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { registerAction } from "@/app/(auth)/action/register-action";
import Link from "next/link";

const RegisterForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      profilePhoto: "",
      password: "",
      role: "TENANT",
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value ?? "");
    });

    const result = await registerAction(null, formData);

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
        <label className="mb-2 block text-sm font-medium">Name</label>

        <Input {...register("name")} placeholder="Enter your name" />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Email</label>

        <Input {...register("email")} placeholder="Enter your email" />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Phone (Optional)
        </label>

        <Input {...register("phone")} placeholder="Enter your phone" />

        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Profile Photo URL
        </label>

        <Input {...register("profilePhoto")} placeholder="https://..." />

        {errors.profilePhoto && (
          <p className="mt-1 text-sm text-red-500">
            {errors.profilePhoto.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Password</label>

        <Input
          type="password"
          {...register("password")}
          placeholder="Enter password"
        />

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Role</label>

        <Select
          defaultValue="TENANT"
          onValueChange={(value) =>
            setValue("role", value as "TENANT" | "LANDLORD")
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select role" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="TENANT">Tenant</SelectItem>

            <SelectItem value="LANDLORD">Landlord</SelectItem>
          </SelectContent>
        </Select>

        {errors.role && (
          <p className="mt-1 text-sm text-red-500">{errors.role.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-primary hover:underline cursor-pointer"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
