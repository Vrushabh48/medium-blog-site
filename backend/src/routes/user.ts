import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign,verify } from "hono/jwt";
import {signinInput, signupInput } from '@vrushabhpatil48/inputvalidation'
import { cors } from "hono/cors";

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string
	}
  Variables : {
		userId: string
	}
}>();

userRouter.use(cors({
  origin: '*', // Allows all origins, you can specify a specific origin if needed
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));


userRouter.post('/signup',async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
  const body =await c.req.json();
  const { success } = signupInput.safeParse(body);
  if(!success){
	c.status(403);
	return c.text('Input Validation Failed');
  }
  try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
        name: body.name,
        info: body.info,
				password: body.password
			}
		});

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ jwt });
	} catch(e) {
		c.status(403);
    return c.json("Error during Signup");
	}
});

userRouter.post('/signin',async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());

const body = await c.req.json();
const { success } = signinInput.safeParse(body);
  if(!success){
	c.status(403);
	return c.text('Input Validation Failed');
  }
const user = await prisma.user.findUnique({
  where: {
    email: body.email,
    password: body.password
  }
});

if (!user) {
  c.status(403);
  return c.json({ error: "user not found" });
}

const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
return c.json({ jwt });
})