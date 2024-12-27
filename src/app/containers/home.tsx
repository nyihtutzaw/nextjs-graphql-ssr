'use client';

import React, { useCallback } from 'react'
import { GetCountriesResponse } from '../types';
import { useRouter } from 'next/navigation';

type Props = {
    data: GetCountriesResponse;
}

function Home({ data }: Props) {

    const router = useRouter();

    const handleSearch = useCallback((e: any) => {
        if (e.key === "Enter") {
            router.push("?search=" + e.target.value);
        }
    }, [])

    return (
        <>
            <div className="flex py-4 px-4">
                <div className="relative w-full">
                    <label htmlFor="Search" className="sr-only"> Search </label>
                    <input
                        type="text"
                        id="Search"
                        placeholder="Search for..."
                        className="w-full rounded-md border-2 border-gray-500 py-2.5 px-4 pe-10 shadow-sm sm:text-sm"
                        onKeyDown={handleSearch}
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Capital</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Code</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Continent</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Currency</th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {data?.countries?.map((country: any, index: number) => {
                            return (
                                <tr key={`country-list-${index}`}>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">{country.name}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{country.capital}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{country.code}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{country.continent.name}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{country.currency}</td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <a
                                            href="#"
                                            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            View
                                        </a>
                                    </td>
                                </tr>
                            )

                        })}


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Home