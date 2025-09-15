import { Skills } from "@/types/skills";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the shape of your Zustand store
type SkillState = {
  // Object where each key is a userId, and the value is an array of skills for that user
  skillsByUser: Record<string, Skills[]>;

  // Add a new skill for a user
  addSkill: (userId: string, skill: Skills) => void;

  // Update a skill by id for a user
  editSkill: (userId: string, skillId: string, patch: Partial<Skills>) => void;

  // Delete a skill by id for a user
  deleteSkill: (userId: string, skillId: string) => void;

  // Get all skills for a user
  getSkillsByUser: (userId: string) => Skills[];

  // Clear ALL skills (for all users, e.g., when logging out admin)
  clearSkills: () => void;
};

export const useSkillStore = create<SkillState>()(
  persist(
    (set, get) => ({
      // Initialize with no skills
      skillsByUser: {},

      // Add a new skill for a specific user
      addSkill: (userId, skill) =>
        set((state) => ({
          skillsByUser: {
            ...state.skillsByUser,
            // Add the new skill to the user’s existing skills
            [userId]: [...(state.skillsByUser[userId] || []), skill],
          },
        })),

      // Edit an existing skill for a user
      editSkill: (userId, skillId, patch) =>
        set((state) => ({
          skillsByUser: {
            ...state.skillsByUser,
            [userId]:
              state.skillsByUser[userId]?.map((s) =>
                s._id === skillId ? { ...s, ...patch } : s
              ) || [],
          },
        })),

      // Delete a skill for a user
      deleteSkill: (userId, skillId) =>
        set((state) => ({
          skillsByUser: {
            ...state.skillsByUser,
            [userId]:
              state.skillsByUser[userId]?.filter((s) => s._id !== skillId) || [],
          },
        })),

      // Get all skills for a user
      getSkillsByUser: (userId) => get().skillsByUser[userId] || [],

      // Clear all skills (for all users)
      clearSkills: () => set(() => ({ skillsByUser: {} })),
    }),
    {
      name: "skills-storage", // localStorage key
    }
  )
);
