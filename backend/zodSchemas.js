const z = require("zod");

const userSchema = z.object({
  username: z.string().min(3).max(30),

  password: z
    .string()
    .min(8)
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),

  firstName: z.string().max(50),
  lastName: z.string().max(50),
  upiId: z.string().max(50),
  mobNo: z
    .string()
    .max(10)
    .trim()
    .regex(/^\d{10}$/),
  email: z.string().max(50).email(),
});

module.exports = userSchema;
