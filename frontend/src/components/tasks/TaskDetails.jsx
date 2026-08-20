const TaskDetails = ({ task, onClose }) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b p-6">

          <div>

            <p className="text-sm font-semibold uppercase text-orange-500">
              Task Details
            </p>

            <h2 className="mt-1 text-2xl font-bold">
              {task.title}
            </h2>

          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-slate-100 px-3 py-2"
          >
            ✕
          </button>

        </div>

        <div className="space-y-6 p-6">

          <div className="grid gap-5 sm:grid-cols-2">

            <div>
              <p className="text-xs uppercase text-slate-400">
                Project
              </p>

              <p className="mt-1 font-semibold">
                {task.project}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-slate-400">
                Assigned To
              </p>

              <p className="mt-1 font-semibold">
                {task.assignedTo}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-slate-400">
                Priority
              </p>

              <p className="mt-1 font-semibold">
                {task.priority}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-slate-400">
                Status
              </p>

              <p className="mt-1 font-semibold">
                {task.status}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-slate-400">
                Due Date
              </p>

              <p className="mt-1 font-semibold">
                {task.dueDate || "—"}
              </p>
            </div>

          </div>

          <div>

            <p className="text-xs uppercase text-slate-400">
              Description
            </p>

            <p className="mt-2 rounded-xl bg-slate-50 p-5 text-sm leading-6 text-slate-600">
              {task.description || "No description available."}
            </p>

          </div>

        </div>

        <div className="border-t p-5 text-right">

          <button
            onClick={onClose}
            className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
};

export default TaskDetails;