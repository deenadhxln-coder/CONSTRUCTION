import { fetchApi } from "./api";
import initialClients from "../data/clients.json";

const STORAGE_KEY = "construction_clients";

const getLocalClients = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      // Fallback
    }
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialClients));
  return initialClients;
};

const saveLocalClients = (clients) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
};

export const getClients = async () => {
  try {
    const data = await fetchApi("/clients");
    return data;
  } catch {
    return getLocalClients();
  }
};

export const createClient = async (clientData) => {
  try {
    const data = await fetchApi("/clients", {
      method: "POST",
      body: JSON.stringify(clientData),
    });
    return data;
  } catch {
    const clients = getLocalClients();
    const newClient = {
      ...clientData,
      id: clientData.id || Date.now(),
      projects: Number(clientData.projects) || 0,
    };
    const updated = [newClient, ...clients];
    saveLocalClients(updated);
    return newClient;
  }
};

export const updateClient = async (id, clientData) => {
  try {
    const data = await fetchApi(`/clients/${id}`, {
      method: "PUT",
      body: JSON.stringify(clientData),
    });
    return data;
  } catch {
    const clients = getLocalClients();
    const updated = clients.map((c) =>
      c.id === Number(id) ? { ...c, ...clientData } : c
    );
    saveLocalClients(updated);
    return clientData;
  }
};

export const deleteClient = async (id) => {
  try {
    await fetchApi(`/clients/${id}`, {
      method: "DELETE",
    });
    return true;
  } catch {
    const clients = getLocalClients();
    const updated = clients.filter((c) => c.id !== Number(id));
    saveLocalClients(updated);
    return true;
  }
};
