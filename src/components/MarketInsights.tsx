
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, DollarSign, BarChart } from 'lucide-react';

interface MarketDataProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

function MarketDataCard({ title, value, change, isPositive }: MarketDataProps) {
  const Icon = isPositive ? TrendingUp : TrendingDown;
  const changeColor = isPositive ? "text-market-bullish" : "text-market-bearish";
  
  return (
    <Card className="bg-[#1e293b]/80 backdrop-blur-sm border-blue-800/30">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-blue-100">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white mb-1">{value}</div>
        <div className={`flex items-center gap-1 ${changeColor}`}>
          <Icon className="h-4 w-4" />
          <span>{change}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function MarketInsights() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-blue-100 mb-2">Market Insights</h2>
        <p className="text-blue-300">Real-time data and analysis of global markets</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MarketDataCard 
          title="S&P 500" 
          value="4,785.34" 
          change="+1.2% Today" 
          isPositive={true} 
        />
        <MarketDataCard 
          title="NASDAQ" 
          value="16,742.39" 
          change="+1.6% Today" 
          isPositive={true} 
        />
        <MarketDataCard 
          title="Dow Jones" 
          value="38,124.12" 
          change="+0.7% Today" 
          isPositive={true} 
        />
      </div>
      
      <Card className="bg-[#1e293b]/80 backdrop-blur-sm border-blue-800/30 p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-blue-100">Market Performance</h3>
            <p className="text-sm text-blue-300">Last 7 days activity</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-xs">1D</Button>
            <Button variant="outline" size="sm" className="text-xs bg-primary/20">1W</Button>
            <Button variant="outline" size="sm" className="text-xs">1M</Button>
            <Button variant="outline" size="sm" className="text-xs">1Y</Button>
          </div>
        </div>
        <div className="h-64 w-full bg-blue-900/20 rounded-lg flex items-center justify-center">
          <BarChart className="h-12 w-12 text-blue-500/50" />
          <span className="text-blue-300 ml-2">Chart visualization area</span>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-[#1e293b]/80 backdrop-blur-sm border-blue-800/30">
          <CardHeader>
            <CardTitle className="text-lg text-blue-100">Top Gainers</CardTitle>
            <CardDescription className="text-blue-300">Best performing assets today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { symbol: "AAPL", name: "Apple Inc.", price: "$212.45", change: "+2.5%" },
                { symbol: "TSLA", name: "Tesla Inc.", price: "$878.32", change: "+3.8%" },
                { symbol: "NVDA", name: "NVIDIA Corp.", price: "$945.21", change: "+4.2%" },
              ].map((stock, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-blue-800/30 last:border-0">
                  <div>
                    <div className="font-medium text-white">{stock.symbol}</div>
                    <div className="text-sm text-blue-300">{stock.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-white">{stock.price}</div>
                    <div className="text-sm text-market-bullish">{stock.change}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1e293b]/80 backdrop-blur-sm border-blue-800/30">
          <CardHeader>
            <CardTitle className="text-lg text-blue-100">Top Losers</CardTitle>
            <CardDescription className="text-blue-300">Worst performing assets today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { symbol: "META", name: "Meta Platforms Inc.", price: "$485.67", change: "-1.2%" },
                { symbol: "NFLX", name: "Netflix Inc.", price: "$625.45", change: "-0.8%" },
                { symbol: "AMZN", name: "Amazon.com Inc.", price: "$178.34", change: "-0.5%" },
              ].map((stock, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-blue-800/30 last:border-0">
                  <div>
                    <div className="font-medium text-white">{stock.symbol}</div>
                    <div className="text-sm text-blue-300">{stock.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-white">{stock.price}</div>
                    <div className="text-sm text-market-bearish">{stock.change}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const Button = ({ children, variant = "default", size = "default", className = "" }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:opacity-50";
  
  const variants = {
    default: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-blue-800 text-blue-100 hover:bg-blue-900/20",
  };
  
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-8 px-3 text-sm",
  };
  
  const variantStyle = variants[variant] || variants.default;
  const sizeStyle = sizes[size] || sizes.default;
  
  return (
    <button className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className}`}>
      {children}
    </button>
  );
};
