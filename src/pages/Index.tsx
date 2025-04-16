
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

  // Add AI Overview and Market Effect to sample news data
  useEffect(() => {
    const updatedNewsData = newsData.map(item => {
      if (item.id === "1") {
        return {
          ...item,
          aiOverview: "The company reported Q2 earnings that exceeded analyst expectations by 15%, driven by strong online sales growth.",
          marketEffect: "positive" as const
        };
      }
      if (item.id === "2") {
        return {
          ...item,
          aiOverview: "European markets climbed after recent economic indicators showed better-than-expected growth across major economies.",
          marketEffect: "positive" as const
        };
      }
      if (item.id === "3") {
        return {
          ...item,
          aiOverview: "Technology stocks led market gains as investors poured capital into companies focusing on artificial intelligence development.",
          marketEffect: "positive" as const
        };
      }
      if (item.id === "5") {
        return {
          ...item,
          aiOverview: "Crude oil prices fell 3% following reports of increased production from major oil-producing nations.",
          marketEffect: "negative" as const
        };
      }
      if (item.id === "7") {
        return {
          ...item,
          aiOverview: "Retail sales came in below consensus forecasts for July, raising concerns about consumer spending.",
          marketEffect: "negative" as const
        };
      }
      if (item.id === "8") {
        return {
          ...item,
          aiOverview: "A new industry report suggests that the global chip shortage is gradually improving as production capacity expands.",
          marketEffect: "neutral" as const
        };
      }
      return item;
    });
    
    let filteredNews = updatedNewsData;
    
    if (selectedSector) {
      filteredNews = getNewsBySector(selectedSector, updatedNewsData);
    }
    
    if (selectedStock) {
      filteredNews = getNewsByStock(selectedStock, updatedNewsData);
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
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
      <div className="container mx-auto py-8 px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <MarketNewsHeader />
            
            <Card className="p-6 mb-6 bg-[#1e293b]/80 border-blue-800/30 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-blue-100">Filter News</h2>
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
                <p className="text-lg text-blue-300">No news matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
