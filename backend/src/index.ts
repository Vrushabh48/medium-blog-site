import { Hono } from 'hono'

const app = new Hono()


app.post('/api/v1/user/signup', (c) => {
  return c.text('Signup route');
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('Signin Route');
})

app.post('/api/v1/blog', (c) => {
  return c.text('Post a blog');
})

app.put('/api/v1/blog', (c) => {
  return c.text('Edit a particular blog');
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Blog with particular ID');
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('Get all blogs');
})


export default app
