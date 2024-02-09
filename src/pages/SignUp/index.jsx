
    import React from 'react';

    

    import { useNavigate } from "react-router-dom"
  import { ToastContainer, toast } from "react-toastify"
  
  import { postAuthRegister } from "service/api"
  import * as yup from "yup"
  
  import { Button, Input, Text } from "components"
  
  import useForm from "hooks/useForm"
  
  import "react-toastify/dist/ReactToastify.css"
  
  

    

    

    

    const SignUpPage = () => {
      const [register, setRegister] = React.useState();
  const formValidationSchema = yup.object().shape({email:yup.string().required('Email is required').email('Please enter valid email'),})
  const form = useForm({"username":"","name":"","email":""},{
        validate: true,
        validateSchema: formValidationSchema,
        validationOnChange: true
      });
  const navigate = useNavigate();
  

      

      function continue(data, ) {
        const req = {data: {'username': data?.username, 'name': data?.name, 'email': data?.email, }, };
        
        postAuthRegister(req)
          .then((res) => {
            setRegister(res?.data);
             
            navigate('/signin'); 
          })
          .catch((err) => {
            console.error(err);
            toast.error("Something went wrong. Try again!")
          });}
  

      return (<><div
    className="bg-deep_purple-900 h-[1080px] mx-auto relative w-full"
      

    
  ><div
  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[118px] md:px-10 sm:px-5 w-full"
  style={{"backgroundImage":"url('images/img_group7.png')"}}

  
  ><div
  className="flex flex-col items-center justify-start md:ml-[0] ml-[74px] mt-[26px] w-[37%] md:w-full"
  

  
  ><div
  className="bg-white-A700 border-2 border-blue_gray-50 border-solid flex flex-col items-start justify-start md:px-10 sm:px-5 px-[84px] py-[83px] rounded-[24px] w-auto md:w-full"
  

  
  ><div
  className="flex flex-col items-start justify-start w-full"
  

  
  ><div
  className="flex flex-col font-inter gap-[9px] items-start justify-start w-auto sm:w-full"
  

  
  ><Text
    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
    size="txtInterBold40"
    
    
  >Welcome</Text><Text
    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
    size="txtInterRegular24"
    
    
  >to EZ Innovation Sign in to Continue</Text></div><div
  className="flex flex-col font-inter gap-4 items-start justify-start mt-[42px] w-full"
  

  
  ><Text
    className="text-gray-900 text-xl w-auto"
    size="txtInterSemiBold20"
    
    
  >First Name</Text><Input
    name="groupFour" placeholder="Ronald" className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-600 text-left text-xl w-full" wrapClassName="border-2 border-blue_gray-50 border-solid w-full"
    onChange={(e,)=>{form.handleChange("username",e,)
}}
value={form?.values?.username}
    
    



  ></Input></div><div
  className="flex flex-col font-inter gap-4 items-start justify-start mt-[19px] w-full"
  

  
  ><Text
    className="text-gray-900 text-xl w-auto"
    size="txtInterSemiBold20"
    
    
  >Last Name</Text><Input
    name="groupFive" placeholder="John" className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-600 text-left text-xl w-full" wrapClassName="border-2 border-blue_gray-50 border-solid w-full"
    onChange={(e,)=>{form.handleChange("name",e,)
}}
value={form?.values?.name}
    
    



  ></Input></div><div
  className="flex flex-col font-inter gap-4 items-start justify-start mt-[18px] w-full"
  

  
  ><Text
    className="text-gray-900 text-xl w-auto"
    size="txtInterSemiBold20"
    
    
  >Email</Text><Input
    name="email_One" placeholder="ronald.john@gmail.com" className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-600 text-left text-xl w-full" wrapClassName="border-2 border-blue_gray-50 border-solid w-full"
    type="email"onChange={(e,)=>{form.handleChange("email",e,)
}}
errors={form?.errors?.email}value={form?.values?.email}
    
    



  ></Input></div><Button
  className="common-pointer cursor-pointer font-inter font-semibold leading-[normal] min-w-[453px] sm:min-w-full mt-10 text-center text-xl"
    onClick={()=>{form.handleSubmit(continue)
}}

    



  >Continue</Button><Text
    className="common-pointer md:ml-[0] ml-[63px] mt-[41px] text-gray-900 text-xl"
    size="txtSourceSansProRegular20"
    onClick={() => navigate('/signin')}
    
  ><span  className="text-blue_gray-400 font-inter text-left font-normal" >You have already account ?</span><span  className="text-gray-900 font-inter text-left font-semibold" > </span><span  className="text-red-500 font-inter text-left font-semibold" >Sign In</span></Text></div></div></div></div><div
    className="absolute bg-white-A700 h-[72px] inset-x-[0] mx-auto top-[0] w-full"
    
    
  ></div></div><ToastContainer /></>);
    };

    

    export default SignUpPage;
  