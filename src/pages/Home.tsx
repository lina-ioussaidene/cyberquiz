import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

interface HomeProps {
  onStart: () => void;
}

export const Home: React.FC<HomeProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[var(--color-cyber-dark)] rounded-full blur-[100px] opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[var(--color-cyber-bright)] rounded-full blur-[150px] opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center max-w-3xl w-full"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="p-4 rounded-full bg-[var(--color-cyber-dark)] border border-[var(--color-cyber-bright)] border-opacity-30 shadow-[0_0_30px_rgba(89,255,0,0.3)]">
            <Shield size={64} className="text-[var(--color-cyber-bright)]" />
          </div>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter text-glow text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-cyber-white)] to-[var(--color-cyber-light)]">
          CyberQuiz
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-10 font-light">
          Test your cybersecurity knowledge and defend against modern threats.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button onClick={onStart} className="w-full sm:w-auto text-lg px-8 py-4">
            Start Quiz <ArrowRight size={20} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-panel p-6 rounded-2xl flex flex-col items-start gap-4"
          >
            <Lock className="text-[var(--color-cyber-bright)]" size={32} />
            <h3 className="text-xl font-semibold">Secure Your Data</h3>
            <p className="text-sm text-gray-400">Learn how to protect sensitive information from unauthorized access and breaches.</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-panel p-6 rounded-2xl flex flex-col items-start gap-4"
          >
            <Eye className="text-[var(--color-cyber-bright)]" size={32} />
            <h3 className="text-xl font-semibold">Spot Threats</h3>
            <p className="text-sm text-gray-400">Identify phishing attempts, malware, and social engineering tactics before they strike.</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-panel p-6 rounded-2xl flex flex-col items-start gap-4"
          >
            <Shield className="text-[var(--color-cyber-bright)]" size={32} />
            <h3 className="text-xl font-semibold">Build Defenses</h3>
            <p className="text-sm text-gray-400">Understand the principles of network security, encryption, and access control.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
