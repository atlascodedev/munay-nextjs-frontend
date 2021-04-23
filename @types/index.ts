export interface MenuItem {
  label: string;
  ref: React.RefObject<HTMLDivElement | any> | null;
  hidden?: boolean;
}

export interface NavigableComponent {
  navigableComponent: JSX.Element | null;
}


