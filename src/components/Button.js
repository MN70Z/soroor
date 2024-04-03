import SignUp from "./sign-up";

const ButtonSignUp = () => {
  return (
    <button className="cursor-pointer [border:none] py-2.5 px-3.5 bg-primary-color rounded-lg overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-cadetblue">
      <SignUp />
    </button>
  );
};

export default ButtonSignUp;
