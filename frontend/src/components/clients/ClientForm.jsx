import { useState } from "react";

const ClientForm = ({ client, onClose, onSave }) => {
  const [formData, setFormData] = useState(
    client || {
      name: "",
      company: "",
      email: "",
      phone: "",
      address: "",
      status: "Active",
      projects: 0,
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all required fields.");
      return;
    }

    onSave({
      ...formData,
      id: client ? client.id : Date.now(),
      projects: Number(formData.projects),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {client ? "Edit Client" : "Add Client"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage client information.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-slate-100 px-3 py-2 text-slate-600 hover:bg-slate-200"
          >
            ✕
          </button>

        </div>

        <form onSubmit={handleSubmit} className="p-6">

          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Client Name *
              </label>

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Client name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Company
              </label>

              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email *
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="client@example.com"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Phone *
              </label>

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium">
                Address
              </label>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                placeholder="Client address"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Projects
              </label>

              <input
                type="number"
                name="projects"
                value={formData.projects}
                onChange={handleChange}
                min="0"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

          </div>

          <div className="mt-6 flex justify-end gap-3 border-t pt-5">

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
            >
              {client ? "Save Changes" : "Create Client"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default ClientForm;