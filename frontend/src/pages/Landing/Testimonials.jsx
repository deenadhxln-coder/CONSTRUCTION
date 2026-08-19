const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Residential Client",
      message:
        "The team handled our home construction professionally from planning to completion. Communication and workmanship were excellent.",
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      message:
        "Our office project was completed on schedule with excellent attention to quality and detail. Highly professional team.",
    },
    {
      name: "Arun Prakash",
      role: "Property Developer",
      message:
        "Their project management and construction quality made the entire process smooth and reliable.",
    },
  ];

  return (
    <section className="bg-slate-100 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-500">
            Client Reviews
          </p>

          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            What Our Clients
            <span className="block text-orange-500">
              Say About Us
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We believe successful construction projects are built on trust,
            communication, and quality.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex gap-1 text-orange-500">
                ★ ★ ★ ★ ★
              </div>

              {/* Message */}
              <p className="mt-6 leading-7 text-slate-600">
                "{testimonial.message}"
              </p>

              {/* Client */}
              <div className="mt-8 border-t border-slate-200 pt-5">
                <h3 className="font-bold text-slate-900">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;