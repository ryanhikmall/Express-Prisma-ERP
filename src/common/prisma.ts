import { PrismaClient } from '@prisma/client';

// Membuat instance Prisma Client yang bisa dipakai di seluruh aplikasi
const prisma = new PrismaClient();

export default prisma;