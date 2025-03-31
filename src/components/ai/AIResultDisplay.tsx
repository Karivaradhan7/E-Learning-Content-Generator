
import React from "react";
import { Copy, FileDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface AIResultDisplayProps {
  result: string;
  isLoading: boolean;
  onCopy: () => void;
  onExportPDF: () => void;
}

export function AIResultDisplay({ 
  result, 
  isLoading, 
  onCopy, 
  onExportPDF 
}: AIResultDisplayProps) {
  const resultRef = React.useRef<HTMLDivElement>(null);

  return (
    <Card className="p-4 relative min-h-[200px] bg-muted/30">
      {result ? (
        <>
          <div className="absolute right-2 top-2 flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onCopy}
              title="Copy to clipboard"
            >
              <Copy className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onExportPDF}
              title="Download as PDF"
            >
              <FileDown className="h-4 w-4" />
            </Button>
          </div>
          <div className="whitespace-pre-wrap" ref={resultRef}>{result}</div>
        </>
      ) : (
        <div className="text-center text-muted-foreground h-full flex items-center justify-center">
          {isLoading ? (
            <Loader2 className="h-8 w-8 animate-spin" />
          ) : (
            "AI-generated content will appear here"
          )}
        </div>
      )}
    </Card>
  );
}
