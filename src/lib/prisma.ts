// src/lib/prisma.ts
import { PrismaClient } from "@/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ 
  connectionString: process.env.DATABASE_URL 
});

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

// Exporta o Prisma para poder usar em todo o projeto
export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
