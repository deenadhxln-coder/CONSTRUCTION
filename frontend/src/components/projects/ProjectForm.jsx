import { useState } from "react";

const initialFormData = {
  projectName: "",
  client: "",
  projectType: "Residential",
  location: "",
  budget: "",
  startDate: "",
  endDate: "",
  status: "Planning",
  progress: 0,
  description: "",
};

const ProjectForm = ({ onClose, onCreate }) => {
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.projectName.trim()) {
      newErrors.projectName = "Project name is required.";
    }

    if (!formData.client.trim()) {
      newErrors.client = "Client name is required.";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required.";
    }

    if (!formData.budget) {
      newErrors.budget = "Budget is required.";
    }

    if (!formData.startDate) {
      newErrors.startDate = "Start date is required.";
    }

    if (!formData.endDate) {
      newErrors.endDate = "End date is required.";
    }

    if (
      formData.startDate &&
      formData.endDate &&
      formData.endDate < formData.startDate
    ) {
      newErrors.endDate = "End date cannot be before start date.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newProject = {
      id: Date.now(),
      projectName: formData.projectName.trim(),
      client: formData.client.trim(),
      projectType: formData.projectType,
      location: formData.location.trim(),
      budget: Number(formData.budget),
      startDate: formData.startDate,
      endDate: formData.endDate,
      status: formData.status,
      progress: Number(formData.progress),
      description: formData.description.trim(),
    };

    onCreate(newProject);

    setFormData(initialFormData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4 py-6 backdrop-blur-sm">

      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">

        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-5">

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Add New Project
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Enter the details of your construction project.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
          >
            ✕
          </button>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">

          <div className="grid gap-5 md:grid-cols-2">

            {/* Project Name */}
            <div className="md:col-span-2">

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Project Name
              </label>

              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                placeholder="e.g. Green Valley Villa"
                className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-orange-100 ${
                  errors.projectName
                    ? "border-red-400"
                    : "border-slate-300 focus:border-orange-500"
                }`}
              />

              {errors.projectName && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.projectName}
                </p>
              )}

            </div>

            {/* Client */}
            <div>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Client
              </label>

              <input
                type="text"
                name="client"
                value={formData.client}
                onChange={handleChange}
                placeholder="Client name"
                className={`w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 ${
                  errors.client
                    ? "border-red-400"
                    : "border-slate-300"
                }`}
              />

              {errors.client && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.client}
                </p>
              )}

            </div>

            {/* Project Type */}
            <div>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Project Type
              </label>

              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              >
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Infrastructure">Infrastructure</option>
              </select>

            </div>

            {/* Location */}
            <div className="md:col-span-2">

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Madurai, Tamil Nadu"
                className={`w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 ${
                  errors.location
                    ? "border-red-400"
                    : "border-slate-300"
                }`}
              />

              {errors.location && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.location}
                </p>
              )}

            </div>

            {/* Budget */}
            <div>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Budget (₹)
              </label>

              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="e.g. 5000000"
                min="0"
                className={`w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 ${
                  errors.budget
                    ? "border-red-400"
                    : "border-slate-300"
                }`}
              />

              {errors.budget && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.budget}
                </p>
              )}

            </div>

            {/* Status */}
            <div>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              >
                <option value="Planning">Planning</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
              </select>

            </div>

            {/* Start Date */}
            <div>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Start Date
              </label>

              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 ${
                  errors.startDate
                    ? "border-red-400"
                    : "border-slate-300"
                }`}
              />

              {errors.startDate && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.startDate}
                </p>
              )}

            </div>

            {/* End Date */}
            <div>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                End Date
              </label>

              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 ${
                  errors.endDate
                    ? "border-red-400"
                    : "border-slate-300"
                }`}
              />

              {errors.endDate && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.endDate}
                </p>
              )}

            </div>

            {/* Progress */}
            <div>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Progress (%)
              </label>

              <input
                type="number"
                name="progress"
                value={formData.progress}
                onChange={handleChange}
                min="0"
                max="100"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />

            </div>

            {/* Description */}
            <div className="md:col-span-2">

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Describe the construction project..."
                className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />

            </div>

          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Create Project
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default ProjectForm;