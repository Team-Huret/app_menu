import * as z from "zod";

export const BusinessSchema = z.object({
  name: z.string(),
  description: z.string(),
  country: z.string(),
  city: z.string(),
  postCode: z.number(),
  street: z.string(),
  district: z.string(),
});
