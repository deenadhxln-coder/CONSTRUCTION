const services = [
  {
    number: "01",
    title: "Residential Construction",
    description:
      "From individual homes to large residential communities, we deliver quality construction with careful attention to every detail.",
  },
  {
    number: "02",
    title: "Commercial Construction",
    description:
      "Modern commercial spaces designed and constructed with efficient planning, quality materials, and professional execution.",
  },
  {
    number: "03",
    title: "Project Management",
    description:
      "Complete project coordination covering planning, scheduling, resources, budgets, contractors, and site operations.",
  },
  {
    number: "04",
    title: "Renovation & Remodeling",
    description:
      "Transform existing spaces with professional renovation, remodeling, structural improvements, and modern design.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
            Our Services
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Complete construction solutions
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We combine experienced teams, modern technology, and reliable
            project management to deliver construction projects successfully.
          </p>
        </div>

        {/* Services */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-bold text-orange-500">
                  {service.number}
                </span>

                <span className="text-2xl text-slate-300 transition group-hover:text-orange-500">
                  →
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;