import React from "react";
import convertToSlug from "../helper/convertToSlug";

export interface MenuItem {
  label: string;
  ref: React.RefObject<HTMLDivElement | any> | null;
  hidden?: boolean;
}

export interface NavigableComponent extends MenuItem {
  navigableComponent: JSX.Element | null;
}

const useLandingPage = (
  menuItems: MenuItem[],
  deps?: any[]
): { navigableList: JSX.Element[]; menuList: MenuItem[] } => {
  const [navigables, setNavigables] = React.useState<JSX.Element[]>([]);
  const [menuItemList, setMenuItemsList] = React.useState<MenuItem[]>([]);

  React.useEffect(() => {
    let navigablesTemp: JSX.Element[] = [];
    let menuItemListTemp: MenuItem[] = [];

    for (let i = 0; i < menuItems.length; i++) {
      const menuItemIterable = menuItems[i];

      let menuItemTemp: MenuItem = {
        label: "",
        ref: null,
        hidden: menuItemIterable.hidden ? true : false,
      };

      let navigableTemp: JSX.Element = <div></div>;

      let menuID: string = convertToSlug(menuItemIterable.label);

      navigableTemp = (
        <div ref={menuItemIterable.ref} id={menuID}>
          heaad
        </div>
      );
    }
  }, [deps ? deps : null]);

  return { navigableList: navigables, menuList: menuItemList };
};
