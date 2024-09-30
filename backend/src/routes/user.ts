import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign,verify } from "hono/jwt";
import {signinInput, signupInput } from '@vrushabhpatil48/common-app'

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string
	}
  Variables : {
		userId: string
	}
}>();

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
    email: body.email
  }
});

if (!user) {
  c.status(403);
  return c.json({ error: "user not found" });
}

const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
return c.json({ jwt });
})