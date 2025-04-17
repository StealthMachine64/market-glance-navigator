
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { DashboardNavigation } from "@/components/DashboardNavigation";
import { MarketInsights } from "@/components/MarketInsights";
import { AIAssistant } from "@/components/AIAssistant";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
      <Header />
      
      <div className="container mx-auto py-8 px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <DashboardNavigation />
        
        <Card className="p-6 bg-[#1e293b]/80 border-blue-800/30 backdrop-blur-sm">
          <MarketInsights />
        </Card>
      </div>
      
      <AIAssistant />
    </div>
  );
};

export default Index;
