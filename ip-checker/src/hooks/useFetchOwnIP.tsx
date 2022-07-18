import { useQuery } from "react-query";
import { fetchOwnIp } from "querys/fetchOwnIp";

export const useFetchOwnIP = () => {
    const { data, isLoading, isError } = useQuery("ownIp", fetchOwnIp);
    const ownIp = data?.ip;

    return { ownIp, isLoading, isError };
}