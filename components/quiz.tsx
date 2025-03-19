"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, ArrowLeft, ArrowRight, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"
import { quizData } from "@/data/quiz-questions"

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>(Array(quizData.questions.length).fill(null))
  const [showResults, setShowResults] = useState(false)

  const currentQuestion = quizData.questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === quizData.questions.length - 1
  const progress = ((currentQuestionIndex + 1) / quizData.questions.length) * 100

  const handleAnswerSelect = (value: string) => {
    if (!isAnswered) {
      setSelectedAnswer(value)
      setIsAnswered(true)

      // Update user answers
      const newUserAnswers = [...userAnswers]
      newUserAnswers[currentQuestionIndex] = value
      setUserAnswers(newUserAnswers)
    }
  }

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setShowResults(true)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(userAnswers[currentQuestionIndex + 1])
      setIsAnswered(userAnswers[currentQuestionIndex + 1] !== null)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setSelectedAnswer(userAnswers[currentQuestionIndex - 1])
      setIsAnswered(userAnswers[currentQuestionIndex - 1] !== null)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setUserAnswers(Array(quizData.questions.length).fill(null))
    setShowResults(false)
  }

  const calculateScore = () => {
    let score = 0
    userAnswers.forEach((answer, index) => {
      if (answer === quizData.questions[index].correctAnswer) {
        score++
      }
    })
    return score
  }

  if (showResults) {
    const score = calculateScore()
    const percentage = Math.round((score / quizData.questions.length) * 100)

    return (
      <div className="max-w-3xl mx-auto px-4">
        <Card className="border-0 shadow-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
            <h2 className="text-2xl font-bold text-center">Quiz Results</h2>
            <p className="text-center opacity-90 mt-1">You've completed the quiz!</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="relative w-40 h-40 mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold">{percentage}%</span>
                </div>
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-200 stroke-current"
                    strokeWidth="10"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                  ></circle>
                  <circle
                    className="text-indigo-600 stroke-current"
                    strokeWidth="10"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    strokeDasharray={`${2.5 * Math.PI * 40}`}
                    strokeDashoffset={`${2.5 * Math.PI * 40 * (1 - percentage / 100)}`}
                    transform="rotate(-90 50 50)"
                  ></circle>
                </svg>
              </div>
              <p className="text-xl font-medium">
                You scored {score} out of {quizData.questions.length}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Question Summary</h3>
              {quizData.questions.map((question, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-4 rounded-lg border",
                    userAnswers[index] === question.correctAnswer
                      ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                      : "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {userAnswers[index] === question.correctAnswer ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">Question {question.number}</p>
                      <p className="text-sm mt-1">{question.question}</p>
                      {userAnswers[index] !== question.correctAnswer && (
                        <div className="mt-2 text-sm">
                          <p className="text-red-600">
                            Your answer: {userAnswers[index]}.{" "}
                            {question.options.find((opt) => opt.label === userAnswers[index])?.text}
                          </p>
                          <p className="text-green-600 mt-1">
                            Correct answer: {question.correctAnswer}.{" "}
                            {question.options.find((opt) => opt.label === question.correctAnswer)?.text}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t p-6">
            <Button onClick={handleRestartQuiz} className="w-full">
              <RotateCcw className="mr-2 h-4 w-4" /> Restart Quiz
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4">
      <Card className="border-0 shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              Question {currentQuestionIndex + 1} of {quizData.questions.length}
            </span>
            <span className="text-sm font-medium">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2 bg-white/30" indicatorClassName="bg-white" />
        </CardHeader>

        <CardContent className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-1">Question {currentQuestion.number}</h2>
            <p className="text-lg">{currentQuestion.question}</p>
          </div>

          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const isCorrect = isAnswered && option.label === currentQuestion.correctAnswer
              const isIncorrect =
                isAnswered && selectedAnswer === option.label && option.label !== currentQuestion.correctAnswer
              const isSelected = selectedAnswer === option.label

              return (
                <div
                  key={option.label}
                  onClick={() => handleAnswerSelect(option.label)}
                  className={cn(
                    "flex items-center p-4 rounded-lg border-2 transition-all cursor-pointer",
                    isSelected && !isAnswered && "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20",
                    isCorrect && "border-green-500 bg-green-50 dark:bg-green-900/20",
                    isIncorrect && "border-red-500 bg-red-50 dark:bg-red-900/20",
                    !isSelected &&
                      !isAnswered &&
                      "hover:border-indigo-300 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10",
                    !isSelected && !isCorrect && !isIncorrect && isAnswered && "opacity-60",
                  )}
                >
                  <div
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 border-2 transition-colors",
                      isSelected && !isAnswered && "border-indigo-500 bg-indigo-100 text-indigo-700",
                      isCorrect && "border-green-500 bg-green-100 text-green-700",
                      isIncorrect && "border-red-500 bg-red-100 text-red-700",
                      !isSelected && !isCorrect && !isIncorrect && "border-gray-300 bg-gray-100 text-gray-700",
                    )}
                  >
                    <span className="text-sm font-medium">{option.label}</span>
                  </div>

                  <div className="flex-1">
                    <p className={cn("font-medium", isCorrect && "text-green-700", isIncorrect && "text-red-700")}>
                      {option.text}
                    </p>
                  </div>

                  {isCorrect && <CheckCircle className="h-5 w-5 text-green-600 ml-2 flex-shrink-0" />}
                  {isIncorrect && <XCircle className="h-5 w-5 text-red-600 ml-2 flex-shrink-0" />}
                </div>
              )
            })}
          </div>

          {isAnswered && (
            <div
              className={cn(
                "mt-6 p-4 rounded-lg border-l-4 animate-fadeIn",
                currentQuestion.correctAnswer === selectedAnswer
                  ? "bg-green-50 border-green-500 dark:bg-green-900/20"
                  : "bg-amber-50 border-amber-500 dark:bg-amber-900/20",
              )}
            >
              <h3
                className={cn(
                  "font-semibold mb-2",
                  currentQuestion.correctAnswer === selectedAnswer ? "text-green-700" : "text-amber-700",
                )}
              >
                {currentQuestion.correctAnswer === selectedAnswer ? "Correct!" : "Explanation:"}
              </h3>
              <p className="text-sm">{currentQuestion.reason}</p>
            </div>
          )}
        </CardContent>

        <CardFooter className="border-t p-6 flex justify-between">
          <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>

          <Button onClick={handleNextQuestion} disabled={!isAnswered}>
            {isLastQuestion ? "Show Results" : "Next"} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      <div className="flex justify-center mt-6">
        <div className="flex space-x-1">
          {quizData.questions.map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-colors",
                index === currentQuestionIndex
                  ? "bg-indigo-600"
                  : userAnswers[index] !== null
                    ? "bg-indigo-300"
                    : "bg-gray-300",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

