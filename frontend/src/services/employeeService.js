import { fetchApi } from "./api";
import initialEmployees from "../data/employees.json";

const STORAGE_KEY = "construction_employees";

const getLocalEmployees = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      // Fallback
    }
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialEmployees));
  return initialEmployees;
};

const saveLocalEmployees = (employees) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
};

export const getEmployees = async () => {
  try {
    const data = await fetchApi("/employees");
    return data;
  } catch {
    return getLocalEmployees();
  }
};

export const createEmployee = async (employeeData) => {
  try {
    const data = await fetchApi("/employees", {
      method: "POST",
      body: JSON.stringify(employeeData),
    });
    return data;
  } catch {
    const employees = getLocalEmployees();
    const newEmployee = {
      ...employeeData,
      id: employeeData.id || Date.now(),
    };
    const updated = [newEmployee, ...employees];
    saveLocalEmployees(updated);
    return newEmployee;
  }
};

export const updateEmployee = async (id, employeeData) => {
  try {
    const data = await fetchApi(`/employees/${id}`, {
      method: "PUT",
      body: JSON.stringify(employeeData),
    });
    return data;
  } catch {
    const employees = getLocalEmployees();
    const updated = employees.map((e) =>
      e.id === Number(id) ? { ...e, ...employeeData } : e
    );
    saveLocalEmployees(updated);
    return employeeData;
  }
};

export const deleteEmployee = async (id) => {
  try {
    await fetchApi(`/employees/${id}`, {
      method: "DELETE",
    });
    return true;
  } catch {
    const employees = getLocalEmployees();
    const updated = employees.filter((e) => e.id !== Number(id));
    saveLocalEmployees(updated);
    return true;
  }
};
