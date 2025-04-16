
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
    <div className="mt-4 space-y-2 border-l-4 border-primary/30 pl-4 py-2">
      <div className="flex items-start gap-2">
        <span className="font-medium text-primary">AI Overview:</span>
        <p className="text-sm text-foreground/90">{overview}</p>
      </div>
      
      {marketEffect && (
        <div className="flex items-center gap-2">
          <span className="font-medium text-primary">Market Effect:</span>
          <div className={cn("flex items-center gap-1", effectColor)}>
            <EffectIcon className="h-4 w-4" />
            <span className="text-sm font-medium capitalize">{marketEffect} Effect</span>
          </div>
        </div>
      )}
    </div>
  );
}
