
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { sectors, stockSymbols } from "@/services/newsService";

interface NewsFilterProps {
  onFilterChange: (type: "sector" | "stock", value: string) => void;
  selectedSector: string;
  selectedStock: string;
}

export function NewsFilter({ onFilterChange, selectedSector, selectedStock }: NewsFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full sm:w-auto justify-between">
            <span>{selectedSector || "All Sectors"}</span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuRadioGroup value={selectedSector} onValueChange={(value) => onFilterChange("sector", value)}>
            <DropdownMenuRadioItem value="">All Sectors</DropdownMenuRadioItem>
            {sectors.map((sector) => (
              <DropdownMenuRadioItem key={sector} value={sector}>
                {sector}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full sm:w-auto justify-between">
            <span>{selectedStock || "All Stocks"}</span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuRadioGroup value={selectedStock} onValueChange={(value) => onFilterChange("stock", value)}>
            <DropdownMenuRadioItem value="">All Stocks</DropdownMenuRadioItem>
            {stockSymbols.map((stock) => (
              <DropdownMenuRadioItem key={stock} value={stock}>
                {stock}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
