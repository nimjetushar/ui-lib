export interface MenuItem {
  label: string;
  route?: string;
  badge?: string;
  children?: MenuItem[];
}
