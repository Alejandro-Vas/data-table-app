export interface IRandomData {
  title: string;
  items?: ItemsEntity[] | null;
}
export interface ItemsEntity {
  title: string;
  items?: ItemsEntity1[] | null;
}
export interface ItemsEntity1 {
  title: string;
  subTitle: string;
  dateStart: number;
  dateEnd: number;
  data?: DataEntity[] | null;
}
export interface DataEntity {
  title: string;
  number: number;
}
