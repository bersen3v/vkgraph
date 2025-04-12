import { GraphData } from "@/entities/graph/model/model";
import { baseUrl } from "@/shared/api/config";
import fetchStringFromUrl from "@/shared/api/methods/fetchStringFromUrl";


export default async function getHistory(): Promise<GraphData[]> {
  const authKey = localStorage.getItem('authKey')
  const path = `${baseUrl}/history?customer_id=${authKey}`;
  const data = await fetchStringFromUrl(path);
  const result = (data as{result: GraphData[]}).result;
  return result;
}