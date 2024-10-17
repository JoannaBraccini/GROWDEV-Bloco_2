-- CreateEnum
CREATE TYPE "Disponibilidade" AS ENUM ('SIM', 'NAO');

-- CreateTable
CREATE TABLE "produtos" (
    "id" UUID NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "qtd_estoque" INTEGER NOT NULL,
    "tipo_produto" VARCHAR(10) NOT NULL,
    "disponivel" "Disponibilidade",
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);
