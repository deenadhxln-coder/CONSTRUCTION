const Services = () => {
  const services = [
    {
      number: "01",
      title: "Residential Construction",
      description:
        "We build modern, comfortable, and durable homes designed around your lifestyle and requirements.",
    },
    {
      number: "02",
      title: "Commercial Construction",
      description:
        "Professional construction solutions for offices, retail spaces, and other commercial properties.",
    },
    {
      number: "03",
      title: "Industrial Construction",
      description:
        "Reliable construction services for industrial facilities with a strong focus on safety and efficiency.",
    },
    {
      number: "04",
      title: "Renovation & Remodeling",
      description:
        "Transform existing spaces with high-quality renovation and remodeling solutions tailored to your needs.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-500">
            What We Do
          </p>

          <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Construction Services
            <span className="block text-orange-500">
              Built Around You
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            From new construction to complete renovations, we provide
            professional solutions that turn your ideas into quality spaces.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-orange-500">
                  {service.number}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                  →
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-8 text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {service.description}
              </p>

              {/* Bottom line */}
              <div className="mt-7 h-1 w-10 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;