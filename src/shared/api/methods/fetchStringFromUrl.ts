import axios from "axios";


export default async function fetchStringFromUrl(
  path: string,
): Promise<unknown> {


  try {
    const response = await axios.get(path);
    return response.data;
  } catch (e) {
    console.log(e)
    return undefined;
  }
}
