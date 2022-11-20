import { z, TypeOf } from 'zod';

export const parkSchema = z.object({
  body: z.object({
    id:z.any(),
    name: z.string({ required_error: 'name is required !' }).min(4, 'You name must be more than 4 char'),

      Type : z.enum(["roller coaster ", 'thrill', 'water'] , {required_error:"type is required Choose from  1:roller coaster  2:thril  3:water"}),

      tickets: z.number({ required_error: "tickets is required", invalid_type_error: "tickets must be a number" }),

    pricer: z.number({ required_error: "pricer is required",invalid_type_error: "pricer must be a number" }),

  }),

});

export type parkSchemaType = TypeOf<typeof parkSchema>['body'];