import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

// Sidebar Item Type
export type TSidebarItem = {
  key: string;
  label: ReactNode;
  path?: string;
  icon?: ReactNode;
  children?: TSidebarItem[];
  roles?: string[];
  onClick?: () => void;
};

// Sidebar Generator for Ant Design Menu
export const sidebarItemsGenerator = (items: TSidebarItem[]) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.key === 'logout') {
      acc.push({
        key: item.key,
        icon: item.icon,
        label: <>{item.label}</>,
        onClick: item.onClick,
      });
    } else if (item.children && item.children.length > 0) {
      acc.push({
        key: item.key,
        icon: item.icon,
        label: <>{item.label}</>,
        children: item.children.map((child) => ({
          key: child.key,
          icon: child.icon,
          label: (
            <>
              <NavLink to={`/${child.path}`}>{child.label}</NavLink>
            </>
          ),
        })),
      });
    } else if (item.label) {
      acc.push({
        key: item.key,
        icon: item.icon,
        label: (
          <>
            <NavLink to={`/${item.path}`}>{item.label}</NavLink>
          </>
        ),
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};
