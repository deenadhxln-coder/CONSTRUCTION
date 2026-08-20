import { fetchApi } from "./api";
import initialProjects from "../data/projects.json";

const STORAGE_KEY = "construction_projects";

const getLocalProjects = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      // Fallback
    }
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProjects));
  return initialProjects;
};

const saveLocalProjects = (projects) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
};

export const getProjects = async () => {
  try {
    const data = await fetchApi("/projects");
    return data;
  } catch {
    return getLocalProjects();
  }
};

export const getProjectById = async (id) => {
  try {
    const data = await fetchApi(`/projects/${id}`);
    return data;
  } catch {
    const projects = getLocalProjects();
    return projects.find((p) => p.id === Number(id)) || null;
  }
};

export const createProject = async (projectData) => {
  try {
    const data = await fetchApi("/projects", {
      method: "POST",
      body: JSON.stringify(projectData),
    });
    return data;
  } catch {
    const projects = getLocalProjects();
    const newProject = {
      ...projectData,
      id: projectData.id || Date.now(),
      progress: Number(projectData.progress) || 0,
      budget: Number(projectData.budget) || 0,
    };
    const updated = [newProject, ...projects];
    saveLocalProjects(updated);
    return newProject;
  }
};

export const updateProject = async (id, projectData) => {
  try {
    const data = await fetchApi(`/projects/${id}`, {
      method: "PUT",
      body: JSON.stringify(projectData),
    });
    return data;
  } catch {
    const projects = getLocalProjects();
    const updated = projects.map((p) =>
      p.id === Number(id) ? { ...p, ...projectData } : p
    );
    saveLocalProjects(updated);
    return projectData;
  }
};

export const deleteProject = async (id) => {
  try {
    await fetchApi(`/projects/${id}`, {
      method: "DELETE",
    });
    return true;
  } catch {
    const projects = getLocalProjects();
    const updated = projects.filter((p) => p.id !== Number(id));
    saveLocalProjects(updated);
    return true;
  }
};
