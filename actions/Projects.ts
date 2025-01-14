"use server"
import { ProjectProps } from "@/components/CreateNewProjectForm"
import { db } from "@/prisma/db"
import { revalidatePath } from "next/cache"

export async function createCode(data:ProjectProps){
  // console.log(data)
  //We create the data to be shown in the database.
  const {slug} =data

 try {
  const existingProject  = await db.projects.findUnique({
    where:{
      slug
    }
  })
 if(existingProject){
  return{
    data:null,
    error:true,
    status:409
  }
 }



  const createdProject = await db.projects.create({
    data
  })
  // console.log(createdCode)
  //Then we return to be able to use this data anywhere else eg to fetch the data on the ui.
 revalidatePath("/projects")
  return {data:createdProject,error:null,status:201}
 } catch (error) {
  console.log(error)
 }
 }