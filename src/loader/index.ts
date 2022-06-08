import { IData } from '../types/index';
const data = './data.json';
class Loader {
  async getToysList() {
    const res = await fetch(data);
    const list: IData[] = await res.json();
    return list;
  }
}
export default Loader;
