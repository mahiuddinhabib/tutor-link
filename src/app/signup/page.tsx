import SignupForm from "@/components/signupForm/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutor Link | Signup",
};

const SignUpPage = () => {
  return (
    <>
      <SignupForm />
    </>
  );
};

export default SignUpPage;
