export type User = {
  _id: string;
  username: string;
  email: string;
  password: string;
  avatar?: string;
  skills: string[];
  createdAt: Date;
  updatedAt: Date;  
}

export const dummyUsers: User[] = [
  {
    _id: '1',
    username: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    skills: ['HTML', 'CSS', 'JavaScript'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '2',
    username: 'Jane Doe',
    email: 'jane@example.com',
    password: 'password123',
    skills: ['TypeScript', 'React', 'NextJS'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '3',
    username: 'Bob Smith',
    email: 'bob@example.com',
    password: 'password123',
    skills: ['Python', 'Django', 'React'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]
