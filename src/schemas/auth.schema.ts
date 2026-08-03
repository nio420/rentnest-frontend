import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .regex(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Please enter a valid email address.",
    ),

  phone: z.string().trim().optional().or(z.literal("")),

  profilePhoto: z
    .string()
    .trim()
    .url("Enter a valid image URL.")
    .optional()
    .or(z.literal("")),

  password: z.string().min(5, "Password must be at least 5 characters."),

  role: z.enum(["TENANT", "LANDLORD"]),
});

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .regex(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Please enter a valid email address.",
    ),

  password: z.string().min(5, "Password must be at least 5 characters."),
});
