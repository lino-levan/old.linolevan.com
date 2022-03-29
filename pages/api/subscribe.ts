import { NextApiRequest, NextApiResponse } from "next/types";

// yoinked from: https://github.com/Ihatetomatoes/nextjs-101-convertkit/blob/master/src/pages/api/subscribe.js
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  try {
    const FORM_ID = process.env.CONVERTKIT_FORM_ID;
    const API_KEY = process.env.CONVERTKIT_API_KEY;
    const API_URL = process.env.CONVERTKIT_API_URL;

    //what do we want to send to CK?
    const data = { email, api_key: API_KEY };

    // ship it :)
    const response = await fetch(`${API_URL}forms/${FORM_ID}/subscribe`, {
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    // return any error from CK
    if (response.status >= 400) {
      return res
        .status(400)
        .json({ error: "There was an error subscribing to the list." });
    }

    // happy days
    return res.status(201).json({ error: "" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};