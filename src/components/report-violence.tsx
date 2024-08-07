"use client";

import { Fragment, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function ReportViolence() {
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccess(true);
  }

  return (
    <Dialog
      onOpenChange={(isOpen) => {
        if (isOpen) {
          setSuccess(false);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button>Denunciar Violência</Button>
      </DialogTrigger>

      <DialogContent className="max-h-[80vh] overflow-auto">
        {success ? (
          <div className="space-y-3">
            <DialogHeader>
              <DialogTitle className="text-xl">Denúncia enviada!</DialogTitle>
            </DialogHeader>

            <p>
              Sua denúncia foi enviada com sucesso. Agradecemos por contribuir
              com a segurança de todos.
            </p>
          </div>
        ) : (
          <Fragment>
            <DialogHeader>
              <DialogTitle>Faça sua denúncia</DialogTitle>
            </DialogHeader>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="nome">Nome do agressor</Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Digite o nome completo"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="data">Data e hora do ocorrido</Label>
                <Input id="data" type="datetime-local" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="local">Local</Label>
                <Input
                  id="local"
                  type="text"
                  placeholder="Digite o local do ocorrido"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ocorrido">Descreva o ocorrido</Label>
                <Textarea
                  id="ocorrido"
                  placeholder="Descreva o ocorrido detalhadamente"
                  required
                />
              </div>

              <p className="text-sm italic text-red-500">
                **Este site é uma demonstração. Desconsidere a função de
                denunciar.
              </p>

              <Button className="w-full">Enviar denúncia</Button>
            </form>
          </Fragment>
        )}
      </DialogContent>
    </Dialog>
  );
}
