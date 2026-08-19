const ProjectDetails = ({ project, onClose }) => {
  if (!project) {
    return null;
  }

  const formatBudget = (budget) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(budget);
  };

  const getStatusClass = (status) => {
    if (status === "Active") {
      return "bg-green-100 text-green-700";
    }

    if (status === "Completed") {
      return "bg-blue-100 text-blue-700";
    }

    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4 py-6 backdrop-blur-sm">

      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Project Details
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              {project.projectName}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-500 transition hover:bg-slate-200"
          >
            ✕
          </button>

        </div>

        {/* Content */}
        <div className="p-6">

          {/* Status + Progress */}
          <div className="grid gap-5 md:grid-cols-2">

            <div className="rounded-xl bg-slate-50 p-5">

              <p className="text-sm text-slate-500">
                Project Status
              </p>

              <span
                className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                  project.status
                )}`}
              >
                {project.status}
              </span>

            </div>

            <div className="rounded-xl bg-slate-50 p-5">

              <div className="flex items-center justify-between">

                <p className="text-sm text-slate-500">
                  Project Progress
                </p>

                <p className="text-sm font-bold text-slate-900">
                  {project.progress}%
                </p>

              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">

                <div
                  className="h-full rounded-full bg-orange-500"
                  style={{
                    width: `${project.progress}%`,
                  }}
                />

              </div>

            </div>

          </div>

          {/* Project Information */}
          <div className="mt-6">

            <h3 className="text-lg font-bold text-slate-900">
              Project Information
            </h3>

            <div className="mt-4 grid gap-5 sm:grid-cols-2">

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Client
                </p>

                <p className="mt-1 font-medium text-slate-800">
                  {project.client}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Project Type
                </p>

                <p className="mt-1 font-medium text-slate-800">
                  {project.projectType}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Location
                </p>

                <p className="mt-1 font-medium text-slate-800">
                  {project.location}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Budget
                </p>

                <p className="mt-1 font-medium text-slate-800">
                  {formatBudget(project.budget)}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Start Date
                </p>

                <p className="mt-1 font-medium text-slate-800">
                  {project.startDate}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  End Date
                </p>

                <p className="mt-1 font-medium text-slate-800">
                  {project.endDate}
                </p>
              </div>

            </div>

          </div>

          {/* Description */}
          <div className="mt-6">

            <h3 className="text-lg font-bold text-slate-900">
              Description
            </h3>

            <p className="mt-3 rounded-xl bg-slate-50 p-5 text-sm leading-6 text-slate-600">
              {project.description || "No description available."}
            </p>

          </div>

        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 px-6 py-5 text-right">

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProjectDetails;