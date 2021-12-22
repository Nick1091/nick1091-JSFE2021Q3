import { IData } from '../types/types';
const data = ' ./data.json';
class Loader {
  async getToyList() {
    const res = await fetch(data);
    const list: IData[] = await res.json();
    return list;
  }
}
export default Loader;
