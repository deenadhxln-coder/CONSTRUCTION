import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Landing/Auth/Login";
import Register from "../pages/Landing/Auth/Register";
import Dashboard from "../pages/Landing/Dashboard/Dashboard";

import Clients from "../pages/Landing/Dashboard/Clients";
import Documents from "../pages/Landing/Dashboard/Documents";
import Employees from "../pages/Landing/Dashboard/Employees";
import Projects from "../pages/Landing/Dashboard/Projects";
import Settings from "../pages/Landing/Dashboard/Settings";
import Tasks from "../pages/Landing/Dashboard/Tasks";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected DashBoard Routes */}

      <Route element={<ProtectedRoute />}>

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
           path="/dashboard/Projects"
           element={<Projects/>}
        />

        <Route 
           path="/dashboard/Clients"
           element={<Clients />}
        />

        <Route 
           path="/dashboard/Documents"
           element={<Documents />}
        />

        <Route 
           path="/dashboard/Employees"
           element={<Employees />}
        />

        <Route 
           path="/dashboard/Settings"
           element={<Settings />}
        />
        
        <Route 
           path="/dashboard/Tasks"
           element={<Tasks />}
        />

      </Route>

    </Routes>
  );
};

export default AppRoutes;