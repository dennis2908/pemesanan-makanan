import { MenuItemType } from '@paljs/ui/types';

const itemsData = () => {
  const itemsData: MenuItemType[] = [
    {
      title: 'Home Page',
      icon: { name: 'home' },
      link: { href: '/dashboard' },
    },
    {
      title: 'MASTER',
      group: true,
    },
    {
      title: 'Manajemen Order',
      icon: { name: 'browser-outline' },
      children: [
        {
          title: 'List Order',
          link: { href: '/manajemen/manajemen_list' },
        },
      ],
    },
  ];

  return itemsData;
};

const items: MenuItemType[] = itemsData();

export default items;
