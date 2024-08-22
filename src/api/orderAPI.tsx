import { useAuthStore } from "@/store/useAuthStore";
import { useSnackbar } from "notistack";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CheckoutSessionRequest = {
  cartItems: {
    menuItemId: string;
    name: string;
    quantity: string;
  }[];
  deliveryDetails: {
    email: string;
    name: string;
    address: {
      addressLine1: string;
      city: string;
      country: string;
    };
  };
  restaurantId: string;
};

export const useCreateCheckoutSession = () => {
  const { token } = useAuthStore();
  const { enqueueSnackbar } = useSnackbar();

  const createCheckoutSessionRequest = async (
    checkoutSessionRequest: CheckoutSessionRequest
  ) => {
    const response = await fetch(
      `${API_BASE_URL}/api/order/checkout/create-checkout-session`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkoutSessionRequest),
      }
    );

    console.log(response);

    if (!response.ok) {
      throw new Error("unable to create checkout session");
    }

    return response.json();
  };

  const {
    mutateAsync: createCheckoutSession,
    isLoading,
    error,
    reset,
  } = useMutation(createCheckoutSessionRequest);

  if (error) {
    enqueueSnackbar(error.toString(), { variant: "error" });
    reset();
  }

  return { createCheckoutSession, isLoading };
};
