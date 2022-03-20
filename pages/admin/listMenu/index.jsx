import { useRouter } from 'next/router';
import FeatureTitle from '../../../components/featureTitle';
import NavbarApp from '../../../components/navbar_admin';
import { AiOutlinePlus } from 'react-icons/ai';
import { GoTrashcan } from 'react-icons/go';
import ReactLoading from 'react-loading';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { MdOutlineEdit } from 'react-icons/md';
import Pagnination from '../../../components/pagination';

function ListMenu() {
  const [data, setData] = useState([]);
  const [menu, setMenu] = useState('');
  const [loading, setLoading] = useState(false);
  const [idFood, setIdFood] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

  const router = useRouter();

  const food_categories = router.query.category;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getToken =
    typeof window !== 'undefined' ? localStorage.getItem('token_admin') : null;
  useEffect(() => {
    if (!localStorage.getItem('token_admin')) {
      router.push('/user/login');
    }
  }, []);

  useEffect(() => {
    if (food_categories) {
      const token = localStorage.getItem('token_admin');
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios
        .get(
          `https://aaryadewangga.cloud.okteto.net/menus?category=${food_categories}`,
          config
        )
        .then(({ data }) => {
          const findFood = data.data.find(
            (el) => el.menu_category === food_categories
          );

          if (findFood) {
            setMenu(findFood.menu_category);
          }

          setData(data.data);
        })
        .catch((err) => {
          console.log(err, 'error');
        });
    }
  }, [router]);

  const handleDelete = (id) => {
    const token = localStorage.getItem('token_admin');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        axios
          .delete(`https://aaryadewangga.cloud.okteto.net/menus/${id}`, config)
          .then(({ data }) => {
            setTimeout(() => {
              router.push('../admin');
            }, 1500);
            Swal.fire('Delete Successfully', 'The menu has gone', 'success');
          })
          .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
            console.log(error);
          })
          .finally(() => {});
      } else if (result.isDismissed) {
        Swal.fire('Check again ?', 'We are waiting you inside', 'question');
      }
    });
  };

  useEffect(() => {
    if (!localStorage.getItem('token_admin')) {
      router.push('/user/login');
    }
  }, []);

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
      <NavbarApp />
      <div className="px-10 h-screen">
        <FeatureTitle />
        <div className="mt-3">
          <div className="flex  justify-between">
            <FeatureTitle text={menu} />
            <Link
              href={{
                pathname: '/admin/addMenu',
                query: {
                  category: menu,
                },
              }}
            >
              <button className="flex  items-center justify-end focus:outline-none text-white text-sm sm:text-base bg-green-700 hover:bg-lime-500 rounded py-2 w-[7rem] sm:w-[8rem] md:w-[8rem] lg:w-[8rem]  transition duration-150 ease-in">
                <AiOutlinePlus size={20} className="ml-2" />
                <span className="ml-1 mr-2">Add menu</span>
              </button>
            </Link>
          </div>

          {currentPost ? (
            currentPost.map((el, i) => (
              <div
                className="flex px-5 py-2 my-3 border mb-5 shadow-lg bg-transparent max-w-lg mx-auto drop-shadow-lg rounded-xl"
                key={i.menu_uid}
              >
                <div>
                  {currentPost[i].foods.map((el, i) => (
                    <div className="flex text-gray-600" key={i}>
                      <span className="text-md md:text-lg w-24 sm:w-40 md:w-40 lg:w-40 font-sans mt-1.5 truncate ">
                        {el.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex-1 text-center py-10 space-x-2 items-center text-gray-600 ">
                  <span className="text-lg md:text-xl font-sans mt-1 bg-lime-500 rounded-[5px] px-1 py-1 ">
                    {el.total_calories}Cal
                  </span>
                </div>

                <div className="flex-1 text-right justify-center py-3 mx-auto">
                  <Link
                    href={`/admin/editMenu?menuId=${el.menu_uid}`}
                    key={el.menu_uid}
                  >
                    <button className="w-[55px] bg-yellow-500/60 hover:bg-yellow-700/80 text-white font-bold py-2 px-4 border mb-2 rounded">
                      <MdOutlineEdit size={20} />
                    </button>
                  </Link>
                  <div>
                    <button
                      className="w-[55px] bg-red-500/60 hover:bg-red-700/80 text-white font-bold py-2 px-4 border  rounded"
                      onClick={() => {
                        handleDelete(el.menu_uid);
                      }}
                    >
                      <GoTrashcan size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <h1 className="text-lg font-medium text-gray-400 italic ">
                Result Empty
              </h1>
            </>
          )}
        </div>
      </div>
      <div className="mx-auto">
        <Pagnination
          postPerPage={postPerPage}
          totalPosts={data.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default ListMenu;
