"use client";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getName, updateName, deleteName } from "@/app/lib/functions";

export const List = () => {
  const [data, setData] = useState([] as any);
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getName();
        // const response = await axios.get("/api/getName");
        setData(response);
        // console.log(response.data); // Use 'response' instead of 'data'
      } catch (error) {
        toast.error("Error Fetching Names dud");
      }
    };
    fetchData();
  }, []);

  const handleChange = async (name: string, id: number) => {
    try {
      await updateName(name, id);
    } catch (error) {
      console.log(error);
      toast.error("Error updating dud");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteName(id);
    } catch (error) {
      console.log(error);
      toast.error("Erorr duds");
    }
  };

  return (
    <div className="flex flex-row gap-2">
      <div className="min-h-72 max-w-full bg-slate-400 w-full p-6 rounded-md p">
        <h1>Name List:</h1>
        {data.map((name: any) => (
          <ul
            key={name.id}
            className="border rounded-md bg-slate-300 relative p-10 flex flex-col gap-2"
          >
            <li
              onClick={() => setIsVisible(true)}
              className="text-black my-2 flex justify-around gap-12"
            >
              <span>{name.name}</span>
              <button
                onClick={() => handleDelete(name.id)}
                className="p-4 border rounded-md bg-slate-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 border rounded-full bg-white h-[4vh] w-[4vw] hover:bg-slate-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </li>
          </ul>
        ))}
      </div>
      <div className="flex flex-row gap-2">
        {isVisible ? (
          <div className="h-[50vh] w-[50vw] bg-white rounded-md">
            {data.map((item: any) => (
              <div
                key={item.id}
                className="border rounded-md bg-slate-300 relative p-10 flex flex-col gap-2"
              >
                <label>{item.name}</label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <button
                  className="p-4 border rounded-md bg-slate-100"
                  onClick={() => handleChange(name, item.id)}
                >
                  Update Name here pls
                </button>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};
