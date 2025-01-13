"use server";

import { CodeSnippetProps } from "@/components/CreateNewCodeSnippetForm";
import { db } from "@/prisma/db";
import { error } from "console";
import { revalidatePath } from "next/cache";

export async function createCode(data:CodeSnippetProps){
  // console.log(data)
  //We create the data to be shown in the database.
  const {slug} =data

 try {
  const existingCode  = await db.codeSnippet.findUnique({
    where:{
      slug
    }
  })
 if(existingCode){
  return{
    data:null,
    error:true,
    status:409
  }
 }

  const createdCode = await db.codeSnippet.create({
    data
  })
  // console.log(createdCode)
  //Then we return to be able to use this data anywhere else eg to fetch the data on the ui.
 revalidatePath("/docs")
  return {data:createdCode,error:null,status:201}
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


export async function deleteCode(id:string) {
  try {
  await db.codeSnippet.delete({
    where:{
      id
    }
       })
          revalidatePath("/docs")
    return {ok:true}
  } catch (error) {
   console.log(error) 
   return{ok:false}
  }
}


export async function fetchSingleCode(slug:string){
  try {
  const singleCode = await db.codeSnippet.findUnique({
    where:{
      slug
    }
  }) 
  return singleCode 
  } catch (error) {
   console.log(error) 
  }
}


export async function updateCode(data:CodeSnippetProps, id:string){
  try {
   const updatedData = await db.codeSnippet.update({
    where:{
      id
    },
    data
   }
   ) 
   revalidatePath("/docs")
   return updatedData
  } catch (error) {
  console.log(error)  
  }
}