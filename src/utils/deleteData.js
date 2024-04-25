'use server'

import prisma from "./prismaClient";

export const deleteData = async (value) => {
    try {
        const queryDelete = await prisma.dokumen.delete({
            where: {
                id: value.id,
            },
        });
        return queryDelete;
    } catch (error) {
        console.error(error);
    }
}
