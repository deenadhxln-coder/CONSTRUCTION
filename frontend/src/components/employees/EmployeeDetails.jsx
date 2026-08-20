const EmployeeDetails = ({ employee, onClose }) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b p-6">

          <div>

            <p className="text-sm font-semibold uppercase text-orange-500">
              Employee
            </p>

            <h2 className="mt-1 text-2xl font-bold">
              {employee.name}
            </h2>

          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-slate-100 px-3 py-2"
          >
            ✕
          </button>

        </div>

        <div className="grid gap-6 p-6 sm:grid-cols-2">

          <div>
            <p className="text-xs uppercase text-slate-400">
              Role
            </p>

            <p className="mt-1 font-semibold">
              {employee.role}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-400">
              Department
            </p>

            <p className="mt-1 font-semibold">
              {employee.department}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-400">
              Email
            </p>

            <p className="mt-1">
              {employee.email}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-400">
              Phone
            </p>

            <p className="mt-1">
              {employee.phone}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-400">
              Assigned Project
            </p>

            <p className="mt-1 font-semibold">
              {employee.project || "Unassigned"}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-400">
              Status
            </p>

            <span className="mt-1 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              {employee.status}
            </span>
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

export default EmployeeDetails;