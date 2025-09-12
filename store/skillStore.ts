import { Skills } from "@/types/skills";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type SkillState = {
  skills: Skills[]; // store multiple skills
  setSkills: (skills: Skills[]) => void;
  addSkill: (skill: Skills) => void;
  editSkill: (id: string, patch: Partial<Skills>) => void;
  deleteSkill: (id: string) => void;
  clearSkills: () => void;
};

export const useSkillStore = create<SkillState>()(
  persist(
    (set) => ({
      skills: [],

      // replace all skills at once
      setSkills: (skills) => set(() => ({ skills })),

      // add a new skill to the array
      addSkill: (skill) =>
        set((state) => ({
          skills: [...state.skills, skill],
        })),

      // update a skill by id
      editSkill: (id, patch) =>
        set((state) => ({
          skills: state.skills.map((s) =>
            s._id === id ? { ...s, ...patch } : s
          ),
        })),

      // remove a skill by id
      deleteSkill: (id) =>
        set((state) => ({
          skills: state.skills.filter((s) => s._id !== id),
        })),

      // clear all skills
      clearSkills: () => set(() => ({ skills: [] })),
    }),
    {
      name: "skills-storage", // unique key in localStorage
    }
  )
);
