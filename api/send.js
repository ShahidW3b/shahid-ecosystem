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
  <div style="margin:0;padding:0;background:#07142b;font-family:Arial,sans-serif;color:#e5edf7;">
    <div style="max-width:720px;margin:0 auto;background:#0b1220;">

      <!-- Logo Bar -->
      <div style="background:#101827;text-align:center;padding:28px 20px;">
        <img 
          src="https://shahidw3b.com/logo/logo.png" 
          width="90" 
          alt="ShahidW3b Logo"
          style="display:block;margin:0 auto;"
        />
      </div>

      <!-- Hero Banner -->
      <div style="background:linear-gradient(135deg,#0f2a4d,#07142b);padding:46px 36px;border-top:1px solid rgba(56,189,248,0.25);border-bottom:1px solid rgba(56,189,248,0.25);">
        <h1 style="margin:0;color:#38bdf8;font-size:38px;line-height:1.1;font-style:italic;font-weight:800;">
          Your inquiry has been received
        </h1>
      </div>

      <!-- Main Message -->
      <div style="padding:42px 36px;">
        <h2 style="margin:0 0 22px;color:#dff6ff;font-size:28px;line-height:1.25;">
          You’re almost there, ${name}!
        </h2>

        <p style="font-size:16px;line-height:1.7;color:#e5edf7;margin:0 0 18px;">
          Thank you for contacting <strong style="color:#38bdf8;">ShahidW3b</strong>. 
          We have received your inquiry successfully.
        </p>

        <p style="font-size:16px;line-height:1.7;color:#cbd5e1;margin:0 0 28px;">
          Your message will be reviewed carefully, and we will get back to you as soon as possible.
        </p>

        <!-- Button -->
        <a 
          href="https://shahidw3b.com" 
          style="display:inline-block;background:#38bdf8;color:#07142b;text-decoration:none;font-weight:bold;padding:12px 22px;border-radius:999px;font-size:14px;"
        >
          Visit ShahidW3b
        </a>

        <p style="margin:26px 0 0;color:#94a3b8;font-size:14px;line-height:1.7;">
          This is an automated confirmation email. No further action is required.
        </p>
      </div>

   <!-- Footer -->
<div style="background:#101827;padding:28px 36px;border-top:1px solid rgba(148,163,184,0.18);">
  
  <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
    <tr>

      <!-- Left Side -->
      <td align="left" style="vertical-align:middle;">
        <a href="https://shahidw3b.com" style="text-decoration:none;">
          <img 
            src="https://shahidw3b.com/logo/logo.png" 
            width="52"
            alt="ShahidW3b Logo"
            style="display:block;margin-bottom:10px;"
          />
        </a>

        <div style="color:#94a3b8;font-size:13px;line-height:1.6;">
          Systems. Intelligence. Research.
        </div>
      </td>

      <!-- Right Side -->
      <td align="right" style="vertical-align:middle;">
        <a href="https://axonyra.vercel.app/#home" style="text-decoration:none;">
          <img 
            src="https://axonyra.com/logo/logo.png"
            width="58"
            alt="Axonyra Logo"
            style="display:block;margin-left:auto;margin-bottom:10px;"
          />
        </a>

        <div style="color:#94a3b8;font-size:13px;line-height:1.6;text-align:right;">
          AI Research & Cybersecurity
        </div>
      </td>

    </tr>
  </table>
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
