import { baseUrl } from '@/shared/api/config';
import fetchStringFromUrl from '@/shared/api/methods/fetchStringFromUrl';
import { Customer } from '../../model/customer';

export default async function getCustomers(): Promise<Customer[]> {
  const path = `${baseUrl}/getcustomers`;
  const data = await fetchStringFromUrl(path);

  const result = (data as { result: Customer[] }).result;
  return result;
}
