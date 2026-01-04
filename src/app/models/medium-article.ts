export interface Article {
  title: string;
  snippet: string;
  thumbnail: string;
  link: string;
  date: string;
}

export interface MediumArticlesResponse {
  feed: {
    author: string;
    description: string;
    image: string;
    link: string;
    title: string;
    url: string;
  };
  items: Article[];
  status: string;
}
