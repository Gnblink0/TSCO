const AUTH_KEY = import.meta.env.VITE_STAFF_PASSWORD;
const AUTH_DURATION = 60 * 60 * 1000; // 1 hour

interface AuthState {
  timestamp: number;
  isAuthenticated: boolean;
}

export const authUtils = {
  // save auth state
  setAuth: () => {
    const authState: AuthState = {
      timestamp: Date.now(),
      isAuthenticated: true,
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(authState));
  },

  // check if auth state is valid
  checkAuth: (): boolean => {
    const authData = localStorage.getItem(AUTH_KEY);
    if (!authData) return false;

    const authState: AuthState = JSON.parse(authData);
    const isExpired = Date.now() - authState.timestamp > AUTH_DURATION;

    if (isExpired) {
      localStorage.removeItem(AUTH_KEY);
      return false;
    }

    return authState.isAuthenticated;
  },

  // clear auth state
  clearAuth: () => {
    localStorage.removeItem(AUTH_KEY);
  },
};
