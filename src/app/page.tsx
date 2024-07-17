import React from "react";
import Form from "@/app/components/Forms/Form";
import { List } from "@/app/components/List/List";

export default function Home() {
  return (
    <main className="bg-slate-800">
      <section className="mx-auto my-8 flex flex-col w-full justify-center gap-2 px-6">
        <h1 className=" text-white font-extrabold">Simple One Input Form</h1>

        <Form />
        <List />
      </section>
    </main>
  );
}
