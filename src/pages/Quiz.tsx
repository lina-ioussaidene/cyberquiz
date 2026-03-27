import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Difficulty, Question, quizData } from '../data/questions';

interface QuizProps {
  level: Difficulty;
  onFinish: (score: number, answers: Record<number, string>) => void;
  onBack: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ level, onFinish, onBack }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    // Shuffle questions and options for randomness
    const shuffledQuestions = [...quizData[level]].sort(() => Math.random() - 0.5).map(q => ({
      ...q,
      options: [...q.options].sort(() => Math.random() - 0.5)
    }));
    setQuestions(shuffledQuestions);
  }, [level]);

  if (questions.length === 0) return <div className="min-h-screen flex items-center justify-center text-[var(--color-cyber-bright)]">Loading...</div>;

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleSelect = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    const newAnswers = { ...answers, [currentQuestion.id]: selectedAnswer };
    setAnswers(newAnswers);

    if (isLastQuestion) {
      // Calculate score
      let score = 0;
      questions.forEach(q => {
        if (newAnswers[q.id] === q.correctAnswer) {
          score += 1;
        }
      });
      onFinish(score, newAnswers);
    } else {
      setSelectedAnswer(null);
      setCurrentIndex(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
        <Button variant="outline" onClick={onBack} className="w-auto px-4 py-2 text-sm">
          <ArrowLeft size={16} /> Quit
        </Button>
        <div className="text-[var(--color-cyber-bright)] font-mono text-sm tracking-widest uppercase flex items-center gap-2">
          <ShieldCheck size={16} /> {level} Level
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-4xl"
      >
        <div className="mb-8 flex justify-between items-end">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-300">Question {currentIndex + 1} <span className="text-gray-600 text-xl">/ {questions.length}</span></h2>
          <div className="w-1/2 h-2 bg-[var(--color-cyber-dark)] rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-[var(--color-cyber-bright)] shadow-[0_0_10px_rgba(89,255,0,0.8)]"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="mb-8 border-[var(--color-cyber-bright)] border-opacity-30">
              <h3 className="text-2xl md:text-4xl font-semibold mb-10 leading-tight">
                {currentQuestion.text}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(option)}
                    className={`p-6 rounded-xl text-left transition-all duration-300 border ${
                      selectedAnswer === option 
                        ? 'bg-[var(--color-cyber-bright)] text-black border-[var(--color-cyber-bright)] shadow-[0_0_20px_rgba(89,255,0,0.4)] font-semibold' 
                        : 'glass-panel hover:bg-[var(--color-cyber-dark)] hover:border-[var(--color-cyber-bright)] border-transparent text-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${
                        selectedAnswer === option ? 'bg-black text-[var(--color-cyber-bright)]' : 'bg-[var(--color-cyber-dark)] text-gray-400'
                      }`}>
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="text-lg">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-end">
          <Button 
            onClick={handleNext} 
            disabled={!selectedAnswer}
            className={`px-8 py-4 text-lg ${!selectedAnswer ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLastQuestion ? 'Finish Simulation' : 'Next Question'} <ArrowRight size={20} />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
