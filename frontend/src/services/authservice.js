const USER_KEY = "construction_user";
const AUTH_KEY = "construction_auth";

export const registerUser = (userData) => {
  localStorage.setItem(USER_KEY, JSON.stringify(userData));
  localStorage.setItem(AUTH_KEY, "true");

  return userData;
};

export const loginUser = (email, password) => {
  const storedUser = localStorage.getItem(USER_KEY);

  if (!storedUser) {
    return {
      success: false,
      message: "Account not found. Please register first.",
    };
  }

  const user = JSON.parse(storedUser);

  if (user.email !== email || user.password !== password) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  localStorage.setItem(AUTH_KEY, "true");

  return {
    success: true,
    user,
  };
};

export const logoutUser = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const isAuthenticated = () => {
  return localStorage.getItem(AUTH_KEY) === "true";
};

export const getCurrentUser = () => {
  const user = localStorage.getItem(USER_KEY);

  return user ? JSON.parse(user) : null;
};