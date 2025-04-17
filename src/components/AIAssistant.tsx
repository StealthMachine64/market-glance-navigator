
import React from 'react';
import { Bot, MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function AIAssistant() {
  return (
    <div className="fixed bottom-6 right-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="rounded-full h-14 w-14 bg-[#10b981] hover:bg-[#0d9668] shadow-lg">
            <Bot className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="sm:max-w-md bg-[#1e293b] border-blue-800/30 text-white">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between border-b border-blue-800/30 pb-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-[#10b981] flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Finsight AI Assistant</h3>
                  <p className="text-sm text-blue-300">How can I help you today?</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 py-4 overflow-auto">
              <div className="bg-blue-900/20 rounded-lg p-3 mb-4 max-w-[80%]">
                <p className="text-sm">
                  Have questions? I'm here to help with market insights, portfolio analysis, or trading suggestions.
                </p>
              </div>
            </div>
            
            <div className="border-t border-blue-800/30 pt-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask about market trends..."
                  className="flex-1 bg-blue-900/20 border border-blue-800/30 rounded-md px-3 py-2 text-sm"
                />
                <Button size="icon" className="bg-[#10b981] hover:bg-[#0d9668]">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
