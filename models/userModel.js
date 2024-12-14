import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllUsers() {
    return await prisma.user.findMany();
}

export async function getUserById(id) {
    return await prisma.user.findUnique({ where: { id: Number(id) } });
}

export async function createUser(data) {
    return await prisma.user.create({ data: {
        name: data.name,
        email: data.email,
    } });
}

export async function deleteUser(id) {
    return await prisma.user.delete({ where: { id: Number(id) } });
}
