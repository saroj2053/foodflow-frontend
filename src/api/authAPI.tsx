import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const useSignup = () => {
  const signup = async (user: CreateUserRequest) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    const result = await response.json();

    localStorage.setItem("loggedInUser", JSON.stringify(result.user));
    localStorage.setItem("authToken", result.token);
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(signup);

  return { createUser, isLoading, isError, isSuccess };
};
