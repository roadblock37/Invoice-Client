import {createApi, fetchBaseQuery, getchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/v1'}),
    endpoints: builder => ({
        getInvoices: builder.query({
            query: () => '/invoices'
        })
    })
})

export const {useGetInvoicesQuery} = apiSlice

