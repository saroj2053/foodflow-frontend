import {
  useCreateRestaurant,
  useGetRestaurant,
  useUpdateRestaurant,
} from "@/api/restaurantAPI";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";
import Layout from "@/layouts/Layout";

const ManageRestaurantPage = () => {
  const { addRestaurant, isLoading: isAddLoading } = useCreateRestaurant();
  const { restaurant } = useGetRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateRestaurant();
  const isEditing = !!restaurant;

  return (
    <Layout>
      <ManageRestaurantForm
        restaurant={restaurant}
        onSave={isEditing ? updateRestaurant : addRestaurant}
        isLoading={isAddLoading || isUpdateLoading}
      />
      ;
    </Layout>
  );
};

export default ManageRestaurantPage;
