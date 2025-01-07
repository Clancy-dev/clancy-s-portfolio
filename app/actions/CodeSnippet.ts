"use server";

import { CodeSnippetProps } from "@/components/CreateNewCodeSnippetForm";
import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function createCode(data:CodeSnippetProps){
  // console.log(data)
  //We create the data to be shown in the database.
 try {
  const createdCode = await db.codeSnippet.create({
    data
  })
  // console.log(createdCode)
  //Then we return to be able to use this data anywhere else eg to fetch the data on the ui.
 revalidatePath("/docs")
  return createdCode
 } catch (error) {
  console.log(error)
 }
}


export async function fetchCode(){
  try {
   const fetchedCode = await db.codeSnippet.findMany({
    orderBy:{
      createdAt:"desc"
    }
   }) 
   return fetchedCode
  } catch (error) {
   console.log(error) 
  }
}
