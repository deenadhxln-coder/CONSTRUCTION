import { useState } from "react";
import projectsData from "../../../data/projects.json";

import ProjectForm from "../../../components/projects/ProjectForm";
import ProjectDetails from "../../../components/projects/ProjectDetails";
import EditProjectForm from "../../../components/projects/EditProjectForm";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);

  const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const [isFormOpen, setIsFormOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const [editingProject, setEditingProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.projectName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      project.client
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      project.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const formatBudget = (budget) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(budget);
  };

  // CREATE
  const handleCreateProject = (newProject) => {
    setProjects((previousProjects) => [
      newProject,
      ...previousProjects,
    ]);

    setIsFormOpen(false);
  };

  // UPDATE
  const handleUpdateProject = (updatedProject) => {
    setProjects((previousProjects) =>
      previousProjects.map((project) =>
        project.id === updatedProject.id
          ? updatedProject
          : project
      )
    );

    setEditingProject(null);
  };

  // DELETE
  const handleDeleteProject = (projectId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) {
      return;
    }

    setProjects((previousProjects) =>
      previousProjects.filter(
        (project) => project.id !== projectId
      )
    );

    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="p-6 lg:p-8">

        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Management
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Projects
            </h1>

            <p className="mt-2 text-slate-500">
              Manage and monitor all your construction projects.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsFormOpen(true)}
            className="rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            + Add Project
          </button>

        </div>

        {/* Filters */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="flex flex-col gap-4 md:flex-row">

            <div className="flex-1">

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Search Projects
              </label>

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by project or client..."
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />

            </div>

            <div className="w-full md:w-56">

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Status
              </label>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-orange-500"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Planning">Planning</option>
                <option value="Completed">Completed</option>
              </select>

            </div>

          </div>

        </div>

        {/* Project Count */}
        <div className="mt-6">

          <p className="text-sm text-slate-500">

            Showing{" "}

            <span className="font-semibold text-slate-900">
              {filteredProjects.length}
            </span>

            {" "}of{" "}

            <span className="font-semibold text-slate-900">
              {projects.length}
            </span>

            {" "}projects

          </p>

        </div>

        {/* Project Table */}
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

          <div className="overflow-x-auto">

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
                    Type
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Budget
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Status
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Progress
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredProjects.map((project) => (

                  <tr
                    key={project.id}
                    className="border-b border-slate-100 transition hover:bg-slate-50"
                  >

                    {/* Project */}
                    <td className="px-6 py-5">

                      <p className="font-semibold text-slate-900">
                        {project.projectName}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {project.location}
                      </p>

                    </td>

                    {/* Client */}
                    <td className="px-6 py-5 text-sm text-slate-600">
                      {project.client}
                    </td>

                    {/* Type */}
                    <td className="px-6 py-5 text-sm text-slate-600">
                      {project.projectType}
                    </td>

                    {/* Budget */}
                    <td className="px-6 py-5 text-sm font-medium text-slate-700">
                      {formatBudget(project.budget)}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          project.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : project.status === "Completed"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {project.status}
                      </span>

                    </td>

                    {/* Progress */}
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

                    {/* Actions */}
                    <td className="px-6 py-5">

                      <div className="flex items-center gap-2">

                        {/* View */}
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-200"
                        >
                          View
                        </button>

                        {/* Edit */}
                        <button
                          type="button"
                          onClick={() => setEditingProject(project)}
                          className="rounded-lg bg-orange-50 px-3 py-2 text-xs font-semibold text-orange-600 transition hover:bg-orange-100"
                        >
                          Edit
                        </button>

                        {/* Delete */}
                        <button
                          type="button"
                          onClick={() =>
                            handleDeleteProject(project.id)
                          }
                          className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (

            <div className="px-6 py-12 text-center">

              <div className="text-4xl">
                🔍
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                No projects found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try changing your search or status filter.
              </p>

            </div>

          )}

        </div>

      </div>

      {/* CREATE */}
      {isFormOpen && (
        <ProjectForm
          onClose={() => setIsFormOpen(false)}
          onCreate={handleCreateProject}
        />
      )}

      {/* VIEW */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* EDIT */}
      {editingProject && (
        <EditProjectForm
          project={editingProject}
          onClose={() => setEditingProject(null)}
          onUpdate={handleUpdateProject}
        />
      )}

    </div>
  );
};

export default Projects;