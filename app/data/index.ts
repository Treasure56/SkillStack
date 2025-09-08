export const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Technology: "bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800/30",
    Design: "bg-purple-50 border-purple-200 dark:bg-purple-950/20 dark:border-purple-800/30",
    Marketing: "bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800/30",
    Business: "bg-orange-50 border-orange-200 dark:bg-orange-950/20 dark:border-orange-800/30",
    Language: "bg-pink-50 border-pink-200 dark:bg-pink-950/20 dark:border-pink-800/30",
    Creative: "bg-yellow-50 border-yellow-200 dark:bg-yellow-950/20 dark:border-yellow-800/30",
  }
  return colors[category] || "bg-gray-50 border-gray-200 dark:bg-gray-950/20 dark:border-gray-800/30"
}

export const getCategoryIcon = (category: string) => {
  const icons: Record<string, string> = {
    Technology: "💻",
    Design: "🎨",
    Marketing: "📈",
    Business: "💼",
    Language: "🌍",
    Creative: "✨",
  }
  return icons[category] || "📋"
}

export const getLevelStars = (level: string) => {
  const stars = {
    Beginner: 1,
    Intermediate: 2,
    Advanced: 3,
    Expert: 4,
  }
  return stars[level as keyof typeof stars] || 1
}