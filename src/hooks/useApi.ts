import { useMutation, useQuery } from "react-query";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL as string;

interface Query {
  path: string;
}

interface Mutation extends Query {
  data: any;
}

export const useApiGet = ({ path }: Query) => {
  return useQuery(path, async () =>
    axios.get(`${BACKEND_URL}${path}`).then((res) => res.data)
  );
};

export const useApiSend = () => {
  const mutation = useMutation(({ path, data }: Mutation) =>
    axios["post"](`${BACKEND_URL}${path}`, data).then((res) => res?.data)
  );

  return mutation;
};
