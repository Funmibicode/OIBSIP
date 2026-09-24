import { Link } from 'react-router-dom';
import { MailCheck, RefreshCw, ArrowLeft } from "lucide-react";
import PublicNavbar from "../../components/layout/PublicNavbar";
import PublicFooter from "../../components/layout/PublicFooter";
import Button from "../../components/ui/Button";

const VerifyEmail = () => {
  const handleResend = () => {
    // Backend/API integration will come later.
    console.log("Resend verification email");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <PublicNavbar />

      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm sm:p-9">
            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100">
              <MailCheck
                size={30}
                strokeWidth={2}
                className="text-[#27245B]"
              />
            </div>

            {/* Heading */}
            <div className="mt-6 text-center">
              <h1 className="text-2xl font-extrabold text-[#172033]">
                Check Your Email
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                We've sent a verification link to your email address. Please
                check your inbox and click the link to verify your account.
              </p>
            </div>

            {/* Resend */}
            <div className="mt-7">
              <Button
                type="button"
                variant="dark"
                size="lg"
                className="w-full"
                onClick={handleResend}
              >
                <RefreshCw size={18} className="mr-2" />
                Resend Verification Email
              </Button>
            </div>

            {/* Login */}
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

export default VerifyEmail;