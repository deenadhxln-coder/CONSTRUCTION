const Contact = () => {
  return (
    <section id="contact" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-500">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Let's Build Your
            <span className="block text-orange-500">
              Next Project
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Tell us about your construction requirements and our team will
            get in touch with you.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl bg-slate-950 p-8 text-white">

            <h3 className="text-2xl font-bold">
              Contact Information
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Have a project in mind? Reach out to our team and let's discuss
              how we can bring your construction vision to life.
            </p>

            <div className="mt-10 space-y-6">

              <div>
                <p className="text-sm font-semibold text-orange-500">
                  Location
                </p>
                <p className="mt-1 text-slate-300">
                  Madurai, Tamil Nadu, India
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-orange-500">
                  Phone
                </p>
                <p className="mt-1 text-slate-300">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-orange-500">
                  Email
                </p>
                <p className="mt-1 text-slate-300">
                  projects@constructpro.com
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <form className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
                />
              </div>

            </div>

            <div className="mt-6">
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="service"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Project Type
              </label>

              <select
                id="service"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500"
              >
                <option value="">Select project type</option>
                <option value="residential">
                  Residential Construction
                </option>
                <option value="commercial">
                  Commercial Construction
                </option>
                <option value="industrial">
                  Industrial Construction
                </option>
                <option value="renovation">
                  Renovation & Remodeling
                </option>
              </select>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Project Details
              </label>

              <textarea
                id="message"
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Send Project Request
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;