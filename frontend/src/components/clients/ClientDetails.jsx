const ClientDetails = ({ client, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b p-6">

          <div>
            <p className="text-sm font-semibold uppercase text-orange-500">
              Client
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              {client.name}
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
              Company
            </p>

            <p className="mt-1 font-semibold">
              {client.company || "—"}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-400">
              Status
            </p>

            <span className="mt-1 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              {client.status}
            </span>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-400">
              Email
            </p>

            <p className="mt-1 font-medium">
              {client.email}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-400">
              Phone
            </p>

            <p className="mt-1 font-medium">
              {client.phone}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-400">
              Projects
            </p>

            <p className="mt-1 text-xl font-bold">
              {client.projects}
            </p>
          </div>

          <div className="sm:col-span-2">
            <p className="text-xs uppercase text-slate-400">
              Address
            </p>

            <p className="mt-1 font-medium">
              {client.address || "—"}
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

export default ClientDetails;