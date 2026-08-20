const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-slate-950">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32">

        {/* Left Content */}
        <div className="w-full lg:w-1/2">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-orange-500">
            Building Excellence Since 2010
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Building Your
            <span className="block text-orange-500">
              Vision Into Reality
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            We deliver reliable construction solutions for residential,
            commercial, and industrial projects with quality, safety, and
            professionalism.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-orange-600"
            >
              Start a Project
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg border border-slate-600 bg-transparent px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              View Projects
            </a>

          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-10">

            <div>
              <h3 className="text-2xl font-bold text-white">
                15+
              </h3>

              <p className="text-sm text-slate-400">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">
                250+
              </h3>

              <p className="text-sm text-slate-400">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">
                98%
              </h3>

              <p className="text-sm text-slate-400">
                Client Satisfaction
              </p>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="hidden w-full lg:block lg:w-1/2">
          <div className="ml-10 overflow-hidden rounded-2xl shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
              alt="Construction project"
              className="h-[600px] w-full object-cover"
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;