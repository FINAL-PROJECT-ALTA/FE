import { FcGoogle } from 'react-icons/fc';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import { BsGenderAmbiguous } from 'react-icons/bs';
import { useState, useEffect } from 'react';

function RegisterForm() {
  const [gender, setGender] = useState(['Male', 'Female']);
  const Add = gender.map((Add) => Add);
  return (
    <div>
      <div
        className="flex justify-center items-center bg-gray-300 min-h-screen"
        style={{
          backgroundImage: 'url(https://wallpaperaccess.com/full/5193008.jpg)',
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
                <a
                  href="../user"
                  className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
                >
                  {' '}
                  Sign in here
                </a>
              </p>
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10 hover:shadow-lg">
                <FcGoogle />
                <p className="text-base font-medium ml-4 text-gray-700">
                  Continue with Google
                </p>
              </button>

              <div className="w-full flex items-center justify-between py-5">
                <hr className="w-full bg-gray-400" />
                <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                  OR
                </p>
                <hr className="w-full bg-gray-400  " />
              </div>
              <div className="flex flex-col mb-6">
                <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 ml-3">
                  Name:
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
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 ml-3">
                  E-Mail Address:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <MdEmail />
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
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 ml-3">
                  Password:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <FaLock />
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
                    focus:border-lime-500
                   "
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 ml-3">
                  Gender:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    {/* <BsGenderAmbiguous /> */}
                  </div>
                  <select
                    className="
                                                block 
                                                appearance-none 
                                                w-full
                                                py-2
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
                  >
                    {Add.map((el, i) => (
                      <option i={i} value={i}>
                        {el}{' '}
                      </option>
                    ))}
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
              <div className="flex w-full mt-3">
                <button
                  type="submit"
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-lime-700 hover:bg-lime-500 rounded py-2 w-full transition duration-150 ease-in"
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
