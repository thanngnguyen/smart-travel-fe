// import { API_BASE_URL } from "@/utils/constants";

// interface FetchOptions extends RequestInit {
//   token?: string;
// }

// export async function fetcher<T>(
//   endpoint: string,
//   options: FetchOptions = {},
// ): Promise<T> {
//   const { token, headers, ...restOptions } = options;
//   const url = endpoint.startsWith("http")
//     ? endpoint
//     : `${API_BASE_URL}${endpoint}`;

//   const defaultHeaders: HeadersInit = {
//     "Content-Type": "application/json",
//   };

//   if (token) {
//     defaultHeaders.Authorization = `Bearer ${token}`;
//   }

//   const res = await fetch(url, {
//     headers: {
//       ...defaultHeaders,
//       ...headers,
//     },
//     ...restOptions,
//   });

//   if (!res.ok) {
//     const errorData = await res.json().catch(() => ({}));
//     throw new Error(
//       errorData.message || `API request failed with status: ${res.status}`,
//     );
//   }

//   // Handle empty responses (like 204 No Content)
//   if (res.status === 204) {
//     return {} as T;
//   }

//   return res.json() as Promise<T>;
// }
