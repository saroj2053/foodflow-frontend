import { useGetUserDetails, useUpdateUser } from "@/api/userAPI";
import LoadingButton from "@/components/LoadingButton";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";
import Layout from "@/layouts/Layout";
import { useAuthStore } from "@/store/useAuthStore";
import { House, Mail, Map, MapPin, User } from "lucide-react";

const UserProfilePage = () => {
  const { updateUser, isLoading: isUpdateLoading } = useUpdateUser();
  const { user } = useAuthStore();
  const { currentUser } = useGetUserDetails();
  if (!currentUser) {
    return <LoadingButton />;
  }

  return (
    <Layout>
      <div className="container mx-auto flex flex-wrap items-center justify-between py-20 gap-12">
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 bg-orange-300 flex justify-center items-center rounded-full">
            <Mail size={45} />
          </div>
          <h2 className="text-md  font-semibold text-slate-700">
            {user?.email}
          </h2>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 bg-orange-300 flex justify-center items-center rounded-full">
            <User size={45} />
          </div>
          <h2 className="text-md  font-semibold text-slate-700">
            {user?.name}
          </h2>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 bg-orange-300 flex justify-center items-center rounded-full">
            <House size={45} />
          </div>
          <h2 className="text-md  font-semibold text-slate-700">
            {user?.address?.addressLine1}
          </h2>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 bg-orange-300 flex justify-center items-center rounded-full">
            <MapPin size={45} />
          </div>
          <h2 className="text-md  font-semibold text-slate-700">
            {user?.address?.city}
          </h2>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 bg-orange-300 flex justify-center items-center rounded-full">
            <Map size={45} />
          </div>
          <h2 className="text-md  font-semibold text-slate-700">
            {user?.address?.country}
          </h2>
        </div>
      </div>
      <UserProfileForm
        onSave={updateUser}
        isLoading={isUpdateLoading}
        currentUser={currentUser}
        title="User Profile"
        buttonText="Submit"
      />
    </Layout>
  );
};

export default UserProfilePage;
