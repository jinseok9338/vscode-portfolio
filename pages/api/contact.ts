import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
// this method won't work through gmail.. I should use another way or scrap this altogether
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  res.json({
    message:
      "currently working on email service I am sorry for the inconvenience",
  });
}
