export type Skills = {
  name: string;
  progress: number; // 0 - 100%
  user: string
  createdAt: Date;
  updatedAt: Date;
}

export const dummySkills: Skills[] = [
  {
    name: 'HTML',
    progress: 80,
    user: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'CSS',
    progress: 70,
    user: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'JavaScript',
    progress: 60,
    user: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'TypeScript',
    progress: 50,
    user: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'React',
    progress: 40,
    user: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

