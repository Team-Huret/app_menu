import * as z from "zod";

export const welcomeSchema = z.object({
  name: z.string(),
  type: z.string(),
  curency: z.string(),
  language: z.string(),
});
