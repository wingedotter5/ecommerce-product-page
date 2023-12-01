import Avatar from "../assets/images/image-avatar.png";

const User = () => {
  return (
    <img
      className="w-8 cursor-pointer rounded-full hover:ring hover:ring-orange sm:w-12"
      src={Avatar}
    />
  );
};

export default User;
