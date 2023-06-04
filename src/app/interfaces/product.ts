export interface IProduct {
  _id?: number | string;
  name: string;
  price: number;
  description: string;
  image: string;
  color: string;
  categoryId: number | string | undefined;
}
