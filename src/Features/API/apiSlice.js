import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getInvoices: builder.query({
      query: () => '/invoices',
    }),
    createInvoice: builder.mutation({
      query: (payload) => ({
        url: "/invoices",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetInvoicesQuery, useCreateInvoiceMutation } = apiSlice;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// export const apiSlice = createApi({
//   reducerPath: 'apiSlice',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://localhost:3000',
//   }),
//   tagTypes: ['Post'],
//   endpoints: (builder) => ({
//     getPosts: builder.query({
//       query: () => '/posts',
//       providesTags: ['Post'],
//     }),
//     addNewPost: builder.mutation({
//       query: (payload) => ({
//         url: '/posts',
//         method: 'POST',
//         body: payload,
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       }),
//       invalidatesTags: ['Post'],
//     }),
//   }),
// })
// export const { useGetPostsQuery, useAddNewPostMutation } = apiSlice
