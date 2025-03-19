import Quiz from "@/components/quiz"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Interactive MCQ Quiz</h1>
        <Quiz />
      </div>
    </main>
  )
}

