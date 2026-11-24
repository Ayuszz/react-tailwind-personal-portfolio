import {
  TrendingUp, Boxes, Zap, Users, BarChart3, ShieldCheck, MailWarning, Sheet, Database,
  Code2, PieChart, Brain, ShoppingBag, Award, GraduationCap, Circle, LineChart, Target, Briefcase, ListChecks, Lightbulb,
  Server, Bot, Bug, Map, Hotel, Music, Layout, Cloud, Sparkles,
} from "lucide-react";

// Icons the config file can refer to by name. Add more here if needed.
const icons = {
  TrendingUp, Boxes, Zap, Users, BarChart3, ShieldCheck, MailWarning, Sheet, Database,
  Code2, PieChart, Brain, ShoppingBag, Award, GraduationCap, LineChart, Target, Briefcase, ListChecks, Lightbulb,
  Server, Bot, Bug, Map, Hotel, Music, Layout, Cloud, Sparkles,
};

export const Icon = ({ name, ...props }) => {
  const Cmp = icons[name] || Circle;
  return <Cmp {...props} />;
};
