import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if(!req.query?.link)
    return res.status(400).send('No link included in query')

  if(typeof req.query.link !== "string")
    return res.status(400).send('Type of link is wrong')

  res.redirect(req.query.link)
}