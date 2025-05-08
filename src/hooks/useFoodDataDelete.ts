import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"

const API_URL = 'http://localhost:8080';

const deleteData = async (id: number): AxiosPromise<unknown> => {
    const response = await axios.delete(API_URL + '/food/' + id);
    return response;
}

export function useFoodDataDelete(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: deleteData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['foodData']})
        }, onError: (error) => {
            console.error('Error deleting data:', error);
        }
    })

    return mutate;
}