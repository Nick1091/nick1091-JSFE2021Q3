import imagesDataUrl from '../../images.json';
import { IPictureData, IPictureDto, ICategoryData, IPicturesQuestionData, IArtistsQuestionData } from '../interfaces';
export class QuizDataModel {
  private questionsCategory = 10;

  data: Array<IPictureData>;

  public async build() {
    this.data = await this.loadImagesData(imagesDataUrl);
    return this;
  }

  public getCategoriesData(gameName: string) {
    const questionsCategory = this.questionsCategory;
    const categoriesCount = Math.floor(this.data.length / questionsCategory / 2);
    const categories: Array<ICategoryData> = [];
    if (gameName === 'artists') {
      for (let i = 0; i < categoriesCount; i++) {
        const pictureUrl = `./assets/image/${i * 10}.jpg`;
        const categoryData: ICategoryData = {
          name: i.toString(),
          picture: pictureUrl,
          score: new Array(categoriesCount).fill(false),
        };
        categories.push(categoryData);
      }
    } else {
      for (let i = 12; i < categoriesCount + 12; i++) {
        const pictureUrl = `./assets/image/${i * 10}.jpg`;
        const categoryData: ICategoryData = {
          name: i.toString(),
          picture: pictureUrl,
          score: new Array(categoriesCount).fill(false),
        };
        categories.push(categoryData);
      }
    }
    return categories;
  }

  public getPicturesQuestions(categoryIndex: number) {
    const questionsCategory = this.questionsCategory;
    const result: Array<IPicturesQuestionData> = [];
    categoryIndex += 12;
    for (let i = categoryIndex * questionsCategory; i < (categoryIndex + 1) * questionsCategory; i++) {
      const answers: Array<string> = [];
      const answersCount = 4;
      const correctAnswerIndex = Math.floor(Math.random() * answersCount);
      const correctAnswer = `https://raw.githubusercontent.com/Nick1091/image-data/master/img/${this.data[i].imageNum}.jpg`;
      for (let j = 0; j < answersCount; j++) {
        if (correctAnswerIndex === j) {
          answers.push(correctAnswer);
        } else {
          const randomImage = this.data[Math.floor(Math.random() * this.data.length)].imageNum;
          answers.push(`https://raw.githubusercontent.com/Nick1091/image-data/master/img/${randomImage}.jpg`);
        }
      }
      const question: IPicturesQuestionData = {
        artistsName: this.data[i].author,
        answers: answers,
        correctAnswerIndex: correctAnswerIndex,
      };
      result.push(question);
    }
    return result;
  }

  public getArtistsQuestions(categoryIndex: number) {
    const questionsCategory = this.questionsCategory;
    const result: Array<IArtistsQuestionData> = [];
    for (let i = categoryIndex * questionsCategory; i < (categoryIndex + 1) * questionsCategory; i++) {
      const answers: Array<string> = [];
      const answersCount = 4;
      const correctAnswerIndex = Math.floor(Math.random() * answersCount);
      const correctAnswer = this.data[i].author;
      for (let j = 0; j < answersCount; j++) {
        if (correctAnswerIndex === j) {
          answers.push(correctAnswer);
        } else {
          const randomName = this.data[Math.floor(Math.random() * this.data.length)].author;
          answers.push(randomName);
        }
      }
      const question: IArtistsQuestionData = {
        artistsUrl: `https://raw.githubusercontent.com/Nick1091/image-data/master/img/${this.data[i].imageNum}.jpg`,
        answers: answers,
        correctAnswerIndex: correctAnswerIndex,
      };
      result.push(question);
    }
    return result;
  }

  private loadImagesData(url: string): Promise<Array<IPictureData>> {
    return fetch(url)
      .then((res) => res.json())
      .then((imagesData: IPictureDto[]) => {
        const modelData: Array<IPictureData> = imagesData.map((it) => {
          const record: IPictureData = {
            author: it.author,
            name: it.name,
            year: Number(it.year),
            imageNum: Number(it.imageNum),
          };
          return record;
        });
        return modelData;
      });
  }
}
