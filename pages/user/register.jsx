import { FcGoogle } from 'react-icons/fc';
import { FaLock, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
// import { BsGenderAmbiguous } from 'react-icons/bs';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import axios from 'axios';
import Link from 'next/link';
import ReactLoading from "react-loading";


function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState([]);
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter();

  const validateSignUp = () => {
    if (name.trim() === '') {
      Swal.fire('Name is required', 'Fill your name please', 'info');
    } else if (email === '') {
      Swal.fire('Email is required', 'Fill your Email please', 'info');
    } else if (/\s/.test(email)) {
      Swal.fire('Fotrbiden', 'Email contain whites space', 'info');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      Swal.fire(
        'Email is using forbidden character',
        'Fill your Email with correct format please',
        'info'
      );
    } else if (password.length < 3) {
      Swal.fire(
        'Password is required',
        'Fill your Password min. 3 character',
        'info'
      );
    } else if (password.length > 8) {
      Swal.fire(
        'Password is required',
        'Fill your Password max. 8 character',
        'info'
      );
    } else if (/\s/.test(password)) {
      Swal.fire('Fotrbiden', 'Password contain whites space', 'info');
    } else {
      handleSign();
    }
  };

  const handleSign = () => {
    // const body = {
    //   name: name,
    //   email: email,
    //   password: password,
    //   gender: gender,
    // };
    setIsLoading(true)
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('gender', gender);
    // formData.append('image', image);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    axios
      .post(
        'https://aaryadewangga.cloud.okteto.net/users/register',
        formData,
        config
      )
      .then(({ data }) => {
        // console.log(data.data.token);
        localStorage.setItem('token', data.data.token);
        setTimeout(() => {
          router.push('/user/login');
        }, 1500);
        Swal.fire(
          'Account Created!',
          'Login to accsess full experience.',
          'success'
        );
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      })
      .finally(() => {
        setIsLoading(false)
      })
  };

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center h-screen justify-center content-center">
        <br />
        <ReactLoading type="cylon" color="#0000FF" height={100} width={50} />
      </div>
    );
  }

  return (
    <div>
      <div
        className="flex justify-center items-center bg-gray-300 min-h-screen"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80)',
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* <div class="absolute bg-black opacity-60 inset-0 z-0"></div> */}
        <div className="h-full w-full py-16 px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
              <p className="mt-6 text-3xl font-bold text-gray-900">
                Welcome to paradise Capt!
              </p>
              <p className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
                Already have account ?{' '}
                <Link href="../user/login">
                  <a className="hover:text-rose-500 focus:text-rose-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer">
                    {' '}
                    Sign in here
                  </a>
                </Link>
              </p>
              {/* <button className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10 hover:shadow-lg">
                <FcGoogle />
                <p className="text-base font-medium ml-4 text-gray-700">
                  Continue with Google
                </p>
              </button> */}

              {/* <div className="w-full flex items-center justify-between py-5">
                <hr className="w-full bg-gray-400" />
                <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                  OR
                </p>
                <hr className="w-full bg-gray-400  " />
              </div> */}
              <div className="flex flex-col mt-5 mb-6">
                <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 ml-3 ">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                    Name:
                  </span>
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <BsFillPeopleFill />
                  </div>

                  <input
                    className="
                    w-full 
                    text-base 
                    py-2
                    pl-10
                    pr-4 
                    border-b 
                    border-gray-300 
                    focus:outline-none 
                    focus:border-lime-500"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 ml-3">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                    E-Mail Address:
                  </span>
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <MdEmail />
                  </div>
                  <label className="block">
                    <input
                      type="email"
                      className="
                    w-full 
                    text-base 
                    py-2
                    pl-10
                    pr-4 
                    border-b 
                    border-gray-300 
                    focus:outline-none 
                    focus:border-lime-500
                    disabled:bg-slate-50 
                    disabled:text-slate-500 
                    disabled:border-slate-200 
                    disabled:shadow-none
                    invalid:border-pink-500 
                    invalid:text-pink-600
                    focus:invalid:border-pink-500 
                    focus:invalid:ring-pink-500
                    peer ..."
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="text-[12px] text-red-400 ml-10 sm:ml-10 md:ml-10 lg:ml-10 invisible peer-invalid:visible">
                      * Please provide a valid email address.
                    </p>
                  </label>
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 ml-3">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                    Password:
                  </span>
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <FaLock />
                  </div>
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute block right-5 top-4 text-gray-600 select-none cursor-pointer"
                  >
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className=" w-full text-base py-2 pl-10 pr-4 border-b border-gray-300 focus:outline-none focus:border-lime-500"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="text-[12px] text-red-400 ml-10 sm:ml-10 md:ml-10 lg:ml-10 ">
                    * min. 3 character and max. 8 character
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 ml-3">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                    Gender:
                  </span>
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    {/* <BsGenderAmbiguous /> */}
                  </div>
                  <select
                    id="gender"
                    className="
                    block 
                    appearance-none 
                    w-full
                    border-b 
                    border-gray-300
                    200 text-gray-700 
                    py-3 px-4 pr-8 
                    rounded 
                    leading-tight 
                    focus:outline-none 
                    focus:bg-white 
                    focus:border-lime-500
                    "
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  >
                    <option value="" disabled selected hidden>
                      Choose Gender...
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-col mb-6">
                <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 ml-3">
                  Photo Profile:
                </label>
                <div className="relative">
                  <label className="block">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      className="
                      block 
                      w-full 
                      text-sm 
                      text-slate-500
                      file:mr-4 
                      file:py-2 
                      file:px-4
                      file:rounded-full 
                      file:border-0
                      file:text-sm 
                      file:font-semibold
                      file:bg-violet-50 
                      file:text-violet-700
                      hover:file:bg-violet-100
                    "
                      onChange={uploadToClient}
                    />
                  </label>
                </div>
              </div> */}
              <div className="flex w-full mt-3">
                <button
                  id="btn_register"
                  onClick={validateSignUp}
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-lime-500 hover:bg-lime-400 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span className="mr-2">Create My Account</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
