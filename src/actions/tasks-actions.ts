"use server"
import { prisma } from "@/lib/prisma"; 
import { revalidatePath } from "next/cache";

// 1. BUSCAR TAREFAS (READ)
export const getTasks = async () => {
    try {
        return await prisma.tasks.findMany();
    } catch (error) {
        throw error
    }
}

// 2. CRIAR TAREFA (CREATE)
export const createTask = async (formData: FormData) => {
    const tarefa = formData.get("tarefa") as string

    if(!tarefa || tarefa.trim() === "") return

    try {
        const newTask = await prisma.tasks.create({
            data: { task: tarefa }
        });
        
        revalidatePath("/"); // Atualiza o cache da pag para mostrar a nova tarefa
        return newTask;
    } catch (error) {
        throw error
    }
}

// 3. ATUALIZAR TAREFA (UPDATE)
export const updateTask = async (id: string, formData: FormData) => {
    const novoTexto = formData.get("editarTarefaNome") as string
    if(!novoTexto || novoTexto.trim() === "") return
    try {
        const updated = await prisma.tasks.update({
            where: { id: id },
            data: { task: novoTexto }
        });
        
        revalidatePath("/");
        return updated;
    } catch (error) {
        throw error
    }
}

// 4. DELETAR TAREFA (DELETE)
export const deleteTask = async (id: string) => {
    try {
        await prisma.tasks.delete({
            where: { id }
        });
        
        revalidatePath("/");
    } catch (error) {
        throw error
    }
} 
