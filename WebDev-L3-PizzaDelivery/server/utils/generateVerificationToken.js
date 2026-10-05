import crypto from "crypto";

const generateVerificationToken = () => {
  const token = crypto.randomBytes(32).toString("hex");

  const hashedToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const expiresAt = new Date(
    Date.now() + 24 * 60 * 60 * 1000
  );

  return {
    token,
    hashedToken,
    expiresAt,
  };
};

export default generateVerificationToken;