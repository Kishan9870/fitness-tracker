export interface Product {
  id?: string;
  name: string;
  brand: string;
  imageUrl: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
}
