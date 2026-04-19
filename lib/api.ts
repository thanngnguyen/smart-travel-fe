import { BackendErrorResponse } from "@/types/backend-contract";
import { API_BASE_URL } from "@/utils/constants";

interface FetchOptions extends RequestInit {
  token?: string;
}

export class ApiRequestError extends Error {
  status: number;
  payload?: BackendErrorResponse | null;

  constructor(
    status: number,
    message: string,
    payload?: BackendErrorResponse | null,
  ) {
    super(message);
    this.name = "ApiRequestError";
    this.status = status;
    this.payload = payload;
  }
}

function resolveErrorMessage(status: number, errorData: unknown) {
  if (errorData && typeof errorData === "object" && "message" in errorData) {
    const payload = errorData as BackendErrorResponse;
    if (typeof payload.message === "string") {
      return payload.message;
    }

    if (payload.message && typeof payload.message === "object") {
      return Object.values(payload.message).join(" | ");
    }
  }

  return `API request failed with status: ${status}`;
}

export async function fetcher<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const { token, headers, ...restOptions } = options;
  const url = endpoint.startsWith("http")
    ? endpoint
    : `${API_BASE_URL}${endpoint}`;

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    defaultHeaders.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    ...restOptions,
  });

  if (!res.ok) {
    const errorData = (await res
      .json()
      .catch(() => null)) as BackendErrorResponse | null;

    throw new ApiRequestError(
      res.status,
      resolveErrorMessage(res.status, errorData),
      errorData,
    );
  }

  if (res.status === 204) {
    return {} as T;
  }

  return res.json() as Promise<T>;
}
