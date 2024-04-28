// edit data from database and replace the file if the file is different

// Path: src/utils/getQueryOutputs.js

'use server'

import prisma from "./prismaClient";

export const editData = async (value) => {
    try {
        const query = await prisma.dokumen.update({
            where: {
                id: value.id
            },
            data: {
                kode_surat: value.kode_surat,
                judul: value.judul,
                deskripsi: value.deskripsi,
                file: value.file,
                sub_babId: value.sub_babId
            }
        });

        return query;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect();
    }
}