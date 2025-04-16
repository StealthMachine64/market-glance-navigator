
import { MarketEffect } from "@/types/news";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface AIOverviewProps {
  overview?: string;
  marketEffect?: MarketEffect;
}

export function AIOverview({ overview, marketEffect }: AIOverviewProps) {
  if (!overview) return null;
  
  const effectColor = {
    positive: "text-market-bullish",
    negative: "text-market-bearish",
    neutral: "text-market-neutral"
  }[marketEffect || 'neutral'];
  
  const EffectIcon = {
    positive: TrendingUp,
    negative: TrendingDown,
    neutral: Minus
  }[marketEffect || 'neutral'];

  return (
    <div className="border-l-4 border-primary/30 pl-2 py-0 space-y-0.5">
      <div className="flex items-center gap-1.5">
        <span className="font-medium text-primary text-xs">AI Overview:</span>
        <p className="text-[10px] text-foreground/80">{overview}</p>
      </div>
      
      {marketEffect && (
        <div className="flex items-center gap-1.5">
          <span className="font-medium text-primary text-xs">Market Effect:</span>
          <div className={cn("flex items-center gap-1", effectColor)}>
            <EffectIcon className="h-2.5 w-2.5" />
            <span className="text-[10px] font-medium capitalize">{marketEffect} Effect</span>
          </div>
        </div>
      )}
    </div>
  );
}
