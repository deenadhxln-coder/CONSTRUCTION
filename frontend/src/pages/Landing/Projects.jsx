const Projects = () => {
  const projects = [
    {
      title: "Modern Villa",
      category: "Residential",
      location: "Madurai, Tamil Nadu",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "Corporate Office",
      category: "Commercial",
      location: "Chennai, Tamil Nadu",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    },
    {
      title: "Industrial Complex",
      category: "Industrial",
      location: "Coimbatore, Tamil Nadu",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-500">
              Our Work
            </p>

            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Projects That
              <span className="block text-orange-500">
                Speak For Us
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Explore some of our completed construction projects and
              discover the quality, planning, and craftsmanship behind
              every build.
            </p>
          </div>

          <button className="w-fit rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-orange-500 hover:bg-orange-500">
            View All Projects
          </button>

        </div>

        {/* Project Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl bg-slate-900"
            >

              {/* Image */}
              <div className="relative h-72 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <div className="absolute left-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white">
                  {project.category}
                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {project.location}
                </p>

                <button className="mt-6 text-sm font-semibold text-orange-500 transition hover:text-orange-400">
                  View Project →
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;