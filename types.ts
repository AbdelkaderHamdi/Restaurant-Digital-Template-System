
export enum MenuCategory {
  FOOD = 'Food',
  DRINKS = 'Drinks',
  DESSERTS = 'Desserts',
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  imageUrl: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface RestaurantInfo {
  name: string;
  logoUrl: string;
  address: string;
  phone: string;
  hours: string;
  heroVideoUrl?: string; 
  heroImageUrl: string;
  about: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  }
}
