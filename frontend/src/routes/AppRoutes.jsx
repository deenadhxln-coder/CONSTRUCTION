import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Projects from "../pages/Dashboard/Projects";
import ProjectDetails from "../pages/Dashboard/ProjectDetails";
import Clients from "../pages/Dashboard/Clients";
import Documents from "../pages/Dashboard/Documents";
import Employees from "../pages/Dashboard/Employees";
import Settings from "../pages/Dashboard/Settings";
import Tasks from "../pages/Dashboard/Tasks";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Dashboard Routes with Persistent Layout */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/projects" element={<Projects />} />
          <Route path="/dashboard/projects/:id" element={<ProjectDetails />} />
          <Route path="/dashboard/clients" element={<Clients />} />
          <Route path="/dashboard/documents" element={<Documents />} />
          <Route path="/dashboard/employees" element={<Employees />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/tasks" element={<Tasks />} />
        </Route>
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;