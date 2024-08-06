import { useAuthStore } from "@/store/useAuthStore";
import { Restaurant } from "@/types";
import { useSnackbar } from "notistack";
import { useMutation, useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const useGetRestaurant = () => {
  const { token } = useAuthStore();

  const getRestaurant = async () => {
    const response = await fetch(`${API_BASE_URL}/api/restaurant`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get restaurant");
    }

    return response.json();
  };

  const { data: restaurant, isLoading } = useQuery(
    "fetchRestaurant",
    getRestaurant
  );

  return { restaurant, isLoading };
};

export const useCreateRestaurant = () => {
  const { token } = useAuthStore();
  const { enqueueSnackbar } = useSnackbar();

  const createRestaurant = async (
    restaurantFormData: FormData
  ): Promise<Restaurant> => {
    const response = await fetch(`${API_BASE_URL}/api/restaurant`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: restaurantFormData,
    });

    if (!response.ok) {
      throw new Error("Failed to create restaurant");
    }

    return response.json();
  };

  const {
    mutate: addRestaurant,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createRestaurant);

  if (isSuccess) {
    enqueueSnackbar("Restaurant created!", { variant: "success" });
  }

  if (error) {
    enqueueSnackbar("Unable to update restaurant", { variant: "error" });
  }

  return { addRestaurant, isLoading };
};
