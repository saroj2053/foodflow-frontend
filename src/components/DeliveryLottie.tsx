import Lottie from "lottie-react";
import deliveryAnimation from "../assets/DeliveryPerson.json";

const DeliveryLottie = () => {
  return (
    <div className="w-1/2 h-1/2">
      <Lottie animationData={deliveryAnimation} />
    </div>
  );
};

export default DeliveryLottie;
