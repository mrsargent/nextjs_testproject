// import { PrismaClient } from '@prisma/client'

// const prismaClientSingleton = () => {
//   return new PrismaClient()
// }

// type prismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

// const globalForPrisma = globalThis as unknown as {
//     prisma: prismaClientSingleton | undefined
// }


// export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// export default prisma;

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma


import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
