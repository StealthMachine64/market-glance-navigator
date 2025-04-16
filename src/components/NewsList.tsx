
import { useState } from "react";
import { NewsItem as NewsItemType } from "@/types/news";
import { NewsItem } from "@/components/NewsItem";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface NewsListProps {
  news: NewsItemType[];
}

export function NewsList({ news }: NewsListProps) {
  const [displayCount, setDisplayCount] = useState(4);
  
  const handleShowMore = () => {
    setDisplayCount(prev => prev + 4);
  };

  return (
    <div>
      <div className="space-y-4">
        {news.slice(0, displayCount).map((item) => (
          <NewsItem key={item.id} item={item} />
        ))}
      </div>
      
      {displayCount < news.length && (
        <div className="flex justify-center mt-6">
          <Button 
            variant="outline" 
            onClick={handleShowMore}
            className="flex items-center gap-2 bg-blue-900/30 border-blue-700/50 text-blue-100 hover:bg-blue-800/50"
          >
            <span>More News</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
