import { FcGoogle } from 'react-icons/fc';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLoginCircleFill } from 'react-icons/ri';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import axios from 'axios';
import ReactLoading from 'react-loading';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const validateSign = () => {
    if (email === '') {
      Swal.fire('Email is required', 'Fill your Email please', 'info');
    } else if (/\s/.test(email)) {
      Swal.fire('Fotrbiden', 'Email contain whites space', 'info');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      Swal.fire(
        'Email is using forbidden character',
        'Fill your Email with correct format please',
        'info'
      );
    } else if (password < 8) {
      Swal.fire('Password is required', 'Fill your Password please', 'info');
    } else if (/\s/.test(password)) {
      Swal.fire('Fotrbiden', 'Password contain whites space', 'info');
    } else {
      handleSign();
    }
  };

  const handleSign = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const body = {
      email: email,
      password: password,
    };
    let timerInterval;
    axios
      .post('https://aaryadewangga.cloud.okteto.net/users/login', body)
      .then(({ data }) => {
        // console.log(data.data.token);
        localStorage.setItem('token', data.data.token);
        if (data.data.roles === true) {
          setTimeout(() => {
            router.push('/admin');
          }, 4000);
        } else {
          setTimeout(() => {
            router.push('/profile');
          }, 4000);
        }

        Swal.fire({
          title: 'We welcome you captain.',
          width: 600,
          padding: '4em',
          color: '#141E27',
          background:
            '#fff url(https://cdn.wallpapersafari.com/20/93/7qZlO9.jpg)',
          backdrop: `
          rgba(0,0,123,0.4)
          url("https://i.gifer.com/origin/04/04dd45b257d177a2894578b8dcf61e2b_w200.gif")
          left top
          no-repeat
        `,
          html: 'Redirecting to home page in <b></b> milliseconds.',
          timer: 4000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector('b');
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      })
      .finally(() => {});
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center content-center h-screen">
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
          backgroundImage: 'url(https://wallpaperaccess.com/full/5193008.jpg)',
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* <div class="absolute bg-black opacity-60 inset-0 z-0"></div> */}
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Welcome Back!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please sign in to your account
            </p>
          </div>
          <div className="flex flex-row justify-center items-center space-x-3 mt-6">
            <span
              className="
            w-11 
            h-11 
            items-center 
            justify-center 
            inline-flex 
            rounded-full 
            font-bold text-lg  
            text-white  
            bg-neutral-200 
            hover:shadow-lg 
            cursor-pointer 
            transition 
            ease-in 
            duration-200"
            >
              <FcGoogle />
            </span>
          </div>
          <div className="relative mt-10 h-px bg-gray-300">
            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
              <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                Or Login With Email
              </span>
            </div>
          </div>
          <div className="mt-10">
            <form action="#">
              <div className="flex flex-col mb-6">
                <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 ml-3">
                  E-Mail Address:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <MdEmail />
                  </div>

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
                    placeholder="Password"
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="flex w-full">
                <button
                  onClick={validateSign}
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-lime-700 hover:bg-lime-500 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span className="mr-2 uppercase">Login</span>
                  <RiLoginCircleFill />
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center mt-6">
            <p className="flex flex-col items-center justify-center text-center text-md text-gray-500">
              <span>Dont have an account?</span>
              <Link href="../user/register">
                <a className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
                > Sign up
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
