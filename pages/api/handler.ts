// api/index.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse)  {
  const nodeVar = process.env.NODE_VAR || "no value"
  console.log({nodeVar})
  res.status(200).send(`Hello Vercel!! ${nodeVar}`);
}