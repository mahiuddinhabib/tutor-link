import SigninForm from "@/components/signinForm/SigninForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutor Link | Signin",
};

const SignInPage = () => {
  return (
    <>
      <SigninForm />
    </>
  );
};

export default SignInPage;
