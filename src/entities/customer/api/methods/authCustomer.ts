import { baseUrl } from "@/shared/api/config";
import fetchStringFromUrl from "@/shared/api/methods/fetchStringFromUrl";

export default async function authCustomer({
  login,
  password
} : {
  login: string,
  password: string
}): Promise<string> {
  const path = `${baseUrl}/auth?login=${login}&password=${password}`;
  const data = await fetchStringFromUrl(path);
  const result = (data as { result: string }).result;
  return result;
}
