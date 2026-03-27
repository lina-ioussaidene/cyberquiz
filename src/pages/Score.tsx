import React from 'react';
import { motion } from 'motion/react';
import { RefreshCcw, ShieldCheck, ShieldAlert, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Difficulty, quizData } from '../data/questions';

interface ScoreProps {
  score: number;
  total: number;
  level: Difficulty;
  answers: Record<number, string>;
  onRetry: () => void;
  onHome: () => void;
}

export const Score: React.FC<ScoreProps> = ({ score, total, level, answers, onRetry, onHome }) => {
  const percentage = (score / total) * 100;
  
  let message = '';
  let Icon = ShieldAlert;
  let colorClass = 'text-red-500';
  let glowColor = 'rgba(239,68,68,0.5)';

  if (score <= 4) {
    message = "Vulnerabilities detected... try again!";
    Icon = AlertTriangle;
    colorClass = 'text-red-500';
    glowColor = 'rgba(239,68,68,0.5)';
  } else if (score <= 7) {
    message = "System secured, good job!";
    Icon = ShieldCheck;
    colorClass = 'text-yellow-400';
    glowColor = 'rgba(250,204,21,0.5)';
  } else {
    message = "Impressive! A true cybersecurity talent!";
    Icon = ShieldCheck;
    colorClass = 'text-[var(--color-cyber-bright)]';
    glowColor = 'rgba(89,255,0,0.5)';
  }

  const questions = quizData[level];
  const incorrectAnswers = questions.filter(q => answers[q.id] !== q.correctAnswer);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-4xl text-center"
      >
        <Card className="mb-12 border-opacity-50 py-16 flex flex-col items-center justify-center relative overflow-hidden">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] opacity-30 z-0"
            style={{ backgroundColor: glowColor.replace('0.5', '1') }}
          ></div>

          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={`z-10 mb-6 p-6 rounded-full bg-black bg-opacity-50 border-2 shadow-2xl`}
            style={{ borderColor: colorClass.includes('red') ? '#ef4444' : colorClass.includes('yellow') ? '#facc15' : 'var(--color-cyber-bright)' }}
          >
            <Icon size={64} className={colorClass} />
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-bold mb-4 z-10 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
            {score} <span className="text-4xl text-gray-500">/ {total}</span>
          </h2>
          
          <p className={`text-2xl md:text-3xl font-semibold z-10 mb-8 ${colorClass}`} style={{ textShadow: `0 0 20px ${glowColor}` }}>
            {message}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 z-10 mt-8">
            <Button onClick={onRetry} className="px-8 py-4 text-lg">
              <RefreshCcw size={20} /> Retry Level
            </Button>
            <Button variant="outline" onClick={onHome} className="px-8 py-4 text-lg">
              Change Difficulty
            </Button>
          </div>
        </Card>

        {incorrectAnswers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-left"
          >
            <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
              <AlertTriangle className="text-yellow-400" /> Incident Report
            </h3>
            
            <div className="space-y-6">
              {incorrectAnswers.map((q, i) => (
                <Card key={q.id} className="border-red-500 border-opacity-30 bg-[rgba(239,68,68,0.05)]">
                  <h4 className="text-xl font-semibold mb-6 text-gray-200">{i + 1}. {q.text}</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-red-500 bg-opacity-10 border border-red-500 border-opacity-30">
                      <div className="text-red-400 text-sm font-bold uppercase mb-2 flex items-center gap-2">
                        <XCircle size={16} /> Your Answer
                      </div>
                      <p className="text-gray-300">{answers[q.id] || "No answer provided"}</p>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-[var(--color-cyber-bright)] bg-opacity-10 border border-[var(--color-cyber-bright)] border-opacity-30">
                      <div className="text-[var(--color-cyber-bright)] text-sm font-bold uppercase mb-2 flex items-center gap-2">
                        <CheckCircle2 size={16} /> Correct Answer
                      </div>
                      <p className="text-white font-medium">{q.correctAnswer}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
