const About = () => {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-8">

        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85"
            alt="Construction planning"
            className="h-[520px] w-full rounded-3xl object-cover"
          />

          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-orange-500 p-7 text-white shadow-xl sm:block">
            <p className="text-4xl font-bold">15+</p>
            <p className="mt-1 text-sm">
              Years of Excellence
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
            About Us
          </p>

          <h2 className="mt-3 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Building trust through quality construction.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our construction team brings together experienced professionals,
            engineers, project managers, and skilled workers to deliver
            reliable projects from concept to completion.
          </p>

          <p className="mt-5 leading-7 text-slate-600">
            We focus on transparent communication, responsible project
            management, safety, quality materials, and on-time execution.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Experienced project management",
              "Quality-focused construction",
              "Transparent communication",
              "Safety-first work culture",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
                  ✓
                </span>

                <span className="font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-9 inline-block rounded-lg bg-slate-900 px-6 py-3.5 font-semibold text-white transition hover:bg-slate-800"
          >
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;