import Navbar from "@/components/navbar/Navbar";
import SignupForm from "@/components/signupForm/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Starter | Signup",
};

const SignUpPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <SignupForm />
    </>
  );
};

export default SignUpPage;
