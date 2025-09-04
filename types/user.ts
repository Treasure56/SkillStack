export type User = {
  username: string;
  email: string;
  password: string;
  avatar?: string;
  skills: string[];
  createdAt: Date;
  updatedAt: Date;  
}
