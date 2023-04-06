import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const EntriesApi = createApi({
    reducerPath: "EntriesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/entries`,
        credentials: "include",
    }),
    endpoints: (builder) => ({
        deleteEntry: builder.mutation({
            query: (id) => ({
                url: id,
                method: 'DELETE'
      }),
      invalidatesTags: (result, error, {id}) => [{type: 'Entries', id}]
    }),
    createEntry: builder.mutation({
      query: (body) => ({
        url: '',
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'Entries', id: 'LIST' }]
    }),
    getEntries: builder.query({
        query: () => '',
        transformResponse: (response) => response.Entries,
        providesTags: (result) => {
          const tags = [{ type: 'Entries', id: 'LIST' }]
          if (!result) return tags;
          return [
            ...result.map(({id}) => ({type: 'Entries', id})),
            ...tags
          ]
        }
    })
  }),
})

export const { useCreateEntryMutation, useDeleteEntryMutation, useGetEntriesQuery } = EntriesApi;




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
