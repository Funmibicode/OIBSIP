import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, Send } from "lucide-react";
import PublicNavbar from "../../components/layout/PublicNavbar";
import PublicFooter from "../../components/layout/PublicFooter";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

const ForgotPassword = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Backend/API integration will be added later.
    console.log("Password reset request submitted");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <PublicNavbar />

      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm sm:p-9">
            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100">
              <Mail
                size={30}
                strokeWidth={2}
                className="text-[#27245B]"
              />
            </div>

            {/* Heading */}
            <div className="mt-6 text-center">
              <h1 className="text-2xl font-extrabold text-[#172033]">
                Forgot Your Password?
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Enter the email address associated with your account and we'll
                send you a link to reset your password.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />

              <Button
                type="submit"
                variant="dark"
                size="lg"
                className="w-full"
              >
                <Send size={18} className="mr-2" />
                Send Reset Link
              </Button>
            </form>

            {/* Back to login */}
            <div className="mt-6 text-center">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#27245B] hover:underline"
              >
                <ArrowLeft size={16} />
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default ForgotPassword;