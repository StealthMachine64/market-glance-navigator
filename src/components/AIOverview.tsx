
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
    <div className="mt-2 space-y-1 border-l-4 border-primary/30 pl-3 py-1">
      <div className="flex items-center gap-2">
        <span className="font-medium text-primary text-sm">AI Overview:</span>
        <p className="text-xs text-foreground/90">{overview}</p>
      </div>
      
      {marketEffect && (
        <div className="flex items-center gap-2">
          <span className="font-medium text-primary text-sm">Market Effect:</span>
          <div className={cn("flex items-center gap-1", effectColor)}>
            <EffectIcon className="h-3 w-3" />
            <span className="text-xs font-medium capitalize">{marketEffect} Effect</span>
          </div>
        </div>
      )}
    </div>
  );
}

