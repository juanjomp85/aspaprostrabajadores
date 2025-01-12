import { 
  GraduationCap,
  Brain,
  Hash,
  Gamepad2,
  Coffee,
  Trophy,
  CalendarCheck2,
  CalendarPlus
} from 'lucide-react';
import { QuickLink } from '@/types';

export const quickLinks: QuickLink[] = [
  {
    title: "Control horario",
    description: "Registro diario de horarios",
    url: "https://aspaproscontrolhorario.netlify.app/",
    icon: <CalendarCheck2 className="h-6 w-6" />, 
    category: "Herramientas",
    color: "from-pink-500 to-purple-600"
  },
  {
    title: "Calendario de notas",
    description: "Agenda sencilla para anotar",
    url: "https://aspcalendarionotas.netlify.app/",
    icon: <CalendarPlus className="h-6 w-6" />, 
    category: "Herramientas",
    color: "from-green-500 to-green-600"
  }
];

export const categories = [
  { name: "Social Media", icon: <Hash className="h-5 w-5" /> },
  { name: "Aprendizaje", icon: <GraduationCap className="h-5 w-5" /> },
  { name: "Entretenimiento", icon: <Gamepad2 className="h-5 w-5" /> },
  { name: "Deportes", icon: <Trophy className="h-5 w-5" /> },
  { name: "Conocimiento", icon: <Brain className="h-5 w-5" /> },
  { name: "Herramientas", icon: <Coffee className="h-5 w-5" /> }
];
