import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { userRouter } from './routes/userRouter'

const app = new Hono()

app.use('/api/*', cors())
app.route("/api/v1/user", userRouter)
export default app
