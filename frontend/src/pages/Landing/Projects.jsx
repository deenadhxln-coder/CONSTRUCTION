const projects = [
  {
    title: "Skyline Residences",
    category: "Residential",
    location: "Chennai, India",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Metro Business Center",
    category: "Commercial",
    location: "Bangalore, India",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Green Valley Villa",
    category: "Residential",
    location: "Coimbatore, India",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
              Our Projects
            </p>

            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Work we're proud of
            </h2>
          </div>

          <p className="max-w-md text-slate-400">
            A selection of projects where planning, engineering, and
            craftsmanship come together.
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl bg-slate-900"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {project.location}
                </p>

                <button className="mt-6 font-semibold text-orange-400 transition hover:text-orange-300">
                  View Project →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;