export interface Scout {
  _id: string;
  name: string;
  experience: number;
  availability: string;
  coverImage: string;
  description?: string;
  skills?: string[] | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
