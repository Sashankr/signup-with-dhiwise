import React from "react";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { postAuthLogin } from "service/api";
import * as yup from "yup";

import { Button, Input, Text } from "components";

import useForm from "hooks/useForm";

import "react-toastify/dist/ReactToastify.css";

const SignInPage = () => {
  const [login, setLogin] = React.useState();
  const formValidationSchema = yup
    .object()
    .shape({
      username: yup.string().required("Username is required"),
      password: yup.string().required("Password is required"),
    });
  const form = useForm(
    { username: "", password: "" },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    },
  );
  const navigate = useNavigate();

  function signin(data) {
    const req = {
      data: { username: data?.username, password: data?.password },
    };

    postAuthLogin(req)
      .then((res) => {
        setLogin(res?.data);

        toast.success("Successfully LoggedIn!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong. Try again!");
      });
  }

  return (
    <>
      <div className="bg-deep_purple-900 h-[1080px] mx-auto relative w-full">
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[162px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group7.png')" }}
        >
          <div className="bg-white-A700 border-2 border-blue_gray-50 border-solid flex flex-col items-start justify-end mb-5 md:ml-[0] ml-[30px] p-[81px] md:px-5 rounded-[24px]">
            <div className="flex flex-col font-inter gap-[9px] items-start justify-start ml-0.5 md:ml-[0] mt-0.5 w-auto sm:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
                size="txtInterBold40"
              >
                Welcome
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                size="txtInterRegular24"
              >
                to EZ Innovation Sign in to Continue
              </Text>
            </div>
            <div className="flex flex-col font-inter gap-4 items-start justify-start ml-0.5 md:ml-[0] mt-[43px] w-full">
              <Text
                className="text-gray-900 text-xl w-auto"
                size="txtInterSemiBold20"
              >
                Email
              </Text>
              <Input
                name="groupOne"
                placeholder="enter your email here"
                className="leading-[normal] p-0 placeholder:text-blue_gray-600 text-left text-xl w-full"
                wrapClassName="border-2 border-blue_gray-50 border-solid w-full"
                type="email"
                onChange={(e) => {
                  form.handleChange("username", e);
                }}
                errors={form?.errors?.username}
                value={form?.values?.username}
                size="sm"
              ></Input>
            </div>
            <div className="flex flex-col font-inter gap-4 items-start justify-start ml-0.5 md:ml-[0] mt-[19px] w-full">
              <Text
                className="text-gray-900 text-xl w-auto"
                size="txtInterSemiBold20"
              >
                Password
              </Text>
              <Input
                name="password_One"
                placeholder="*************"
                className="leading-[normal] p-0 placeholder:text-blue_gray-600 text-left text-xl w-full"
                wrapClassName="border-2 border-blue_gray-50 border-solid w-full"
                onChange={(e) => {
                  form.handleChange("password", e);
                }}
                errors={form?.errors?.password}
                value={form?.values?.password}
              ></Input>
            </div>
            <a
              href="javascript:"
              className="md:ml-[0] ml-[303px] mt-[22px] text-blue_gray-600 text-lg"
            >
              <Text size="txtInterRegular18">Forgot Password?</Text>
            </a>
            <Button
              className="common-pointer cursor-pointer font-inter font-semibold leading-[normal] min-w-[453px] sm:min-w-full md:ml-[0] ml-[3px] mt-11 text-center text-xl"
              onClick={() => {
                form.handleSubmit(signin);
              }}
            >
              Sign In
            </Button>
            <Text
              className="common-pointer cursor-pointer md:ml-[0] ml-[143px] mt-[31px] text-gray-900 text-xl"
              size="txtSourceSansProRegular20"
              onClick={() => navigate("/signup")}
            >
              <span className="text-blue_gray-400 font-inter text-left font-normal">
                New user?
              </span>
              <span className="text-gray-900 font-inter text-left font-semibold">
                {" "}
              </span>
              <span className="text-red-500 font-inter text-left font-semibold">
                Signup
              </span>
            </Text>
          </div>
        </div>
        <div className="absolute bg-white-A700 h-[72px] inset-x-[0] mx-auto top-[0] w-full"></div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignInPage;
