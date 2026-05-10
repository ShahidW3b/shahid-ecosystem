import { Resend } from "resend";

const resend = new Resend("re_X4bZm3UB_M6u2LVKG8AiiaxGfC1kKdH8J");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, company, message } = req.body;

    await resend.emails.send({
      from: "ShahidW3b <contact@shahidw3b.com>",
      to: "shahabshahid000@gmail.com",
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family:Arial;padding:30px;background:#0b1220;color:white;">
          
          <div style="text-align:center;margin-bottom:30px;">
            <img 
              src="https://shahidw3b.com/logo/logo.png" 
              width="90"
              alt="ShahidW3b Logo"
            />
            <h1 style="margin-top:15px;">ShahidW3b</h1>
          </div>

          <div style="background:#111827;padding:25px;border-radius:14px;">
            <h2>New Website Inquiry</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>

            <div style="margin-top:20px;">
              <strong>Message:</strong>
              <p style="line-height:1.7;">${message}</p>
            </div>
          </div>

          <div style="margin-top:30px;text-align:center;color:#94a3b8;font-size:14px;">
            © ShahidW3b — Systems. Intelligence. Research.
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
