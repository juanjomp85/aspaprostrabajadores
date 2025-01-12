import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { QuickLink } from '@/types';
import { motion } from 'framer-motion';

interface LinkCardProps {
  link: QuickLink;
}

export function LinkCard({ link }: LinkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="p-6 h-full bg-white dark:bg-gray-800 overflow-hidden relative group">
        <div className="flex items-start space-x-4 relative z-10">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${link.color} text-white`}>
            {link.icon}
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
              {link.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {link.description}
            </p>
          </div>
        </div>
        
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 
            group-hover:opacity-10 transition-opacity duration-300`}
        />
      </Card>
    </motion.a>
  );
}