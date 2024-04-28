'use server'

import prisma from "./prismaClient";

export const createData = async (value) => {
    const data = {
        kode_surat: value.kode_surat,
        tahun: value.tahun,
        judul: value.judul,
        file: value.file,
        sub_babId: value.sub_babId,
    }
    try {
        const queryCreate = await prisma.dokumen.create({
            data: data,
        });
        return queryCreate;
    } catch (error) {
        console.error(error);
    }
}

export const createDataSubBab = async (value) => {
    const data = {
        judul: value.judul,
        babId: value.babId,
    }
    try {
        const queryCreate = await prisma.sub_Bab.create({
            data: data,
        });
        return queryCreate;
    } catch (error) {
        console.error(error);
    }
}
