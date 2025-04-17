
import React from 'react';
import { BarChart2, LineChart, PieChart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

function NavItem({ icon: Icon, label, isActive, onClick }: NavItemProps) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-md transition-colors",
        isActive 
          ? "bg-blue-100 text-primary" 
          : "text-gray-600 hover:bg-gray-100"
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </button>
  );
}

export function DashboardNavigation() {
  return (
    <div className="flex items-center gap-2 mt-4 mb-6">
      <NavItem icon={PieChart} label="Portfolio" />
      <NavItem icon={BarChart2} label="Trading Signals" />
      <NavItem icon={LineChart} label="Market Insights" isActive />
    </div>
  );
}
