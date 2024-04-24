'use server'

import prisma from "./prismaClient";

export const createData = async (value) => {
    // const data = {
    //     key: value.key,
    //     judul: value.judul,
    //     deskripsi: value.deskripsi,
    //     kategori: value.kategori,
    // }
    try {
        const queryCreate = await prisma.data.create({
            data: value,
        });
        return queryCreate;
    } catch (error) {
        console.error(error);
    }
}
