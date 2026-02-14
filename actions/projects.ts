"use server"

import { revalidatePath } from "next/cache"
import { db } from "@/lib/db"
import { requireAuth } from "@/lib/auth"
import type { Category } from "@prisma/client"

export interface ProjectFormData {
  name: string
  description: string
  liveUrl?: string
  image?: string
  techStack: string[]
  category: Category
}

// when not authenticated
export async function getAllProjectsPublic() {
  try {
    const projects = await db.project.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: {
            name: true,
            avatar: true,
          },
        },
      },
    })

    return projects
  } catch (error) {
    console.error("Get all public projects error:", error)
    return []
  }
}


// when authenticated
export async function createProjectAction(data: ProjectFormData) {
  try {
    const { user } = await requireAuth()

    const project = await db.project.create({
      data: {
        name: data.name,
        description: data.description,
        liveUrl: data.liveUrl || null,
        image: data.image || null,
        techStack: data.techStack,
        category: data.category,
        userId: user.id,
      },
    })

    revalidatePath("/dashboard")
    revalidatePath("/dashboard/projects")
    revalidatePath("/dashboard/latest")

    return { success: true, project }
  } catch (error) {
    console.error("Create project error:", error)
    return { success: false, error: "Failed to create project" }
  }
}

export async function updateProjectAction(id: string, data: ProjectFormData) {
  try {
    const { user } = await requireAuth()

    const project = await db.project.findFirst({
      where: { id, userId: user.id },
    })

    if (!project) {
      return { success: false, error: "Project not found" }
    }

    const updatedProject = await db.project.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        liveUrl: data.liveUrl || null,
        image: data.image || null,
        techStack: data.techStack,
        category: data.category,
      },
    })

    revalidatePath("/dashboard")
    revalidatePath("/dashboard/projects")
    revalidatePath("/dashboard/latest")

    return { success: true, project: updatedProject }
  } catch (error) {
    console.error("Update project error:", error)
    return { success: false, error: "Failed to update project" }
  }
}

export async function deleteProjectAction(id: string) {
  try {
    const { user } = await requireAuth()

    const project = await db.project.findFirst({
      where: { id, userId: user.id },
    })

    if (!project) {
      return { success: false, error: "Project not found" }
    }

    await db.project.delete({
      where: { id },
    })

    revalidatePath("/dashboard")
    revalidatePath("/dashboard/projects")
    revalidatePath("/dashboard/latest")

    return { success: true }
  } catch (error) {
    console.error("Delete project error:", error)
    return { success: false, error: "Failed to delete project" }
  }
}

export async function getProjectsAction() {
  try {
    const { user } = await requireAuth()

    const projects = await db.project.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    })

    return projects
  } catch (error) {
    console.error("Get projects error:", error)
    return []
  }
}

export async function getProjectAction(id: string) {
  try {
    const { user } = await requireAuth()

    const project = await db.project.findFirst({
      where: { id, userId: user.id },
    })

    return project
  } catch (error) {
    console.error("Get project error:", error)
    return null
  }
}
