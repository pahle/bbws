'use server'

import prisma from "./prismaClient";
import fs from "fs";
import path from "path";

export const deleteFile = async (value) => {
    try {
        const filePath = path.join(process.cwd(), "public/assets", value);

        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(err);
            }
        });

        return query;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect();
    }
}

export const deleteData = async (value) => {
    try {
        const query = await prisma.dokumen.delete({
            where: {
                id: value.id
            }
        });

        const filePath = path.join(process.cwd(), "public/assets", query.file);

        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(err);
            }
        });

        return query;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect();
    }
}
