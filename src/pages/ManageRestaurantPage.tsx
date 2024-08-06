import { useCreateRestaurant, useGetRestaurant } from "@/api/restaurantAPI";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";
import Layout from "@/layouts/Layout";

const ManageRestaurantPage = () => {
  const { addRestaurant, isLoading } = useCreateRestaurant();
  const { restaurant } = useGetRestaurant();
  return (
    <Layout>
      <ManageRestaurantForm
        restaurant={restaurant}
        onSave={addRestaurant}
        isLoading={isLoading}
      />
      ;
    </Layout>
  );
};

export default ManageRestaurantPage;
