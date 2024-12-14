import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllOrders() {
  return await prisma.order.findMany({ include: { user: true } });
}

export async function createOrder(data) {
  return await prisma.order.create({ data:{ 
    userId: data.userId,
    total: data.total
} });
}
