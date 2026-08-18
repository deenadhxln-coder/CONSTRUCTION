const testimonials = [
  {
    name: "Arun Kumar",
    role: "Property Developer",
    message:
      "The team handled our project professionally from planning through completion. Communication and execution were excellent.",
  },
  {
    name: "Priya Sharma",
    role: "Business Owner",
    message:
      "We appreciated the transparency throughout the construction process. The project was well managed and delivered with great quality.",
  },
  {
    name: "Rahul Mehta",
    role: "Real Estate Investor",
    message:
      "Their project management made the entire construction process much easier for us. Highly professional team.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
            Testimonials
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
            What our clients say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-slate-200 p-8"
            >
              <div className="text-2xl text-orange-500">
                ★★★★★
              </div>

              <p className="mt-6 leading-7 text-slate-600">
                "{testimonial.message}"
              </p>

              <div className="mt-8 border-t border-slate-200 pt-5">
                <p className="font-bold text-slate-900">
                  {testimonial.name}
                </p>

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