import { useState } from "react";

const TaskForm = ({ task, onClose, onSave }) => {

  const [formData, setFormData] = useState(
    task || {
      title: "",
      project: "",
      assignedTo: "",
      priority: "Medium",
      status: "Pending",
      dueDate: "",
      description: "",
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
      !formData.title ||
      !formData.project ||
      !formData.assignedTo
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onSave({
      ...formData,
      id: task ? task.id : Date.now(),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b p-6">

          <div>

            <h2 className="text-xl font-bold">
              {task ? "Edit Task" : "Create Task"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage project tasks and assignments.
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

            <div className="md:col-span-2">

              <label className="mb-2 block text-sm font-medium">
                Task Title *
              </label>

              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Foundation Work"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-orange-500"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Project *
              </label>

              <input
                name="project"
                value={formData.project}
                onChange={handleChange}
                placeholder="Project name"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-orange-500"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Assigned To *
              </label>

              <input
                name="assignedTo"
                value={formData.assignedTo}
                onChange={handleChange}
                placeholder="Employee name"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-orange-500"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Priority
              </label>

              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-3"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>

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
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Due Date
              </label>

              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-3"
              />

            </div>

            <div className="md:col-span-2">

              <label className="mb-2 block text-sm font-medium">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Task description..."
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-orange-500"
              />

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
              {task ? "Save Changes" : "Create Task"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default TaskForm;