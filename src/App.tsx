import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LinkCard } from '@/components/LinkCard';
/* import { CategoryFilter } from '@/components/CategoryFilter'; */
import { quickLinks } from '@/data/links';

function App() {
  const [selectedCategory] = useState<string | null>(null);
  
  const filteredLinks = selectedCategory
    ? quickLinks.filter(link => link.category === selectedCategory)
    : quickLinks;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ✨ Aspapros ✨
        </motion.h1>

        {/* <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        /> */}

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredLinks.map((link) => (
              <motion.div
                key={link.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <LinkCard link={link} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default App;