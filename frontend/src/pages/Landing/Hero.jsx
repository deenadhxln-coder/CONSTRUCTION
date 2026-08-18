const Hero = () => {
  return (
    <section className="min-h-screen bg-sky-300">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">

        {/* Left Content */}
        <div className="w-full lg:w-1/2">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-orange-600">
            Building Excellence Since 2010
          </p>

          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Building Your
            <span className="block text-orange-600">
              Vision Into Reality
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            We deliver reliable construction solutions for residential,
            commercial, and industrial projects with quality, safety, and
            professionalism.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700">
              Start a Project
            </button>

            <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 transition hover:bg-gray-50">
              View Projects
            </button>

          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-10">

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                15+
              </h3>
              <p className="text-sm text-gray-500">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                250+
              </h3>
              <p className="text-sm text-gray-500">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                98%
              </h3>
              <p className="text-sm text-gray-500">
                Client Satisfaction
              </p>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="hidden w-full lg:block lg:w-1/2">
          <div className="ml-10 overflow-hidden rounded-2xl shadow-xl">

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