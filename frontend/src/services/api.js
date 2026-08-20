const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const fetchApi = async (endpoint, options = {}) => {
  const token = localStorage.getItem("construction_token");

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.warn(`API call failed for ${endpoint}:`, error.message);
    throw error;
  }
};

export default {
  API_BASE_URL,
  fetchApi,
};
