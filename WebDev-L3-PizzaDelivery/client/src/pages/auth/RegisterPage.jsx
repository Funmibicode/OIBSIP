import PublicNavbar from "../../components/layout/PublicNavbar";
import PublicFooter from "../../components/layout/PublicFooter";
import RegisterForm from "../../components/auth/RegisterForm";

const Register = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <PublicNavbar />

      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">
          {/* Page Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-extrabold text-[#172033]">
              Create Your Account
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Join Pizzy and get your favorite pizza delivered to your door.
            </p>
          </div>

          {/* Registration Form */}
          <RegisterForm />
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default Register;