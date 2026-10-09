"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose, // fecha o modal automaticamente
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { updateTask } from "@/actions/tasks-actions";

interface EditTaskProps {
  task: {
    id: string;
    task: string;
  };
}

export const EditTask = ({ task }: EditTaskProps) => {
  const updateTaskWithId = updateTask.bind(null, task.id);

  return (
    <Dialog>
      <DialogTrigger
        render={
          <button className="cursor-pointer bg-transparent border-0 flex items-center justify-center">
            <Pencil size={16} />
          </button>
        }
      />

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Tarefa</DialogTitle>
        </DialogHeader>

        {/* Envolvemos tudo no formulário com a action */}
        <form action={updateTaskWithId} className="flex gap-2 w-full mt-2">
          <Input
            name="editarTarefaNome"
            defaultValue={task.task || ""}
            placeholder="Editar tarefa"
            className="flex-1"
          />

          {/* Envolvemos o botão no DialogClose para o modal fechar quando salvar */}
          <DialogClose
            render={
              <Button type="submit" className="cursor-pointer">
                Editar
              </Button>
            }
          />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditTask;
