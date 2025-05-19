import { type ApiRoutes } from '$server/types/api-routes'
import { hc } from 'hono/client'

const client = hc<ApiRoutes>('/')

export const api = client.api

type UserProfileResponse = {
    user: {
        picture: null | string;
        family_name: string;
        given_name: string;
        email: string;
        id: string;
    };
}

async function getCurrentUser(): Promise<UserProfileResponse> {
    const res = await api.me.$get()
    if (res.status === 401) {
        throw new Error('unauthenticated');
    }
    if (!res.ok) {
        throw new Error('Network response was not ok')
    }
    return res.json();
}

export const userQueryOptions = {
    queryKey: ['user'],
    queryFn: getCurrentUser,
    staleTime: Infinity,
    retry: false
};

export const tasksQueryOptions = {
    queryKey: ['get-all-tasks'],
    queryFn: fetchTasks,
    staleTime: 1000 * 60 * 5
}

export async function fetchTasks() {
    const res = await api.tasks.$get()
    if (!res.ok) {
        throw new Error('Network response was not ok')
    }
    const data = await res.json()
    return data
}