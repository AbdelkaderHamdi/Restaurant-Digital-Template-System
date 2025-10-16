
import { useState } from 'react';
import { RESTAURANT_INFO, MENU_ITEMS } from '../constants';
import { RestaurantInfo, MenuItem } from '../types';

const useRestaurantData = () => {
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfo>(RESTAURANT_INFO);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(MENU_ITEMS);

  const updateRestaurantInfo = (newInfo: Partial<RestaurantInfo>) => {
    setRestaurantInfo(prevInfo => ({ ...prevInfo, ...newInfo }));
  };

  const updateMenuItems = (newMenuItems: MenuItem[]) => {
    setMenuItems(newMenuItems);
  };

  return {
    restaurantInfo,
    menuItems,
    updateRestaurantInfo,
    updateMenuItems,
  };
};

export default useRestaurantData;
