import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from "../ui/Input";
import Button from "../ui/Button";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    console.log("Forgot password email:", email);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        label="Email Address"
        name="email"
        type="email"
        placeholder="Enter your registered email"
        value={email}
        onChange={handleChange}
        error={error}
        required
      />

      <Button type="submit" size="lg" className="w-full">
        Send Reset Link
      </Button>

      <p className="text-center text-sm text-slate-500">
        Remember your password?{" "}
        <Link
          to="/login"
          className="font-semibold text-[#27245B] hover:underline"
        >
          Back to Login
        </Link>
      </p>
    </form>
  );
};

export default ForgotPasswordForm;