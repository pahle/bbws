'use server'

import prisma from "./prismaClient";

export const dataBabSDA = async () => {
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

export const dataSubBabSDA = async () => {
    try {
        const query = await prisma.sub_Bab.findMany();
        return query;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect();
    }
}

export const dataDokumenSDA = async () => {
    try {
        const query = await prisma.dokumen.findMany();
        return query;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect();
    }
}