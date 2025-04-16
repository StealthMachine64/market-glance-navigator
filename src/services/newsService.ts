
import { NewsItem } from "@/types/news";

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Major Retailer Reports Better Than Expected Earnings",
    source: "CNBC",
    date: "2024-08-13",
    url: "#",
    summary: "The company reported Q2 earnings that exceeded analyst expectations by 15%, driven by strong online sales growth.",
    category: "Companies",
    relatedStocks: ["WMT", "TGT", "AMZN"],
    sentiment: "bullish"
  },
  {
    id: "2",
    title: "European Markets Rally on Strong Economic Data",
    source: "Financial Times",
    date: "2024-08-13",
    url: "#",
    summary: "European markets climbed after recent economic indicators showed better-than-expected growth across major economies.",
    category: "Markets",
    sentiment: "bullish"
  },
  {
    id: "3",
    title: "Tech Sector Leads Market Gains as AI Investments Surge",
    source: "Bloomberg",
    date: "2024-08-12",
    url: "#",
    summary: "Technology stocks led market gains as investors poured capital into companies focusing on artificial intelligence development.",
    category: "Technology",
    relatedStocks: ["NVDA", "MSFT", "GOOGL", "AAPL"],
    sentiment: "bullish"
  },
  {
    id: "4",
    title: "Federal Reserve Signals Potential Rate Cut in September",
    source: "Wall Street Journal",
    date: "2024-08-11",
    url: "#",
    summary: "Fed officials hinted at a possible interest rate reduction at their next meeting, citing moderating inflation data.",
    category: "Economy",
    sentiment: "bullish"
  },
  {
    id: "5",
    title: "Oil Prices Drop on Supply Concerns",
    source: "Reuters",
    date: "2024-08-10",
    url: "#",
    summary: "Crude oil prices fell 3% following reports of increased production from major oil-producing nations.",
    category: "Energy",
    relatedStocks: ["XOM", "CVX", "BP"],
    sentiment: "bearish"
  },
  {
    id: "6",
    title: "Banking Sector Faces Regulatory Scrutiny",
    source: "Financial Times",
    date: "2024-08-09",
    url: "#",
    summary: "Regulators announced plans for stricter oversight of major financial institutions following recent compliance issues.",
    category: "Finance",
    relatedStocks: ["JPM", "BAC", "WFC", "C"],
    sentiment: "bearish"
  },
  {
    id: "7",
    title: "Retail Sales Data Disappoints",
    source: "CNBC",
    date: "2024-08-08",
    url: "#",
    summary: "Retail sales came in below consensus forecasts for July, raising concerns about consumer spending.",
    category: "Economy",
    sentiment: "bearish"
  },
  {
    id: "8",
    title: "Semiconductor Shortage Easing According to Industry Report",
    source: "Bloomberg",
    date: "2024-08-07",
    url: "#",
    summary: "A new industry report suggests that the global chip shortage is gradually improving as production capacity expands.",
    category: "Technology",
    relatedStocks: ["INTC", "AMD", "TSM"],
    sentiment: "neutral"
  },
  {
    id: "9",
    title: "Green Energy Investments Hit Record High",
    source: "Reuters",
    date: "2024-08-06",
    url: "#",
    summary: "Global investments in renewable energy sources reached an all-time high in the first half of 2024.",
    category: "Energy",
    relatedStocks: ["ENPH", "SEDG", "NEE"],
    sentiment: "bullish"
  },
  {
    id: "10",
    title: "Major Merger Announcement in Healthcare Sector",
    source: "Wall Street Journal",
    date: "2024-08-05",
    url: "#",
    summary: "Two leading healthcare companies announced a $30 billion merger that would create the largest player in the industry.",
    category: "Companies",
    relatedStocks: ["JNJ", "PFE", "MRK"],
    sentiment: "neutral"
  }
];

export const stockSymbols = [
  "AAPL", "MSFT", "GOOGL", "AMZN", "META", 
  "TSLA", "NVDA", "JPM", "V", "WMT", 
  "JNJ", "PG", "XOM", "BAC", "HD",
  "PFE", "INTC", "VZ", "DIS", "KO"
];

export const sectors = [
  "Technology", 
  "Finance", 
  "Healthcare", 
  "Energy", 
  "Consumer Goods",
  "Utilities",
  "Real Estate",
  "Industrials",
  "Materials",
  "Communication Services"
];

export const getNewsByCategory = (category: string, customNews: NewsItem[] = newsData): NewsItem[] => {
  if (category === 'Top News') {
    return customNews;
  }
  return customNews.filter(news => news.category === category);
};

export const getNewsByStock = (symbol: string, customNews: NewsItem[] = newsData): NewsItem[] => {
  return customNews.filter(news => news.relatedStocks?.includes(symbol));
};

export const getNewsBySector = (sector: string, customNews: NewsItem[] = newsData): NewsItem[] => {
  const sectorStockMap: Record<string, string[]> = {
    "Technology": ["AAPL", "MSFT", "GOOGL", "NVDA", "INTC"],
    "Finance": ["JPM", "BAC", "V", "WFC", "C"],
    "Healthcare": ["JNJ", "PFE", "MRK"],
    "Energy": ["XOM", "CVX", "BP", "ENPH", "SEDG", "NEE"],
    "Consumer Goods": ["WMT", "PG", "KO", "HD"],
    "Communication Services": ["META", "DIS", "VZ"],
    "Utilities": ["NEE"],
    "Real Estate": [],
    "Industrials": [],
    "Materials": []
  };
  
  const relatedStocks = sectorStockMap[sector] || [];
  return customNews.filter(news => 
    news.category === sector || 
    news.relatedStocks?.some(stock => relatedStocks.includes(stock))
  );
};
