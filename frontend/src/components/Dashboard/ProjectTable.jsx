const ProjectTable = ({ projects }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Recent Projects
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Overview of your latest construction projects
          </p>
        </div>

        <button className="text-sm font-semibold text-orange-500 hover:text-orange-600">
          View All
        </button>

      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-x-auto md:block">

        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-500">
              <th className="px-6 py-4 font-semibold">
                Project
              </th>

              <th className="px-6 py-4 font-semibold">
                Client
              </th>

              <th className="px-6 py-4 font-semibold">
                Status
              </th>

              <th className="px-6 py-4 font-semibold">
                Progress
              </th>

              <th className="px-6 py-4 font-semibold">
                Deadline
              </th>
            </tr>
          </thead>

          <tbody>

            {projects.map((project) => (
              <tr
                key={project.id}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
              >

                <td className="px-6 py-5">
                  <p className="font-semibold text-slate-900">
                    {project.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {project.type}
                  </p>
                </td>

                <td className="px-6 py-5 text-sm text-slate-600">
                  {project.client}
                </td>

                <td className="px-6 py-5">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      project.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : project.status === "Planning"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {project.status}
                  </span>

                </td>

                <td className="px-6 py-5">

                  <div className="flex items-center gap-3">

                    <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-orange-500"
                        style={{
                          width: `${project.progress}%`,
                        }}
                      />
                    </div>

                    <span className="text-xs font-semibold text-slate-600">
                      {project.progress}%
                    </span>

                  </div>

                </td>

                <td className="px-6 py-5 text-sm text-slate-600">
                  {project.deadline}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}
      <div className="divide-y divide-slate-100 md:hidden">

        {projects.map((project) => (
          <div
            key={project.id}
            className="p-5"
          >

            <div className="flex items-start justify-between gap-4">

              <div>
                <h3 className="font-semibold text-slate-900">
                  {project.name}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {project.type}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  project.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {project.status}
              </span>

            </div>

            <p className="mt-4 text-sm text-slate-500">
              Client: {project.client}
            </p>

            <div className="mt-4">

              <div className="mb-2 flex justify-between text-xs">
                <span className="text-slate-500">
                  Progress
                </span>

                <span className="font-semibold">
                  {project.progress}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-orange-500"
                  style={{
                    width: `${project.progress}%`,
                  }}
                />
              </div>

            </div>

            <p className="mt-4 text-xs text-slate-500">
              Deadline: {project.deadline}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ProjectTable;