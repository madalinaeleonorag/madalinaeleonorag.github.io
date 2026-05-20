export interface Publication {
  title: string;
  publisher: string;
  date: string;
  type: 'Article' | 'Research Paper';
  url?: string;
}
