import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Plus,
  List,
  Check,
  CircleMinus,
  Pencil,
  Trash,
  ListCheck,
  Sigma,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const page = () => {
  return (
    <main className="w-full h-screen bg-slate-100 flex justify-center items-center">
      <Card className="w-lg">
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar tarefa" />
          <Button variant="outline" className="cursor-pointer">
            <Plus /> Cadastrar
          </Button>
        </CardHeader>
        <CardContent>
          <Separator className="mb-4" />
          {/* Icones de filtro da lista */}
          <div className="flex gap-2">
            <Badge variant="default" className="cursor-pointer">
              <List /> Todas
            </Badge>
            <Badge variant="outline" className="cursor-pointer">
              <CircleMinus /> Não finalizadas
            </Badge>
            <Badge variant="outline" className="cursor-pointer">
              <Check /> Concluídas
            </Badge>
          </div>

          {/* Elementos da lista */}

          <div className="mt-4 border-b ">
            <div className="h-14 flex justify-between items-center">
              <div className="w-1 h-full bg-green-300"></div>
              <p className="flex-1 px-2 text-sm">Estudar React</p>
              <div className="flex items-center gap-4 ">
                <Dialog>
                  <DialogTrigger asChild>
                    <Pencil size={16} className="cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar Tarefa</DialogTitle>
                    </DialogHeader>
                    <div className="flex gap-2">
                      <input placeholder="Editar tarefa" />
                      <Button className="cursor-pointer">Editar</Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Trash size={16} className="cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Rodape da lista */}
          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <ListCheck size={18} />
              <p className="text-sm">Tarefas concluídas (3/3)</p>
            </div>
            {/*dialog*/}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  className="text-xs h-7 cursor-pointer"
                  variant="outline"
                >
                  {" "}
                  <Trash /> Limpar Tarefas Concluídas
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Tem certeza que deseja excluir x itens?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Sim</AlertDialogAction>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          {/* Barra de progresso */}
          <div className="h-2 w-full bg-red-300 mt-4 rounded-md">
            <div
              className="h-full bg-gray-300 rounded-md"
              style={{ width: "50%" }}
            ></div>
          </div>

          <div className="flex justify-end items-center mt-2 gap-2">
            <Sigma size={18} />
            <p className="text-xs">3 tarefas no total</p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default page;
