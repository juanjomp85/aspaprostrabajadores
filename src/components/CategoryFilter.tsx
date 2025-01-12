import { Button } from "@/components/ui/button";
import { Category } from "@/types";
import { motion } from "framer-motion";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        onClick={() => onSelectCategory(null)}
        className="rounded-full"
      >
        Todos
      </Button>
      {categories.map((category) => (
        <motion.div
          key={category.name}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={selectedCategory === category.name ? "default" : "outline"}
            onClick={() => onSelectCategory(category.name)}
            className="rounded-full"
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}