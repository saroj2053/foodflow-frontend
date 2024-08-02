const Footer = () => {
  return (
    <div className="bg-orange-500 py-10 mt-10">
      <div className="container mx-auto flex flex-col gap-6 md:flex-row justify-between items-center">
        <span className="text-4xl text-white font-bold tracking-tight">
          EzyEats
        </span>
        <span className="font-bold text-base text-white tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
