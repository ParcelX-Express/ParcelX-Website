export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, firstName, lastName } = req.body;

  if (!email || !firstName) {
    return res.status(400).json({ error: 'Email and first name are required' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER;
  const senderName = process.env.BREVO_SENDER_NAME;

  if (!apiKey || !senderEmail || !senderName) {
    console.error('Missing Brevo configuration');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to ParcelX</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: bold; letter-spacing: 1px;">ParcelX</h1>
              <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 14px;">Global Shipping & Delivery Solutions</p>
            </td>
          </tr>
          
          <!-- Welcome Message -->
          <tr>
            <td style="padding: 50px 40px 30px 40px;">
              <h2 style="color: #1e3a5f; margin: 0 0 20px 0; font-size: 28px;">Welcome aboard, ${firstName}! 🎉</h2>
              <p style="color: #4a5568; font-size: 16px; line-height: 1.8; margin: 0 0 25px 0;">
                Thank you for creating your ParcelX account. We're thrilled to have you join our global network of shippers and receivers.
              </p>
              <p style="color: #4a5568; font-size: 16px; line-height: 1.8; margin: 0 0 25px 0;">
                Your account is now active and ready to use. You can start shipping packages worldwide with competitive rates and real-time tracking.
              </p>
            </td>
          </tr>
          
          <!-- Features -->
          <tr>
            <td style="padding: 0 40px 40px 40px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 20px; background-color: #f7fafc; border-radius: 8px; margin-bottom: 15px;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 50px; vertical-align: top;">
                          <div style="width: 40px; height: 40px; background-color: #ed8936; border-radius: 50%; text-align: center; line-height: 40px; font-size: 18px;">📦</div>
                        </td>
                        <td style="vertical-align: top; padding-left: 15px;">
                          <h3 style="color: #1e3a5f; margin: 0 0 5px 0; font-size: 16px;">Ship Anywhere</h3>
                          <p style="color: #718096; margin: 0; font-size: 14px;">Send packages to 220+ countries and territories</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height: 15px;"></td></tr>
                <tr>
                  <td style="padding: 20px; background-color: #f7fafc; border-radius: 8px;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 50px; vertical-align: top;">
                          <div style="width: 40px; height: 40px; background-color: #ed8936; border-radius: 50%; text-align: center; line-height: 40px; font-size: 18px;">🔍</div>
                        </td>
                        <td style="vertical-align: top; padding-left: 15px;">
                          <h3 style="color: #1e3a5f; margin: 0 0 5px 0; font-size: 16px;">Real-Time Tracking</h3>
                          <p style="color: #718096; margin: 0; font-size: 14px;">Track your shipments 24/7 with live updates</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height: 15px;"></td></tr>
                <tr>
                  <td style="padding: 20px; background-color: #f7fafc; border-radius: 8px;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 50px; vertical-align: top;">
                          <div style="width: 40px; height: 40px; background-color: #ed8936; border-radius: 50%; text-align: center; line-height: 40px; font-size: 18px;">💰</div>
                        </td>
                        <td style="vertical-align: top; padding-left: 15px;">
                          <h3 style="color: #1e3a5f; margin: 0 0 5px 0; font-size: 16px;">Competitive Rates</h3>
                          <p style="color: #718096; margin: 0; font-size: 14px;">Get the best shipping rates with no hidden fees</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- CTA Button -->
          <tr>
            <td style="padding: 0 40px 50px 40px; text-align: center;">
              <a href="https://parcelx.com/dashboard" style="display: inline-block; background-color: #ed8936; color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-weight: bold; font-size: 16px;">Start Shipping Now</a>
            </td>
          </tr>
          
          <!-- Account Details -->
          <tr>
            <td style="padding: 30px 40px; background-color: #f7fafc; border-top: 1px solid #e2e8f0;">
              <h3 style="color: #1e3a5f; margin: 0 0 15px 0; font-size: 16px;">Your Account Details</h3>
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="color: #718096; font-size: 14px; padding: 5px 0;">Account Email:</td>
                  <td style="color: #1e3a5f; font-size: 14px; padding: 5px 0; text-align: right; font-weight: 600;">${email}</td>
                </tr>
                <tr>
                  <td style="color: #718096; font-size: 14px; padding: 5px 0;">Account Name:</td>
                  <td style="color: #1e3a5f; font-size: 14px; padding: 5px 0; text-align: right; font-weight: 600;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="color: #718096; font-size: 14px; padding: 5px 0;">Member Since:</td>
                  <td style="color: #1e3a5f; font-size: 14px; padding: 5px 0; text-align: right; font-weight: 600;">${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #1e3a5f; padding: 30px 40px; text-align: center;">
              <p style="color: #a0aec0; font-size: 14px; margin: 0 0 15px 0;">
                Need help? Contact our support team at <a href="mailto:support@parcelx.com" style="color: #ed8936; text-decoration: none;">support@parcelx.com</a>
              </p>
              <p style="color: #718096; font-size: 12px; margin: 0;">
                © ${new Date().getFullYear()} ParcelX. All rights reserved.<br>
                This email was sent to ${email} because you created a ParcelX account.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: senderName,
          email: senderEmail,
        },
        to: [
          {
            email: email,
            name: `${firstName} ${lastName}`,
          },
        ],
        subject: `Welcome to ParcelX, ${firstName}! Your Account is Ready 🚀`,
        htmlContent: emailHtml,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Brevo API error:', data);
      return res.status(response.status).json({ error: data.message || 'Failed to send email' });
    }

    return res.status(200).json({ success: true, messageId: data.messageId });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
