
import { NewsItem as NewsItemType } from "@/types/news";
import { cn } from "@/lib/utils";

interface NewsItemProps {
  item: NewsItemType;
}

export function NewsItem({ item }: NewsItemProps) {
  const sentimentColor = item.sentiment ? {
    bullish: "text-market-bullish",
    bearish: "text-market-bearish",
    neutral: "text-market-neutral"
  }[item.sentiment] : "";

  return (
    <div className="news-card">
      <h3 className="news-title">
        <a href={item.url} className={cn(sentimentColor)}>
          {item.title}
        </a>
      </h3>
      <div className="flex justify-between items-center mt-2">
        <span className="news-source">{item.source}</span>
        <span className="news-date">{item.date}</span>
      </div>
      {item.summary && (
        <p className="mt-2 text-muted-foreground">{item.summary}</p>
      )}
      {item.relatedStocks && item.relatedStocks.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {item.relatedStocks.map(stock => (
            <span key={stock} className="px-2 py-1 bg-secondary text-xs rounded-full">
              {stock}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
