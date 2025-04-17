
import React from 'react';
import { Bell, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="w-full bg-black py-4 px-6 flex items-center justify-between">
      <div className="text-2xl font-bold text-[#10b981]">Finsight.</div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-white" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">1</span>
        </Button>
        <Button variant="ghost" className="text-white flex items-center gap-2">
          <LogOut className="h-5 w-5" />
          <span>Sign out</span>
        </Button>
      </div>
    </header>
  );
}
