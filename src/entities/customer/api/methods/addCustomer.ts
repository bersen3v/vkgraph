import { baseUrl } from '@/shared/api/config';
import fetchStringFromUrl from '@/shared/api/methods/fetchStringFromUrl';
import postRequestWithResponse from '@/shared/api/methods/postRequestWithResponse';

export default async function addCustomer(formData: FormData): Promise<string> {
  const path = `${baseUrl}/addcustomer`;

  const data = await postRequestWithResponse(path, formData);
  const result = (data as { result: string }).result;

  return result;
}
