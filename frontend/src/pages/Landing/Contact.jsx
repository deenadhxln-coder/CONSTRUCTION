const Contact = () => {
  return (
    <section id="contact" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-2">

          {/* Contact information */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
              Contact Us
            </p>

            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Let's build something great together.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Have a construction project in mind? Tell us about it and
              our team will get back to you.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <p className="mt-1 font-medium">
                  projects@constructpro.com
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Phone</p>
                <p className="mt-1 font-medium">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Office</p>
                <p className="mt-1 font-medium">
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="rounded-2xl bg-white p-8 text-slate-900 shadow-xl">
            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <label className="text-sm font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium">
                  Phone
                </label>

                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium">
                  Project Details
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="mt-2 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600"
            >
              Send Project Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;