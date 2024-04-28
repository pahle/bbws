"use client";

import React from "react";
import { deleteDataSubBab } from "@/utils/deleteData";
import { useRouter } from "next/navigation";
import Image from "next/image";

const DeleteButton = (id) => {
  const router = useRouter();
  const handleDelete = async () => {
    await deleteDataSubBab(id);
    router.refresh();
  };
  return (
    <button
      onClick={handleDelete}
      className="text-red-600 hover:text-red-900"
    >
      <Image
        src="/remove.png"
        alt="remove"
        width={40}
        height={40}
      />
    </button>
  );
};

export default DeleteButton;
