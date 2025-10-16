
import { MenuCategory, RestaurantInfo, MenuItem } from './types';

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "Le Café du Soleil",
  logoUrl: "https://picsum.photos/seed/logo/100/100",
  address: "123 Sunshine Avenue, Paris, France",
  phone: "+33 1 23 45 67 89",
  hours: "Mon-Sat: 9am - 10pm",
  heroImageUrl: "https://picsum.photos/seed/hero/1920/1080",
  about: "Nestled in the heart of Paris, Le Café du Soleil offers an authentic French dining experience. Our chefs use the freshest local ingredients to craft delicious meals in a cozy, elegant atmosphere. Join us for a memorable culinary journey."
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Croissant",
    description: "Buttery, flaky, and freshly baked.",
    price: 3.50,
    category: MenuCategory.FOOD,
    imageUrl: "https://picsum.photos/seed/croissant/400/300",
  },
  {
    id: 2,
    name: "French Onion Soup",
    description: "A classic soup with caramelized onions and a cheesy crouton.",
    price: 8.00,
    category: MenuCategory.FOOD,
    imageUrl: "https://picsum.photos/seed/soup/400/300",
  },
  {
    id: 3,
    name: "Beef Bourguignon",
    description: "Slow-cooked beef in red wine with mushrooms and onions.",
    price: 18.50,
    category: MenuCategory.FOOD,
    imageUrl: "https://picsum.photos/seed/beef/400/300",
  },
  {
    id: 4,
    name: "Espresso",
    description: "A strong shot of coffee.",
    price: 2.50,
    category: MenuCategory.DRINKS,
    imageUrl: "https://picsum.photos/seed/espresso/400/300",
  },
  {
    id: 5,
    name: "Latte",
    description: "Espresso with steamed milk.",
    price: 4.00,
    category: MenuCategory.DRINKS,
    imageUrl: "https://picsum.photos/seed/latte/400/300",
  },
  {
    id: 6,
    name: "House Red Wine",
    description: "A smooth and fruity red wine.",
    price: 6.00,
    category: MenuCategory.DRINKS,
    imageUrl: "https://picsum.photos/seed/wine/400/300",
  },
  {
    id: 7,
    name: "Crème Brûlée",
    description: "Rich custard base with a caramelized sugar topping.",
    price: 7.00,
    category: MenuCategory.DESSERTS,
    imageUrl: "https://picsum.photos/seed/creme/400/300",
  },
  {
    id: 8,
    name: "Chocolate Mousse",
    description: "A light and airy chocolate dessert.",
    price: 6.50,
    category: MenuCategory.DESSERTS,
    imageUrl: "https://picsum.photos/seed/mousse/400/300",
  }
];
