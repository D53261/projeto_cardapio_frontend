import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { CategoryData } from "../interface/CategoryData";

const API_URL = 'http://localhost:8080';

const postCategory = async (data: CategoryData): AxiosPromise<any> => {
    const response = await axios.post(API_URL + '/category', data);
    return response;
}

export function useCategoryDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postCategory,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['categoryData'])
        }
    })

    return mutate;
}