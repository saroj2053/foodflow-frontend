import { useAuthStore } from "@/store/useAuthStore";
import { useSnackbar } from "notistack";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type UpdateUserRequest = {
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};

export const useUpdateUser = () => {
  const { token, setUserAndToken } = useAuthStore();
  const { enqueueSnackbar } = useSnackbar();
  const updateUserRequset = async (formData: UpdateUserRequest) => {
    if (!token) {
      throw new Error("No accessToken detected");
    }
    const response = await fetch(`${API_BASE_URL}/api/user/profile/update`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to update user");
    }

    const data = await response.json();
    setUserAndToken(data?.user, token);
  };

  const {
    mutateAsync: updateUser,
    isLoading,
    isSuccess,
    error,
    reset,
  } = useMutation(updateUserRequset);

  if (isSuccess) {
    enqueueSnackbar("User profile updated!", { variant: "success" });
    reset();
  }
  if (error) {
    enqueueSnackbar(error.toString(), { variant: "error" });
    reset();
  }

  return { updateUser, isLoading, isSuccess, error, reset };
};
