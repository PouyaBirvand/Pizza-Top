import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuHeader from './components/MenuHeader';
import MenuGrid from './components/MenuGrid';

const Menu = () => {
  const menu = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <MenuHeader />
      <MenuGrid menuItems={menu} />
    </div>
  );
};

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
