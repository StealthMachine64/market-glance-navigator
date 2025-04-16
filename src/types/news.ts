
export type NewsSource = 'CNBC' | 'Bloomberg' | 'Financial Times' | 'Reuters' | 'Wall Street Journal';

export type NewsCategory = 'Top News' | 'Markets' | 'Economy' | 'Companies' | 'Technology' | 'Energy' | 'Finance';

export type Sentiment = 'bullish' | 'bearish' | 'neutral';

export interface NewsItem {
  id: string;
  title: string;
  source: NewsSource;
  date: string;
  url: string;
  summary?: string;
  category: NewsCategory;
  relatedStocks?: string[];
  sentiment?: Sentiment;
}
