import crypto from "crypto";

const generatePasswordResetToken = () => {
  const token = crypto.randomBytes(32).toString("hex");

  const hashedToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const expiresAt = new Date(
    Date.now() + 60 * 60 * 1000
  );

  return {
    token,
    hashedToken,
    expiresAt,
  };
};

export default generatePasswordResetToken;