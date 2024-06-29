import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { JWTPayload } from "hono/utils/jwt/types";

export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    }

    Variables: {
        userId: string
      }
  }>();
interface User {
  id: string;
  // Add other properties as needed
}


  userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
  
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
    
    
      try {
        const user = await prisma.user.create({
          data: {
            role: body.role,
            email: body.email,
            password: body.password,
            name: body.name,
          },
        })
        const token = await sign(
          { id: user.id,
            name: user.name
          }, c.env.JWT_SECRET)
        return c.json({
          token: token
        })
        
      } catch (e) {
        console.log(e)
        c.status(403);
        return c.json({
          error: "Error while sigining up"
        });
      }
    })
    
  userRouter.post('/signin',async (c) => {
      
    
    try{const body = await c.req.json();
  
      const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL ,
      }).$extends(withAccelerate());
      const user = await prisma.user.findUnique({
        where:{
          email: body.email,
          password: body.password
        }
      })
    
      if(!user){
        c.status(403);
        return c.json({error: "user not found"})
      }
    
      const token = await sign(
        {id: user.id,
        name: user.name
      }, c.env.JWT_SECRET);
      return c.json({ token })}
      catch(e){
        c.status(403)
        return c.json({error: "error while signing in"})
      }
    })