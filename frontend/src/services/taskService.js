import { fetchApi } from "./api";
import initialTasks from "../data/tasks.json";

const STORAGE_KEY = "construction_tasks";

const getLocalTasks = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      // Fallback
    }
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialTasks));
  return initialTasks;
};

const saveLocalTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

export const getTasks = async () => {
  try {
    const data = await fetchApi("/tasks");
    return data;
  } catch {
    return getLocalTasks();
  }
};

export const createTask = async (taskData) => {
  try {
    const data = await fetchApi("/tasks", {
      method: "POST",
      body: JSON.stringify(taskData),
    });
    return data;
  } catch {
    const tasks = getLocalTasks();
    const newTask = {
      ...taskData,
      id: taskData.id || Date.now(),
    };
    const updated = [newTask, ...tasks];
    saveLocalTasks(updated);
    return newTask;
  }
};

export const updateTask = async (id, taskData) => {
  try {
    const data = await fetchApi(`/tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify(taskData),
    });
    return data;
  } catch {
    const tasks = getLocalTasks();
    const updated = tasks.map((t) =>
      t.id === Number(id) ? { ...t, ...taskData } : t
    );
    saveLocalTasks(updated);
    return taskData;
  }
};

export const deleteTask = async (id) => {
  try {
    await fetchApi(`/tasks/${id}`, {
      method: "DELETE",
    });
    return true;
  } catch {
    const tasks = getLocalTasks();
    const updated = tasks.filter((t) => t.id !== Number(id));
    saveLocalTasks(updated);
    return true;
  }
};
