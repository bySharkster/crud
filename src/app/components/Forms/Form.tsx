"use client";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [formData, setFormData] = useState({ name: "" });

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/createName", formData);
      setFormData({ name: "" });
      toast.success(response);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <div className="border rounded-md bg-slate-300 relative p-10 flex-row flex justify-center gap-2 mx-auto">
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ name: e.target.value })}
          className="border rounded-xl shadow-md hover:drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-80 h-10 px-3 py-3 text-base text-gray-700 placeholder-transparent bg-white focus:border-transparent peer max-w-full my-8"
          placeholder=" "
        />

        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white font-bold p-4 my-2 rounded hover:bg-blue-700"
        >
          WAGYU NAME?
        </button>
      </div>

      <ToastContainer />
    </>
  );
}
