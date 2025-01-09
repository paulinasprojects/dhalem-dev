import { z } from "zod";

export const contactUsSchema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required" }),
  email: z.string().email().min(1, { message: "Email is required" }),
  phone: z.coerce.number().min(8, { message: "Phone number is required" }),
  subject: z.string().min(1, { message: "Subject is requred" }),
  message: z.string().min(1, { message: "Message is required" }),
});
