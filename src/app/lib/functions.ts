import { createClient } from "../../../utils/supabase/client";

const supabase = createClient();

export async function createName(name: string) {
  try {
    const { data } = await supabase
      .from("crudname")
      .insert([{ name: name }])
      .select();

    if (data) {
      console.log("its good dud");
    }
  } catch (error) {
    console.log("error in this nigga:", error);
    return error;
  }
}

export async function getName() {
  try {
    const { data: crudname } = await supabase.from("crudname").select("*");

    if (crudname) {
      console.log("fetched items dud", crudname);
      return crudname;
    }
  } catch (error) {
    console.log("error in this nigga:", error);
  }
}

export async function updateName(name: string, id: number) {
  try {
    const { data } = await supabase // variable from db
      .from("crudname") // which table:
      .update({ name: name }) //  which column: where working with
      .eq("id", id) //row : first value has to match column name exactly and id has to match the item we want to edit
      .select();

    if (data) {
      console.log("");
    }
  } catch (error) {
    console.log("error in this nigga:", error);
  }
}

export async function deleteName(id: number) {
  try {
    const { error } = await supabase.from("crudname").delete().eq("id", id);
    if (error) {
      console.log("your a cunt: fix yur shit");
    }
  } catch (error) {
    console.log(error);
  }
}
