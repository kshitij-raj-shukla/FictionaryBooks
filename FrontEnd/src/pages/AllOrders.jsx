import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loder/Loader';
import { FaCheck } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";


const AllOrders = () => {
  const [AllOrders, setAllOrders] = useState();
  const [Options, setOptions] = useState(-1)
  const [Values, setValues] = useState({status:""});
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    //bookid:AllOrders._id,
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:1000/api/v1/get-all-orders", { headers })
      setAllOrders(response.data.data);
      // console.log(response.data.data);
    };
    fetch();
  }, [AllOrders]);

  const change=(e)=>{
    const {value}=e.target;
    setValues({status:value});
  };
  const submitChanges=async () => {
    const id=AllOrders[i]._id;
    const response = await axios.put("http://localhost:1000/api/v1/update-status/${id}", Values,{ headers });
    alert(response.data.message);
  };
  // const setOptionsButton=(i)=>{
  //   setOptions
  // }
  AllOrders&&AllOrders.splice(AllOrders.length - 1,1);
  console.log(AllOrders,AllOrders&&AllOrders.map((items,i)=>(
    items.book
  )));
  return (
    <>
      {!AllOrders && (
        <div className='h-[100%] flex items-center justify-center'>
          {" "}<Loader />{" "}
        </div>
      )}

      {AllOrders && AllOrders.length > 0 &&
        (
          <div className="h-[100%] p-0 md:p-4text-zinc-100 ml-8">
            <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
              All orders
            </h1>
            <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2 mb-4">
              <div className="w-[3%]">
                <h1 className="text-center">Sr.</h1>
              </div>
              <div className="w-[22%] ">
                <h1 className="">Books</h1>
              </div>
              <div className="w-[45%]">
                <h1 className="">Description</h1>
              </div>
              <div className="w-[9%]">
                <h1 className="">Price</h1>
              </div>
              <div className="w-[16%]">
                <h1 className="">Status</h1>
              </div>
              <div className="w-none md:w-[5%] hidden md:block">
                <h1 className=''>Mode</h1>
              </div>
            </div >
            {AllOrders.map((items, i) => (
              <div className="bg-zinc-800 w-full rounded py-2 px-4 flex gap-2 hover:bg-zinc-900">
                <div className="w-[3%]">
                  <h1 className="text-center">{i + 1}</h1>
                </div>
                <div className="w- [40%] md:w-[22%]">
                  <Link
                    to={`/get-book-id/${items.book._id}`}
                    className="hover: text-blue-300">
                    {items.book.title}
                  </Link>
                </div>
                <div className="w-0 md: w- [45%] hidden md:block">
                  <h1 lassName="">{items.book.desc.slice(0, 50)} ...</h1>
                </div>
                <div className="w-[17%] md:w-[9%]">
                  <h1 className=""> {items.book.price}</h1>
                </div>
                <div className="w- [30%] md:w-[16%]">
                  <h1 className="font-semibold ">
                    <button className="hover:scale-105 transition-all duration-300" onClick={()=>setOptions(i)}>
                      {items.status === "Order placed" ? (
                        <div className="text-yellow-500">{items.status}</div>
                      ) : items.status === "Canceled" ? (
                        <div className=" text-red-500">{items.status}</div>
                      ) : (
                        <div className="text-green-500">{items.status}</div>
                      )}
                    </button>
                    <div className={`${Options===i? "flex":"hidden"}`}>
                      <select name="status" id="" className=" bg-gray-800" onChange={change} value={Values.status}>
                        {[
                          "Order placed",
                          "Out for delivery",
                          "Delivered",
                          "Canceled",
                        ].map((items, i) => (
                          <option value={items} key={i}>
                            {items}
                          </option>
                        ))}
                      </select>
                      <button className="text-green-500 hover:text-pink-600 mx-2"
                      onClick={()=>{
                        setOptions(-1);
                        submitChanges(i);
                      }}
                      >
                        <FaCheck />
                      </button>
                    </div>
                  </h1>
                </div>
                <div className="w- [10%] md:w-[5%]">
                  <button
                    className=" text-xl hover:text-orange-500">
                    onclick={() => {
                      setuserDiv("fixed");
                      setuserDivData(items.user);
                    }}
                    <IoOpenOutline />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
    </>
  )
}

export default AllOrders;
