import { IQuizData } from '../interfaces';

const defaultData: IQuizData = {
  artists: Array(12).fill([]),
  pictures: Array(12).fill([]),
};
export class DataModel {
  private dataModel: IQuizData;

  loadFromStorage() {
    const dataModel = localStorage.getItem('dataModel');
    const checkStorageData = (data: string | null) => !!data;
    if (!checkStorageData(dataModel)) {
      this.dataModel = defaultData;
    } else {
      const data: IQuizData = JSON.parse(dataModel);
      this.dataModel = data;
    }
  }

  getData() {
    return JSON.parse(JSON.stringify(this.dataModel));
  }

  setData(data: IQuizData) {
    this.dataModel = data;
    this.saveTOStorage();
  }

  saveTOStorage() {
    localStorage.setItem('dataModel', JSON.stringify(this.dataModel));
  }
}
