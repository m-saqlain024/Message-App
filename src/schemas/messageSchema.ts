import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "content must be atleast 10 character" })
    .max(300, { message: "content must no longer 300 character" }),
});
