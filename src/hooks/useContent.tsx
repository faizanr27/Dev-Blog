import useSWR from "swr";
import axios from "axios";
import { BACKEND_URL } from "../config";


interface Content {
  description: string;
  title: string;
  _id: string;
  userId: {
    _id?: string;
    name: string;
    avatar?: string;
  };
}

const fetcher = async (url: string) => {

  console.log("called")
  const response = await axios.get(url);
  console.log("Fetched data:", response.data);
  return response.data || [];
};

export function useContent() {
  const { data, error, mutate } = useSWR(`${BACKEND_URL}/Posts`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    refreshInterval: 0,
  });

  return {
    contents: data as Content[] || [],
    error,
    refresh: mutate,
  };
}