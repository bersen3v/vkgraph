import axios, { AxiosError } from 'axios';

export default async function postRequestWithResponse(
  path: string,
  body: any,
): Promise<unknown> {
  try {
    const response = await axios.post(path, body, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    console.log(error);
    return undefined;
  }
}
