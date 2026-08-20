import { useState, useEffect } from "react";
import StatCard from "../../components/Dashboard/StatCard";
import ProjectTable from "../../components/Dashboard/ProjectTable";
import { getProjects } from "../../services/projectService";
import { getClients } from "../../services/clientService";
import { getEmployees } from "../../services/employeeService";
import { getTasks } from "../../services/taskService";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const [p, c, e, t] = await Promise.all([
        getProjects(),
        getClients(),
        getEmployees(),
        getTasks(),
      ]);
      setProjects(p);
      setClients(c);
      setEmployees(e);
      setTasks(t);
    };
    loadData();
  }, []);

  const totalProjects = projects.length;
  const activeProjects = projects.filter((p) => p.status === "Active").length;
  const totalEmployees = employees.length;
  const pendingTasks = tasks.filter((t) => t.status !== "Completed").length;

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-orange-500">
            Overview
          </p>
          <h1 className="text-3xl font-bold text-slate-900">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Monitor real-time progress across all construction sites.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Projects"
          value={totalProjects}
          change="+12% from last month"
          icon="▣"
        />
        <StatCard
          title="Active Sites"
          value={activeProjects}
          change="On track"
          icon="🏗️"
        />
        <StatCard
          title="Total Team Members"
          value={totalEmployees}
          change={`${clients.length} active clients`}
          icon="👥"
        />
        <StatCard
          title="Pending Tasks"
          value={pendingTasks}
          change={`${tasks.filter((t) => t.status === "Completed").length} completed`}
          icon="📋"
        />
      </div>

      {/* Project Table */}
      <div className="mt-10">
        <ProjectTable
          projects={projects.map((p) => ({
            id: p.id,
            name: p.projectName || p.name,
            type: p.projectType || p.type || "General",
            client: p.client,
            status: p.status,
            progress: p.progress,
            deadline: p.endDate || "Dec 2026",
          }))}
        />
      </div>
    </div>
  );
};

export default Dashboard;
