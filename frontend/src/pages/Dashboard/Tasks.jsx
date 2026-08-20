import { useState, useEffect } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../../services/taskService";

import TaskForm from "../../components/tasks/TaskForm";
import TaskDetails from "../../components/tasks/TaskDetails";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchList();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      (task.title || "").toLowerCase().includes(search.toLowerCase()) ||
      (task.project || "").toLowerCase().includes(search.toLowerCase()) ||
      (task.assignedTo || "").toLowerCase().includes(search.toLowerCase());

    const matchesStatus = status === "All" || task.status === status;

    return matchesSearch && matchesStatus;
  });

  const handleSave = async (taskData) => {
    if (editingTask) {
      await updateTask(taskData.id, taskData);
      setTasks((prev) =>
        prev.map((item) => (item.id === taskData.id ? taskData : item))
      );
      setEditingTask(null);
    } else {
      const created = await createTask(taskData);
      setTasks((prev) => [created, ...prev]);
      setShowForm(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!confirmed) return;

    await deleteTask(id);
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-50 text-red-700 ring-red-600/20";
      case "Medium":
        return "bg-amber-50 text-amber-700 ring-amber-600/20";
      default:
        return "bg-slate-50 text-slate-700 ring-slate-600/20";
    }
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Operations
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Task Management
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Track milestones, site inspections, and contractor work orders.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setEditingTask(null);
            setShowForm(true);
          }}
          className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
        >
          + Add Task
        </button>
      </div>

      {/* Filter & Search */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search by task, project, or assignee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 pl-10 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
          />
          <span className="absolute left-3.5 top-2.5 text-slate-400">🔍</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {["All", "Pending", "In Progress", "Completed"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setStatus(item)}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                status === item
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Tasks Table */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-6 py-4">Task Title</th>
                <th className="px-6 py-4">Project</th>
                <th className="px-6 py-4">Assigned To</th>
                <th className="px-6 py-4">Priority</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Due Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredTasks.map((task) => (
                <tr key={task.id} className="transition hover:bg-slate-50/80">
                  <td className="px-6 py-4 font-semibold text-slate-900">
                    {task.title}
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {task.project}
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    {task.assignedTo}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${getPriorityBadge(
                        task.priority
                      )}`}
                    >
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold ${
                        task.status === "Completed"
                          ? "bg-emerald-50 text-emerald-700"
                          : task.status === "In Progress"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-500">
                    {task.dueDate}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedTask(task)}
                        className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-200"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setEditingTask(task);
                          setShowForm(true);
                        }}
                        className="rounded-lg bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-600 transition hover:bg-orange-100"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(task.id)}
                        className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredTasks.length === 0 && (
            <div className="px-6 py-16 text-center">
              <div className="text-4xl">📋</div>
              <h3 className="mt-3 text-base font-semibold text-slate-900">
                No tasks found
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Try searching or creating a new task.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <TaskForm
          task={editingTask}
          onClose={() => {
            setShowForm(false);
            setEditingTask(null);
          }}
          onSave={handleSave}
        />
      )}

      {/* Details Modal */}
      {selectedTask && (
        <TaskDetails
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
        />
      )}
    </div>
  );
};

export default Tasks;
