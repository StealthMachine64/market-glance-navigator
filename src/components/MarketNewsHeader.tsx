
import { Newspaper } from "lucide-react";

export function MarketNewsHeader() {
  return (
    <div className="flex items-center gap-3 mb-6">
      <Newspaper className="h-8 w-8 text-primary" />
      <div>
        <h1 className="text-2xl font-bold text-white">Market News & Analysis</h1>
        <p className="text-blue-200">Latest updates from global financial markets</p>
      </div>
    </div>
  );
}
