import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const EntriesApi = createApi({
  reducerPath: "EntriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}`,
    credentials: "include",
  }),
  tagTypes: ["Account", "Entries"],
  endpoints: (builder) => ({
    deleteEntry: builder.mutation({
      query: (id) => ({
        url: `/api/entries/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Entries", id }],
    }),
    createEntry: builder.mutation({
      query: (body) => ({
        url: "/api/entries",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Entries", id: "LIST" }],
    }),
    getEntries: builder.query({
      query: () => "/api/entries",
      transformResponse: (response) => response.meals,
      providesTags: (result) => {
        const tags = [{ type: "Entries", id: "LIST" }];
        if (!result) return tags;
        return [...result.map(({ id }) => ({ type: "Entries", id })), ...tags];
      },
    }),
    getUsdaMeals: builder.query({
      query: (body) => `/api/foods/?food_name=${body}`,
      transformResponse: (response) => response.foods,
      providesTags: (result) => {
        const tags = [{ type: 'USDA', id: 'LIST' }]
        if (!result) return tags;
        return [
          ...result.map(({ id }) => ({ type: 'USDA', id })),
          ...tags
        ]
      }
    }),
    getAccount: builder.query({
      query: () => "/token",
      transformResponse: (response) => response?.account,
      providesTags: ["Account"],
    }),

    login: builder.mutation({
      query: (body) => {
        const formData = new FormData();
        formData.append("username", body.username);
        formData.append("password", body.password);
        return {
          url: "/token",
          method: "POST",
          body: formData,
          credentials: "include",
        };
      },
      invalidatesTags: ["Account", "Entries"],
    }),
    signup: builder.mutation({
      query: (body) => {
        return {
          url: "/api/accounts",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Account", "Entries"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/token",
        method: "DELETE",
      }),
      invalidatesTags: ["Account", "Entries"],
    }),
  }),
});









export const {
  useCreateEntryMutation,
  useDeleteEntryMutation,
  useGetEntriesQuery,
  useGetAccountQuery,
  useLogoutMutation,
  useLoginMutation,
  useSignupMutation,
  useGetUsdaMealsQuery, } = EntriesApi;






// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const EntriesApi = createApi({
//   reducerPath: 'EntriesApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: `${process.env.REACT_APP_API_HOST}/api/Entries`,
//     credentials: "include"
//   }),
//   endpoints: (builder) => ({
//     deleteThing: builder.mutation({
//       query: (id) => ({
//         url: id,
//         method: 'DELETE'
//       }),
//       invalidatesTags: (result, error, {id}) => [{type: 'Entries', id}]
//     }),
//     createThing: builder.mutation({
//       query: (body) => ({
//         url: '',
//         method: 'POST',
//         body
//       }),
//       invalidatesTags: [{ type: 'Entries', id: 'LIST' }]
//     }),
//     getEntries: builder.query({
//         query: () => '',
//         transformResponse: (response) => response.Entries,
//         providesTags: (result) => {
//           const tags = [{ type: 'Entries', id: 'LIST' }]
//           if (!result) return tags;
//           return [
//             ...result.map(({id}) => ({type: 'Entries', id})),
//             ...tags
//           ]
//         }
//     })
//   }),
// })

// export const { useCreateThingMutation, useDeleteThingMutation, useGetEntriesQuery } = EntriesApi;
