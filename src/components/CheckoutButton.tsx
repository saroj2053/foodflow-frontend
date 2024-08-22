import { useAuthStore } from "@/store/useAuthStore";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import UserProfileForm, {
  UserFormData,
} from "@/forms/user-profile-form/UserProfileForm";
import { useGetUserDetails } from "@/api/userAPI";
import LoadingButton from "./LoadingButton";

type Props = {
  onCheckout: (userFormData: UserFormData) => void;
  disabled: boolean;
};

const CheckoutButton = ({ onCheckout, disabled }: Props) => {
  const { user, token } = useAuthStore();
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { currentUser, isLoading: isGetUserLoading } = useGetUserDetails();

  const onLogin = async () => {
    navigate("/login", { state: { from: pathname } });
  };

  if (!token || !user) {
    return (
      <Button onClick={onLogin} className="bg-orange-500 flex-1">
        Log in to check out
      </Button>
    );
  }

  if (!currentUser) {
    return <LoadingButton />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-orange-500 flex-1" disabled={disabled}>
          Go to checkout
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md: min-w-[700px] bg-gray-50">
        <UserProfileForm
          currentUser={currentUser}
          onSave={onCheckout}
          isLoading={isGetUserLoading}
          title="Confirm Delivery Details"
          buttonText="Continue to payment"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutButton;
