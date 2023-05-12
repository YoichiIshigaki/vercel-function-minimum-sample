// api/index.ts
import { NowRequest, NowResponse } from "@now/node";

export default (req: NowRequest, res: NowResponse) => {
  const nodeVar = process.env.NODE_VAR || "no value"
  console.log({nodeVar})
  res.status(200).send(`Hello Vercel!! ${nodeVar}`);
}