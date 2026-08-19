const Stats = () => {
  const stats = [
    {
      value: "15+",
      label: "Years Experience",
    },
    {
      value: "250+",
      label: "Projects Completed",
    },
    {
      value: "120+",
      label: "Professional Team",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section className="bg-orange-500 px-6 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 lg:grid-cols-4">

        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center"
          >
            <h3 className="text-4xl font-black text-white sm:text-5xl">
              {stat.value}
            </h3>

            <p className="mt-2 text-sm font-medium text-orange-100 sm:text-base">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats;