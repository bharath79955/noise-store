import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
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

    if (!form.email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!form.email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!form.password) {
      toast.error("Please enter your password");
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must contain at least 6 characters");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      toast.success("Login successful!");

      setLoading(false);

      navigate("/");
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
                NOISE STORE
              </p>

              <h1 className="mt-5 text-6xl font-black leading-none">
                MAKE
                <br />
                SOME
                <br />
                <span className="text-gray-500">
                  NOISE.
                </span>
              </h1>

              <p className="mt-7 max-w-md leading-7 text-gray-400 dark:text-gray-600">
                Discover smartwatches, earbuds and audio products
                designed for your everyday lifestyle.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Smart. Bold. Connected.
          </p>
        </div>

        {/* Login Form */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="mb-10 text-center lg:hidden">
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
                WELCOME BACK
              </p>

              <h2 className="mt-3 text-4xl font-black text-black sm:text-5xl dark:text-white">
                Login
              </h2>

              <p className="mt-3 text-gray-500">
                Sign in to continue to NOISE STORE.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

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
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Password
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      toast("Forgot password feature coming soon!")
                    }
                    className="text-sm font-semibold text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    Forgot Password?
                  </button>
                </div>

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
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-12 text-black outline-none transition focus:border-black focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-white"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-black dark:hover:text-white"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-500">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 accent-black"
                />

                Remember me
              </label>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-black py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                {loading ? "Signing In..." : "Login"}
              </button>
            </form>

            {/* Signup */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-bold text-black underline underline-offset-4 dark:text-white"
              >
                Create Account
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

export default Login;