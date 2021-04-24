export interface MenuItem {
  label: string;
  ref: React.RefObject<HTMLDivElement | any> | null;
  hidden?: boolean;
}

export interface NavigableComponent {
  navigableComponent: JSX.Element | null;
}

export interface HefestoImageField {
  imageURL: string;
  imageDescription: string;
}

export type BlogPostType = {
  featuredImage: HefestoImageField;
  blogActive: boolean;
  blogTitle: string;
  uuid: string;
  blogPost: string;
  slug: string;
  blogDescription: string;
};
