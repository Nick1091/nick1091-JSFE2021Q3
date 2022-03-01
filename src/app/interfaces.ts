export interface IPictureData {
  year: number;
  imageNum: number;
  author: string;
  name: string;
}
export interface IPictureDto {
  year: string;
  imageNum: string;
  author: string;
  name: string;
}

export interface ICategoryData {
  name: string;
  picture: string;
  score?: Array<boolean>;
}

export interface IPicturesQuestionData {
  answers: string[];
  correctAnswerIndex: number;
  artistsName: string;
}
export interface IArtistsQuestionData {
  answers: string[];
  correctAnswerIndex: number;
  artistsUrl: string;
}
export interface IQuizSettings {
  time: number;
  timeEnable: boolean;
  volume: number;
  volumeEnable: boolean;
}
export interface IQuizOptions {
  gameName: string;
  categoryIndex: number;
  settings: IQuizSettings;
  dataModel: IQuizData;
}
export type IQuizResults = Array<boolean>;

export interface IQuestionView {
  onAnswer: (index: number) => void;
}

export interface IQuizData {
  artists: IQuizResults[] | [];
  pictures: IQuizResults[] | [];
}
