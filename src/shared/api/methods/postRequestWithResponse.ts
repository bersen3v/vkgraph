import axios, { AxiosError } from "axios";

export default async function postRequestWithResponse(
  path: string,
): Promise<unknown> {

  try {
    const response = await axios.post(path);
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    console.log(error)

   return undefined
  }
}
