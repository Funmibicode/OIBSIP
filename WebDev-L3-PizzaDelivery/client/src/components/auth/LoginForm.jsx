import React, { useState } from 'react';
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import Input from "../ui/Input";
import Button from "../ui/Button";
import authService from "../../services/authService";
import useAuth from "../../hooks/useAuth";

const LoginForm = ({ isAdmin = false }) => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setServerError("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setServerError("");

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsLoading(true);

      const response = await authService.login(formData);

      login(response.user, response.token);

      navigate(isAdmin ? "/admin/dashboard" : "/dashboard");
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Login failed. Please check your credentials.";

      setServerError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {serverError && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {serverError}
        </div>
      )}

      <Input
        label="Email Address"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />

      <div className="relative">
        <Input
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          required
        />

        <button
          type="button"
          onClick={() => setShowPassword((previous) => !previous)}
          className="absolute right-3 top-[38px] flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-[#27245B]"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className="flex items-center gap-2 text-sm text-slate-500">
          <input
            type="checkbox"
            name="rememberMe"
            className="h-4 w-4 rounded border-slate-300 text-[#27245B] focus:ring-[#27245B]"
          />

          <span>Remember me</span>
        </label>

        <Link
          to="/forgot-password"
          className="text-sm font-semibold text-[#27245B] hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </Button>

      {!isAdmin && (
        <p className="text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-[#27245B] hover:underline"
          >
            Create account
          </Link>
        </p>
      )}
    </form>
  );
};

export default LoginForm;