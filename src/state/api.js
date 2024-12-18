import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://54.82.34.110/api/",
    prepareHeaders: (headers, { getState }) => {
      let user = getState();
      const {
        auth: { token },
      } = user;
      if (user) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set(
          "Access-Control-Allow-Origin",
          "https://main.d1bygvczrsspbr.amplifyapp.com"
        );
      }
      return headers;
    },

    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin":
        "https://main.d1bygvczrsspbr.amplifyapp.com",
    },
  }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Countries",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
    "States",
    "Cities",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "/products",
      providesTags: ["Products"],
    }),
    getCountries: build.query({
      query: () => "Countries/",
      providesTags: ["Countries"],
    }),
    getStates: build.query({
      query: () => "States",
      providesTags: ["States"],
    }),
    getCities: build.query({
      query: () => "Cities",
      providesTags: ["Cities"],
    }),
    getCustomers: build.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
  useGetCountriesQuery,
  useGetCitiesQuery,
  useGetStatesQuery,
} = api;
