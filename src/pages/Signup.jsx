import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.error("Please enter your full name");
      return;
    }

    if (form.name.trim().length < 3) {
      toast.error("Name must contain at least 3 characters");
      return;
    }

    if (!form.email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!form.email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!form.password) {
      toast.error("Please enter a password");
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must contain at least 6 characters");
      return;
    }

    if (!form.confirmPassword) {
      toast.error("Please confirm your password");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      toast.success("Account created successfully!");

      setLoading(false);

      navigate("/login");
    }, 1000);
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50 px-5 py-12 dark:bg-gray-950">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-xl dark:bg-gray-900 lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden bg-black p-12 text-white lg:flex lg:flex-col lg:justify-between dark:bg-white dark:text-black">
          <div>
            <button
              onClick={() => navigate("/")}
              className="text-3xl font-black tracking-tight"
            >
              NOISE
            </button>

            <div className="mt-24">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">
                JOIN NOISE STORE
              </p>

              <h1 className="mt-5 text-6xl font-black leading-none">
                JOIN
                <br />
                THE
                <br />
                <span className="text-gray-500">
                  NOISE.
                </span>
              </h1>

              <p className="mt-7 max-w-md leading-7 text-gray-400 dark:text-gray-600">
                Create your account and discover smartwatches, earbuds
                and audio products designed for your everyday lifestyle.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Smart. Bold. Connected.
          </p>
        </div>

        {/* Signup Form */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="mb-8 text-center lg:hidden">
              <button
                onClick={() => navigate("/")}
                className="text-3xl font-black text-black dark:text-white"
              >
                NOISE
              </button>
            </div>

            {/* Header */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
                GET STARTED
              </p>

              <h2 className="mt-3 text-4xl font-black text-black sm:text-5xl dark:text-white">
                Create Account
              </h2>

              <p className="mt-3 text-gray-500">
                Join NOISE STORE and start exploring.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-5 text-black outline-none transition focus:border-black focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-white"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-5 text-black outline-none transition focus:border-black focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-white"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-12 text-black outline-none transition focus:border-black focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-white"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black dark:hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Confirm Password
                </label>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-12 text-black outline-none transition focus:border-black focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-white"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black dark:hover:text-white"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-500">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-black"
                />

                <span>
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={() =>
                      toast("Terms & Conditions feature coming soon!")
                    }
                    className="font-semibold text-black underline dark:text-white"
                  >
                    Terms & Conditions
                  </button>
                </span>
              </label>

              {/* Signup Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-black py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            {/* Login */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-black underline underline-offset-4 dark:text-white"
              >
                Login
              </Link>
            </p>

            {/* Back Home */}
            <button
              onClick={() => navigate("/")}
              className="mt-6 block w-full text-center text-sm font-semibold text-gray-500 transition hover:text-black dark:hover:text-white"
            >
              ← Back to Home
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;