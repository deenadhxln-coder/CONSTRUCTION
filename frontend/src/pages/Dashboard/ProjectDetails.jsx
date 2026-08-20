import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProjects, updateProject } from "../../services/projectService";
import { getClients } from "../../services/clientService";
import { getEmployees } from "../../services/employeeService";
import { getTasks } from "../../services/taskService";
import EditProjectForm from "../../components/projects/EditProjectForm";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [client, setClient] = useState(null);
  const [projectTasks, setProjectTasks] = useState([]);
  const [projectEmployees, setProjectEmployees] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDetails = async () => {
      setLoading(true);
      const [allProjects, allClients, allEmployees, allTasks] = await Promise.all([
        getProjects(),
        getClients(),
        getEmployees(),
        getTasks(),
      ]);

      const found = allProjects.find((p) => p.id === Number(id));
      if (found) {
        setProject(found);
        const clientName = found.client;
        const foundClient = allClients.find(
          (c) => c.name?.toLowerCase() === clientName?.toLowerCase() || c.company?.toLowerCase() === clientName?.toLowerCase()
        );
        setClient(foundClient || null);

        const projectName = found.projectName || found.name;
        setProjectTasks(allTasks.filter((t) => t.project === projectName));
        setProjectEmployees(allEmployees.filter((e) => e.project === projectName));
      }
      setLoading(false);
    };

    loadDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-8">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-orange-500 border-t-transparent mx-auto" />
          <p className="mt-3 text-sm text-slate-500">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-8">
        <div className="text-center">
          <div className="text-4xl">🔍</div>
          <h1 className="mt-3 text-2xl font-bold text-slate-900">
            Project Not Found
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            The project you're looking for does not exist or has been removed.
          </p>
          <button
            type="button"
            onClick={() => navigate("/dashboard/projects")}
            className="mt-5 inline-flex items-center rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount || 0);
  };

  const handleUpdate = async (updated) => {
    await updateProject(updated.id, updated);
    setProject(updated);
    setIsEditing(false);
  };

  const completedTasks = projectTasks.filter((t) => t.status === "Completed").length;

  return (
    <div className="p-6 lg:p-8">
      {/* Back Button */}
      <button
        type="button"
        onClick={() => navigate("/dashboard/projects")}
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-orange-500"
      >
        ← Back to Projects
      </button>

      {/* Header Banner */}
      <div className="flex flex-col justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs md:flex-row md:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {project.projectName || project.name}
            </h1>
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
              {project.status}
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-500">
            {project.projectType || project.type} Construction • {project.location || "On-site"}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
          >
            Edit Project
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            Budget
          </p>
          <p className="mt-2 text-2xl font-bold text-slate-900">
            {formatCurrency(project.budget)}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            Progress
          </p>
          <p className="mt-2 text-2xl font-bold text-slate-900">
            {project.progress || 0}%
          </p>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full bg-orange-500"
              style={{ width: `${project.progress || 0}%` }}
            />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            Timeline
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-900">
            {project.startDate || "N/A"} → {project.endDate || "N/A"}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            Task Completion
          </p>
          <p className="mt-2 text-2xl font-bold text-slate-900">
            {completedTasks} / {projectTasks.length}
          </p>
        </div>
      </div>

      {/* Main Grid: Info + Team/Tasks */}
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Left 2 Cols: Details & Tasks */}
        <div className="space-y-8 lg:col-span-2">
          {/* Description */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900">
              Project Overview & Scope
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {project.description || "No specific description entered for this project."}
            </p>
          </div>

          {/* Linked Tasks */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h2 className="text-lg font-bold text-slate-900">
                Milestones & Tasks
              </h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {projectTasks.length} Tasks
              </span>
            </div>

            <div className="mt-4 divide-y divide-slate-100">
              {projectTasks.map((t) => (
                <div key={t.id} className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.title}</p>
                    <p className="text-xs text-slate-400">Assigned: {t.assignedTo} • Due: {t.dueDate}</p>
                  </div>
                  <span className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                    t.status === "Completed" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                  }`}>
                    {t.status}
                  </span>
                </div>
              ))}

              {projectTasks.length === 0 && (
                <p className="py-4 text-center text-sm text-slate-400">
                  No tasks currently linked to this project.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right 1 Col: Client Card & Team */}
        <div className="space-y-8">
          {/* Client Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900">
              Client Information
            </h2>
            <div className="mt-4 space-y-3 text-sm">
              <div>
                <p className="text-xs text-slate-400">Client Name</p>
                <p className="font-semibold text-slate-900">{project.client}</p>
              </div>
              {client && (
                <>
                  <div>
                    <p className="text-xs text-slate-400">Company</p>
                    <p className="font-medium text-slate-700">{client.company}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Email</p>
                    <p className="font-medium text-slate-700">{client.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Phone</p>
                    <p className="font-medium text-slate-700">{client.phone}</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Assigned Team */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900">
              Assigned Personnel
            </h2>
            <div className="mt-4 space-y-3">
              {projectEmployees.map((emp) => (
                <div key={emp.id} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                    {emp.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{emp.name}</p>
                    <p className="text-xs text-slate-400">{emp.role} • {emp.department}</p>
                  </div>
                </div>
              ))}

              {projectEmployees.length === 0 && (
                <p className="text-xs text-slate-400">
                  No personnel specifically tagged to this site.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <EditProjectForm
          project={project}
          onClose={() => setIsEditing(false)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default ProjectDetails;
