import { useState } from "react";
import toast from "react-hot-toast";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
      toast.error("Please enter your name");
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

    if (!form.subject.trim()) {
      toast.error("Please enter a subject");
      return;
    }

    if (!form.message.trim()) {
      toast.error("Please enter your message");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setLoading(false);
    }, 1000);
  };

  return (
    <section className="min-h-screen bg-gray-50 px-5 py-12 dark:bg-gray-950 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
            GET IN TOUCH
          </p>

          <h1 className="mt-3 text-5xl font-black tracking-tight text-black sm:text-6xl dark:text-white">
            Contact Us
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg dark:text-gray-400">
            Have a question about our products or your order?
            Send us a message and our team will get back to you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">

          {/* Contact Information */}
          <div className="space-y-5">

            {/* Email */}
            <div className="rounded-3xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                  <Mail size={21} />
                </div>

                <div>
                  <h2 className="font-bold text-black dark:text-white">
                    Email
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    support@noisestore.com
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="rounded-3xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                  <Phone size={21} />
                </div>

                <div>
                  <h2 className="font-bold text-black dark:text-white">
                    Phone
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    +91 1800 123 4567
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-3xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                  <MapPin size={21} />
                </div>

                <div>
                  <h2 className="font-bold text-black dark:text-white">
                    Location
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Bengaluru, Karnataka
                    <br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="rounded-3xl bg-black p-6 text-white shadow-sm dark:bg-gray-900">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-black">
                  <Clock size={21} />
                </div>

                <div>
                  <h2 className="font-bold">
                    Working Hours
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8 lg:p-10 dark:bg-gray-900"
            >
              <h2 className="text-2xl font-black text-black sm:text-3xl dark:text-white">
                Send us a message
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Fill out the form below and we'll get back to you.
              </p>

              {/* Name + Email */}
              <div className="mt-8 grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-black outline-none transition focus:border-black focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-white dark:focus:bg-gray-800"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-black outline-none transition focus:border-black focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-white dark:focus:bg-gray-800"
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is your message about?"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-black outline-none transition focus:border-black focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-white dark:focus:bg-gray-800"
                />
              </div>

              {/* Message */}
              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-black outline-none transition focus:border-black focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-white dark:focus:bg-gray-800"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-black px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-gray-200 sm:w-auto"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 rounded-[2rem] bg-gray-100 p-8 text-center dark:bg-gray-900">
          <h2 className="text-2xl font-black text-black dark:text-white">
            We're here to help.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500">
            Whether you need product information, order assistance or
            general support, feel free to contact the NOISE STORE team.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;