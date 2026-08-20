import { useState } from "react";

const EmployeeForm = ({ employee, onClose, onSave }) => {

  const [formData, setFormData] = useState(
    employee || {
      name: "",
      role: "",
      department: "Engineering",
      email: "",
      phone: "",
      project: "",
      status: "Active",
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

    if (
      !formData.name ||
      !formData.role ||
      !formData.email
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onSave({
      ...formData,
      id: employee ? employee.id : Date.now(),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b p-6">

          <div>
            <h2 className="text-xl font-bold">
              {employee ? "Edit Employee" : "Add Employee"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage workforce information.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-slate-100 px-3 py-2"
          >
            ✕
          </button>

        </div>

        <form onSubmit={handleSubmit} className="p-6">

          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Full Name *
              </label>

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Employee name"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Role *
              </label>

              <input
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Site Engineer"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Department
              </label>

              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-3"
              >
                <option>Engineering</option>
                <option>Management</option>
                <option>Electrical</option>
                <option>Plumbing</option>
                <option>Safety</option>
                <option>Administration</option>
              </select>
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
                placeholder="employee@example.com"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Phone
              </label>

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Project
              </label>

              <input
                name="project"
                value={formData.project}
                onChange={handleChange}
                placeholder="Assigned project"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-orange-500"
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
                className="w-full rounded-lg border px-4 py-3"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

          </div>

          <div className="mt-6 flex justify-end gap-3 border-t pt-5">

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border px-5 py-3 text-sm font-semibold"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white"
            >
              {employee ? "Save Changes" : "Create Employee"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EmployeeForm;