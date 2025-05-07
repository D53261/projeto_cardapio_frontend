import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"

const API_URL = 'http://localhost:8080';

const deleteCategory = async (id: number): AxiosPromise<any> => {
    const response = await axios.delete(API_URL + '/category/' + id);
    return response;
}

export function useCategoryDataDelete(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: deleteCategory,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['categoryData'])
        }, onError: (error) => {
            console.error('Error deleting data:', error);
        }
    })

    return mutate;
}