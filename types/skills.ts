export type Skills = {
  _id: string
  skill: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  createdAt: Date;
}

export const dummySkills: Skills[] = [
  {
    skill: 'HTML',
    level: 'Expert',
    _id: '1',
    createdAt: new Date(),
    category: 'Technology',
  },
  {
    skill: 'CSS',
    level: 'Advanced',
    _id: '2',
    createdAt: new Date(),
    category: 'Design'
  },
  {
    skill: 'JavaScript',
    level: 'Intermediate',
    _id: '3',
    createdAt: new Date(),
    category: 'Technology'
  },
  {
    skill: 'TypeScript',
    level: 'Intermediate',
    _id: '4',
    createdAt: new Date(),
    category: 'Technology'
  },
  {
    skill: 'React',
    level: 'Intermediate',
    _id: '5',
    createdAt: new Date(),
    category: 'Technology'
  },
]

