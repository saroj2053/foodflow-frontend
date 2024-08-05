import { useAuthStore } from "@/store/useAuthStore";
import { useMutation } from "react-query";
import { useSnackbar } from "notistack";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const useSignup = () => {
  const { setUserAndToken } = useAuthStore();
  const { enqueueSnackbar } = useSnackbar();
  const signup = async (user: CreateUserRequest) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errMsg = errorData.message || "Failed to register user";
      enqueueSnackbar(errMsg, { variant: "error" });
      throw new Error(errMsg);
    }

    const data = await response.json();
    setUserAndToken(data.user, data.token);
    enqueueSnackbar(data.message, { variant: "success" });
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(signup);

  return { createUser, isLoading, isError, isSuccess };
};

type LoginRequest = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const { setUserAndToken } = useAuthStore();
  const { enqueueSnackbar } = useSnackbar();
  const login = async (user: LoginRequest) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errMsg = errorData.message || "Failed to login user";
      enqueueSnackbar(errMsg, { variant: "error" });
      throw new Error(errMsg);
    }
    const data = await response.json();
    enqueueSnackbar(data.message, { variant: "success" });
    setUserAndToken(data.user, data.token);
  };

  const {
    mutateAsync: loginUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(login);

  return { loginUser, isLoading, isError, isSuccess };
};

export const useLogout = () => {
  const { clearUserAndToken } = useAuthStore();
  const { enqueueSnackbar } = useSnackbar();
  const logout = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
      method: "POST",
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errMsg = errorData.message || "Failed to logout user";
      enqueueSnackbar(errMsg, { variant: "error" });
      throw new Error(errMsg);
    }

    const data = await response.json();
    clearUserAndToken();
    enqueueSnackbar(data.message, { variant: "success" });
  };

  const {
    mutateAsync: logoutUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(logout);

  return { logoutUser, isLoading, isError, isSuccess };
};
