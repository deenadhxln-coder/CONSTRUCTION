const About = () => {
  const features = [
    "Experienced construction professionals",
    "Quality materials and workmanship",
    "Transparent project management",
    "Safety-focused construction process",
  ];

  return (
    <section id="about" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
            alt="Construction workers at a project"
            className="h-[520px] w-full rounded-2xl object-cover shadow-xl"
          />

          <div className="absolute bottom-6 right-6 rounded-xl bg-orange-500 px-6 py-5 text-white shadow-lg">
            <p className="text-3xl font-bold">15+</p>
            <p className="text-sm">Years of Experience</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-500">
            About Our Company
          </p>

          <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            We Build More Than
            <span className="block text-orange-500">
              Just Structures
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We are a professional construction company focused on delivering
            dependable, high-quality spaces for residential, commercial, and
            industrial clients.
          </p>

          <p className="mt-4 leading-7 text-slate-500">
            From initial planning to final completion, our team works closely
            with clients to ensure every project is delivered with quality,
            safety, and attention to detail.
          </p>

          {/* Features */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                  ✓
                </span>

                <p className="text-sm font-medium text-slate-700">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-8 rounded-lg bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-orange-500">
            Learn More About Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;