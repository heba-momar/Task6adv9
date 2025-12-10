export interface Post {
  id: number;
  title: string;
  date: string;
  description: string[];
  image?: string;
  name?: string;
  label: {
    tag: string;
    color: string;
    bgColor: string;
  }[];
  details?: Detail[];
}

export interface Detail {
  title?: string;
  example?: string;
  blogImage?: string;
  ImageDescription?: string;
  paragraphs?: Paragraph[];
  paragraphs01?:Paragraph01[];
  paragraph02?: string[];
}

export interface Paragraph {
  type: "p" | "list" | string;
  text: string | string[];
  span?: string;
  spanStyle?: "bold" | "underline" | string;
}

export interface Paragraph01 {
  type: "p";
  text: string | string[];
}
