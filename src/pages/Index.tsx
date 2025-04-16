
import { useState, useEffect } from "react";
import { NewsItem } from "@/types/news";
import { getNewsByCategory, getNewsBySector, getNewsByStock, newsData } from "@/services/newsService";
import { NewsList } from "@/components/NewsList";
import { NewsFilter } from "@/components/NewsFilter";
import { MarketNewsHeader } from "@/components/MarketNewsHeader";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [news, setNews] = useState<NewsItem[]>(newsData);
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedStock, setSelectedStock] = useState("");

  useEffect(() => {
    let filteredNews = newsData;
    
    if (selectedSector) {
      filteredNews = getNewsBySector(selectedSector);
    }
    
    if (selectedStock) {
      filteredNews = getNewsByStock(selectedStock);
    }
    
    setNews(filteredNews);
  }, [selectedSector, selectedStock]);

  const handleFilterChange = (type: "sector" | "stock", value: string) => {
    if (type === "sector") {
      setSelectedSector(value);
      setSelectedStock("");
    } else {
      setSelectedStock(value);
      setSelectedSector("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <MarketNewsHeader />
            
            <Card className="p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Filter News</h2>
              <NewsFilter 
                onFilterChange={handleFilterChange}
                selectedSector={selectedSector}
                selectedStock={selectedStock}
              />
            </Card>
            
            {news.length > 0 ? (
              <NewsList news={news} />
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No news matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
