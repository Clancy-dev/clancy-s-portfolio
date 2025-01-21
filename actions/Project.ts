"use server"

import { ProjectProps } from "@/components/Forms/CreateNewProjectForm";
import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function createNewProject(data:ProjectProps){
 try {
  const createdNewProject = await db.project.create({
    data
  })
 revalidatePath("/project")

  return createdNewProject
  
 } catch (error) {
  console.log(error)
 }
}


export async function fetchProject(){
  try {
   const fetchedProject = await db.project.findMany({
    orderBy:{
      createdAt:"desc"
    }
   }) 
   return fetchedProject
  } catch (error) {
   console.log(error) 
  }
}


