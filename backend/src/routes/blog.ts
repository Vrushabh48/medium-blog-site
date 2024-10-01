import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";
import {createPostInput, updatePostInput} from '@vrushabhpatil48/inputvalidation'

export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string
	}
  Variables : {
		userId: string
	}
}>();

blogRouter.use(async (c, next) => {
    const jwt = c.req.header('Authorization');
	if (!jwt) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	const token = jwt.split(' ')[1];
	const payload = await verify(token, c.env.JWT_SECRET);
	if (!payload) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	c.set('userId', String(payload.id));
	await next()
});

blogRouter.post('/',async (c) => {
    const userId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body =await c.req.json();
    const {success} = createPostInput.safeParse(body);
    if(!success){
        c.status(404);
        return c.text("Input Validation Failed!");
    }
    const blog = await prisma.post.create({
        data: {
            title: body.title,
            authorId: userId,
            content: body.content,
            category: body.category
        }
    });
    return c.json({
        id: blog.id
    })
  })
  
  blogRouter.put('/',async (c) => {
    const userId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const {success} = updatePostInput.safeParse(body);
    if(!success){
        c.status(403);
        return c.text('Input validation failed!')
    }
    const blog = await prisma.post.update({
        where:{
            id: body.id,
            authorId: userId
        },
        data:{
            title: body.title,
            content: body.content
        }
    });
    return c.json('Updated the Blog.');
  })
  
  blogRouter.get('/:id',async (c) => {
    const id = c.req.param('id');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const post = await prisma.post.findUnique({
        where: {
            id
        }
    }) 
    return c.json(post);
  })
  
  blogRouter.get('/api/v1/blog/bulk',async (c) => {
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const posts = await prisma.post.findMany({});

	return c.json(posts);
})

  