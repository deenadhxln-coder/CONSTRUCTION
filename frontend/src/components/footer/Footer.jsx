const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* Company */}
        <div className="lg:col-span-2">
          <a
            href="#home"
            className="text-2xl font-black tracking-tight"
          >
            Construct
            <span className="text-orange-400">Pro</span>
          </a>

          <p className="mt-5 max-w-md leading-7 text-slate-400">
            Building quality spaces with professional construction
            management, experienced teams, and reliable project execution.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-block rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Start a Project
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3">
            <li>
              <a
                href="#home"
                className="text-sm text-slate-400 transition hover:text-orange-400"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="text-sm text-slate-400 transition hover:text-orange-400"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="text-sm text-slate-400 transition hover:text-orange-400"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="text-sm text-slate-400 transition hover:text-orange-400"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-sm text-slate-400 transition hover:text-orange-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white">
            Contact
          </h3>

          <div className="mt-5 space-y-4 text-sm text-slate-400">
            <p>
              Chennai, Tamil Nadu,
              <br />
              India
            </p>

            <p>
              +91 98765 43210
            </p>

            <p>
              projects@constructpro.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-6 sm:flex-row sm:items-center lg:px-8">

          <p className="text-sm text-slate-500">
            © {currentYear} ConstructPro. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#home"
              className="text-sm text-slate-500 transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#home"
              className="text-sm text-slate-500 transition hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;