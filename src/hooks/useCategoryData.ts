import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { CategoryData } from "../interface/CategoryData";

const API_URL = "http://localhost:8080";

const fetchCategories = async (): AxiosPromise<CategoryData[]> => {
    const response = await axios.get(API_URL + '/category');
  return response;
}

export function useCategoryData() {
  const query = useQuery({
    queryKey: ['categoryData'],
    queryFn: fetchCategories,
    retry: 2
  })

  return {
    ...query,
    categories: query.data?.data || []
  }
}