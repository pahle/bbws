import React from "react";
import DeleteButton from "./DeleteButton";
import Search from "./Search";
import {
  dataDokumen,
  dataSubBab,
} from "@/utils/getQueryOutputs";
import Link from "next/link";
import { cookies } from "next/headers";

const Dokumen = async (params) => {
  const data = await dataDokumen();

  const filteredData = data.filter(
    (item) => item.sub_babId == params.params.idSubBab
  );

  const dataSubBabFasilitatif = await dataSubBab();

  const filteredDataSubBab = dataSubBabFasilitatif.find(
    (item) => item.id == params.params.idSubBab
  );

  const searchedData = filteredData.filter((item) => {
    if (!params.searchParams.search) {
      return filteredData;
    }
    return (
      item.kode_surat
        .toLowerCase()
        .includes(params.searchParams.search) ||
      item.tahun
        .toLowerCase()
        .includes(params.searchParams.search) ||
      item.judul
        .toLowerCase()
        .includes(params.searchParams.search) ||
      item.file
        .toLowerCase()
        .includes(params.searchParams.search)
    );
  });

  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              {filteredDataSubBab.judul}
            </h1>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            {(cookies().get("session").value === "admin" ||
              cookies().get("session").value ===
                "operator") && (
              <Link
                href={`/sda/${params.params.id}/${params.params.idSubBab}/create`}
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Tambah Dokumen
              </Link>
            )}
          </div>
        </div>
        <div className="my-4">
          <Search />
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Kode Surat
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Tahun
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Judul
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      File
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Tanggal Input
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 col-span-3"
                      colSpan={3}
                    >
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {searchedData.map((item, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {item.kode_surat}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.tahun}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.judul}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.file}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.created_at.toDateString()}
                      </td>
                      <td className="relative whitespace-nowrap text-center text-sm font-medium">
                        <Link
                          href={`/api?filename=${item.file}`}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Lihat
                          <span className="sr-only">
                            , {item.judul}
                          </span>
                        </Link>
                      </td>
                      {cookies().get("session").value ===
                        "admin" && (
                        <td className="relative whitespace-nowrap text-center text-sm font-medium">
                          <Link
                            href={`/sda/${params.params.id}/${params.params.idSubBab}/edit?id=${item.id}`}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                            <span className="sr-only">
                              , {item.name}
                            </span>
                          </Link>
                        </td>
                      )}
                      {cookies().get("session").value ===
                        "admin" && (
                        <td className="relative whitespace-nowrap py-4 text-center text-sm font-medium">
                          <DeleteButton id={item.id} />
                          <span className="sr-only">
                            , {item.name}
                          </span>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dokumen;
