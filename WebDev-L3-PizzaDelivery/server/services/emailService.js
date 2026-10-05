import "dotenv/config";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendVerificationEmail = async (email, name, token) => {
  const verificationUrl =
    `${process.env.CLIENT_URL}/verify-email?token=${token}`;

  await transporter.sendMail({
    from: `"Pizzy" <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: "Verify your Pizzy account",

    html: `
      <div style="
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 0 auto;
        padding: 30px;
        color: #172033;
      ">
        <h2 style="color: #27245B;">
          Welcome to Pizzy, ${name}! 🍕
        </h2>

        <p>
          Thanks for creating your Pizzy account.
          Please verify your email address to continue.
        </p>

        <div style="margin: 30px 0;">
          <a
            href="${verificationUrl}"
            style="
              display: inline-block;
              padding: 12px 20px;
              background-color: #FACC15;
              color: #172033;
              text-decoration: none;
              border-radius: 8px;
              font-weight: bold;
            "
          >
            Verify Email
          </a>
        </div>

        <p style="font-size: 14px; color: #64748B;">
          This verification link will expire in 24 hours.
        </p>

        <p style="font-size: 13px; color: #94A3B8;">
          If you didn't create a Pizzy account, you can safely ignore this email.
        </p>
      </div>
    `,
  });
};

export const sendPasswordResetEmail = async (
  email,
  name,
  token
) => {
  const resetUrl =
    `${process.env.CLIENT_URL}/reset-password/${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Reset your Pizzy password",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
        <h2>Password Reset</h2>

        <p>Hello ${name},</p>

        <p>
          We received a request to reset your Pizzy password.
        </p>

        <p>
          <a
            href="${resetUrl}"
            style="
              display: inline-block;
              padding: 12px 20px;
              background: #27245B;
              color: white;
              text-decoration: none;
              border-radius: 8px;
            "
          >
            Reset Password
          </a>
        </p>

        <p>
          This link will expire in 1 hour.
        </p>

        <p>
          If you did not request a password reset, you can safely ignore
          this email.
        </p>
      </div>
    `,
  });
};

transporter.verify()
  .then(() => {
    console.log("SMTP connection successful.");
  })
  .catch((error) => {
    console.error("SMTP connection failed:", error.message);
  });

export default transporter;