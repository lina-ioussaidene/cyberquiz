import React, { useState } from 'react';
import { Home } from './pages/Home';
import { LevelSelection } from './pages/LevelSelection';
import { Quiz } from './pages/Quiz';
import { Score } from './pages/Score';
import { Chatbot } from './components/Chatbot';
import { Difficulty } from './data/questions';

type Page = 'home' | 'levels' | 'quiz' | 'score';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedLevel, setSelectedLevel] = useState<Difficulty | null>(null);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  const handleStart = () => {
    setCurrentPage('levels');
  };

  const handleSelectLevel = (level: Difficulty) => {
    setSelectedLevel(level);
    setCurrentPage('quiz');
  };

  const handleFinishQuiz = (finalScore: number, answers: Record<number, string>) => {
    setScore(finalScore);
    setUserAnswers(answers);
    setCurrentPage('score');
  };

  const handleRetry = () => {
    setScore(0);
    setUserAnswers({});
    setCurrentPage('quiz');
  };

  const handleHome = () => {
    setSelectedLevel(null);
    setScore(0);
    setUserAnswers({});
    setCurrentPage('levels');
  };

  return (
    <div className="min-h-screen bg-[var(--color-cyber-black)] text-[var(--color-cyber-white)] font-sans overflow-x-hidden selection:bg-[var(--color-cyber-bright)] selection:text-black">
      {currentPage === 'home' && <Home onStart={handleStart} />}
      
      {currentPage === 'levels' && (
        <LevelSelection 
          onSelect={handleSelectLevel} 
          onBack={() => setCurrentPage('home')} 
        />
      )}
      
      {currentPage === 'quiz' && selectedLevel && (
        <Quiz 
          level={selectedLevel} 
          onFinish={handleFinishQuiz} 
          onBack={() => setCurrentPage('levels')} 
        />
      )}
      
      {currentPage === 'score' && selectedLevel && (
        <Score 
          score={score} 
          total={10} 
          level={selectedLevel} 
          answers={userAnswers} 
          onRetry={handleRetry} 
          onHome={handleHome} 
        />
      )}

      <Chatbot />
    </div>
  );
}
