"use server"
// import { ProjectProps } from "@/components/Forms/CreateNewProjectForm";
// import { db } from "@/prisma/db";
import { ProjectProps } from "@/components/Forms/CreateNewProjectForm";
import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";


export async function createNewProject(data:ProjectProps){
  console.log(data)
  //We create the data to be shown in the database.
 try {
  const createdNewProject = await db.project.create({
    data
  })
  console.log(createdNewProject)
  //Then we return to be able to use this data anywhere else eg to fetch the data on the ui.
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


