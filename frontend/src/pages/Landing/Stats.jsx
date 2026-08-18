const stats = [
  {
    value: "250+",
    label: "Projects Completed",
  },
  {
    value: "15+",
    label: "Years Experience",
  },
  {
    value: "120+",
    label: "Team Members",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
];

const Stats = () => {
  return (
    <section className="border-y border-slate-200 bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 sm:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-bold text-slate-900 sm:text-5xl">
              {stat.value}
            </p>

            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;