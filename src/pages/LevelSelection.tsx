import React from 'react';
import { motion } from 'motion/react';
import { Shield, ShieldAlert, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Difficulty } from '../data/questions';

interface LevelSelectionProps {
  onSelect: (level: Difficulty) => void;
  onBack: () => void;
}

export const LevelSelection: React.FC<LevelSelectionProps> = ({ onSelect, onBack }) => {
  const levels: { id: Difficulty; title: string; desc: string; icon: React.ReactNode; color: string }[] = [
    {
      id: 'Beginner',
      title: 'Beginner',
      desc: 'Basic concepts, passwords, and phishing.',
      icon: <Shield size={48} className="text-[var(--color-cyber-light)]" />,
      color: 'var(--color-cyber-light)'
    },
    {
      id: 'Intermediate',
      title: 'Intermediate',
      desc: 'Network security, encryption, and malware.',
      icon: <ShieldCheck size={48} className="text-[var(--color-cyber-bright)]" />,
      color: 'var(--color-cyber-bright)'
    },
    {
      id: 'Expert',
      title: 'Expert',
      desc: 'Advanced threats, cryptography, and exploits.',
      icon: <ShieldAlert size={48} className="text-red-500" />,
      color: '#ef4444'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      <div className="absolute top-0 left-0 w-full p-6">
        <Button variant="outline" onClick={onBack} className="w-auto px-4 py-2 text-sm">
          <ArrowLeft size={16} /> Back
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-glow">Select Difficulty</h2>
        <p className="text-xl text-gray-400 mb-12">Choose your challenge level to begin the simulation.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level, i) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card 
                hoverable 
                onClick={() => onSelect(level.id)}
                className="h-full flex flex-col items-center justify-center text-center gap-6 py-12 border-opacity-50"
              >
                <div 
                  className="p-6 rounded-full bg-[var(--color-cyber-dark)] bg-opacity-50 shadow-lg"
                  style={{ boxShadow: `0 0 30px ${level.color}40` }}
                >
                  {level.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2" style={{ color: level.color }}>{level.title}</h3>
                  <p className="text-gray-400">{level.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
