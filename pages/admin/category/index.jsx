import NavbarApp from '../../../components/navbar_admin';
import FeatureTitle from '../../../components/featureTitle';
import { MdOutlineEdit } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { GoTrashcan } from 'react-icons/go';
import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import ReactLoading from 'react-loading';
import Swal from 'sweetalert2';
import Pagnination from '../../../components/pagination';

function Category() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [idFood, setIdFood] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

  console.log(data);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const router = useRouter();

  const food_categories = router.query.foodsCategory;

  const getToken =
    typeof window !== 'undefined' ? localStorage.getItem('token_admin') : null;

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
          `https://aaryadewangga.cloud.okteto.net/foods?category=${food_categories}`,
          config
        )
        .then(({ data }) => {
          const findFood = data.data.find(
            (el) => el.food_categories === food_categories
          );

          if (findFood) {
            setCategory(findFood.food_categories);
            setName(findFood.name);
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
          .delete(`https://aaryadewangga.cloud.okteto.net/foods/${id}`, config)
          .then(({ data }) => {
            setTimeout(() => {
              router.push('../admin');
            }, 1500);
            Swal.fire('Delete Successfully', 'The food has gone', 'success');
          })
          .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
            console.log(error);
          })
          .finally(() => { });
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
    <>
      <NavbarApp />
      <div className="px-10 py-2 min-h-screen w-full bg-white">
        <div className="flex px-2 justify-between">
          <FeatureTitle text={category} />

          <button
            onClick={() => {
              router.push('../admin/addFood');
            }}
            className="inline-flex text-right justify-end focus:outline-none text-white text-sm sm:text-base bg-green-700 hover:bg-lime-500 rounded py-2 w-[7rem] sm:w-[8rem] md:w-[8rem] lg:w-[8rem]  transition duration-150 ease-in"
          >
            <AiOutlinePlus size={20} className="ml-2" />
            <span className="ml-1 mr-2">Add {category}</span>
          </button>
        </div>

        <div className=" my-5 ">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 sm:gap-5 md:gap-5 mt-3 h-vh">
            {currentPost ? (
              currentPost.map((el, i) => (
                <div className="w-30 h-30 mb-3  rounded-md drop-shadow-sm cursor-pointer" key={i}>
                  <div className="">
                    <img src={el.image} alt="" className="bg-slate-50 h-28 object-cover rounded-t-md" width="100%"
                    />

                    <p className="-translate-y-6 text-md bg-lime-700/40 font-medium  bg-blend-darken text-white text-center truncate ">
                      {el.name}
                    </p>
                    <div className="flex justify-around -translate-y-6">
                      <Link href={`/admin/editFood?foodsId=${el.food_uid}`}
                        key={el.food_uid}
                      >
                        <button className="w-full   hover:bg-orange-500 text-gray-600 font-semibold py-2 px-4 border  rounded shadow mr-5">
                          <MdOutlineEdit size={20} />
                        </button>
                      </Link>

                      <button
                        className="w-full  hover:bg-red-700 text-red-400 font-bold py-2 px-4 border  rounded"
                        onClick={() => {
                          handleDelete(el.food_uid);
                          // handleDelete();
                        }}
                      >
                        <center>
                          <GoTrashcan size={20} />
                        </center>
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
          <Pagnination
            postPerPage={postPerPage}
            totalPosts={data.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}

export default Category;
