

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type PoemFormProps = {
  id: string;
  title?: string;
  body: string;
  author: string;
  imageUrl?: string;
  postAt: string;
  relatedBook?: string;
}