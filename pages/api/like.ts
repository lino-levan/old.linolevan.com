import { NextApiRequest, NextApiResponse } from "next/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if(!req.query?.id)
    return res.status(400).send('No ID Included in Query')

  if(typeof req.query.id !== "string")
    return res.status(400).send('Type of ID is Wrong')
  
  // TODO: Mongodb something something like the thing

  res.status(200).json({ id: req.query.id })
}