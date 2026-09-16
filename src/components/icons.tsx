import { Monitor, Laptop, Brain, ShieldAlert, BookOpen, Scale, Landmark, RefreshCw } from 'lucide-react';

export const renderIcon = (iconName: string, size = 24) => {
  switch (iconName) {
    case 'Monitor': return <Monitor size={size} />;
    case 'Laptop': return <Laptop size={size} />;
    case 'Brain': return <Brain size={size} />;
    case 'ShieldAlert': return <ShieldAlert size={size} />;
    case 'BookOpen': return <BookOpen size={size} />;
    case 'Scale': return <Scale size={size} />;
    case 'Landmark': return <Landmark size={size} />;
    case 'RefreshCw': return <RefreshCw size={size} />;
    default: return <BookOpen size={size} />;
  }
};
