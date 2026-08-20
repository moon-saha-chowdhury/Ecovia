import { z } from "zod";

const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const consultancySchema = z.object({
  name: z.string().min(1, "Name is required"),
  mobile: z
    .string()
    .min(1, "Mobile is required")
    .regex(phoneRegex, "Invalid mobile number"),
  email: z
    .string()
    .min(1, "Email is required")
    .regex(emailRegex, "Invalid email format"),
  designation: z.string().optional(),
  department: z.string().optional(),
  company_name: z.string().optional(),
  company_address: z.string().optional(),
  company_website: z.string().optional(),
});
