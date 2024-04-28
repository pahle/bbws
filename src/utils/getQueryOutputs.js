'use server'

import prisma from "./prismaClient";

export const dataBab = async () => {
    try {
        const query = await prisma.bab.findMany({
            include: {
                sub_bab: true
            }
        });
        return query;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect();
    }
}

export const dataSubBab = async () => {
    try {
        const query = await prisma.sub_Bab.findMany({
            include: {
                dokumen: true
            }
        });
        return query;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect();
    }
}

export const dataDokumen = async () => {
    try {
        const query = await prisma.dokumen.findMany();
        return query;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect();
    }
}