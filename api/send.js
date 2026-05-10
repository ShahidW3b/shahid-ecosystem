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

    await resend.emails.send({
      from: "ShahidW3b <contact@shahidw3b.com>",
      to: [email],
      subject: "We received your inquiry | ShahidW3b",
      html: `
    <div style="font-family:Arial,sans-serif;background:#07142b;padding:40px;color:white;">
      <div style="max-width:620px;margin:auto;background:#0f1e38;padding:36px;border-radius:20px;">
        
        <div style="text-align:center;margin-bottom:28px;">
          <img 
            src="https://shahidw3b.com/logo/logo.png" 
            width="95"
            alt="ShahidW3b Logo"
          />
          <h1 style="margin:18px 0 0;">Thank you for contacting ShahidW3b</h1>
        </div>

        <p style="line-height:1.7;">
          Hi ${name},
        </p>

        <p style="line-height:1.7;">
          We have received your inquiry successfully. Thank you for reaching out to ShahidW3b.
        </p>

        <p style="line-height:1.7;">
          Your message will be reviewed carefully, and we will get back to you as soon as possible.
        </p>

        <div style="margin-top:28px;padding:20px;background:#12284d;border-radius:14px;">
          <strong>Your submitted message:</strong>
          <p style="line-height:1.7;">${message}</p>
        </div>

        <div style="margin-top:34px;text-align:center;color:#94a3b8;font-size:14px;line-height:1.7;">
          ShahidW3b<br />
          Systems. Intelligence. Research.<br />
          <a href="https://shahidw3b.com" style="color:#38bdf8;">shahidw3b.com</a>
        </div>
      </div>
    </div>
  `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
