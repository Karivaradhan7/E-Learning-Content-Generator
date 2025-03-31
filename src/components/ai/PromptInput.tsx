
import React from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface PromptInputProps {
  prompt: string;
  onPromptChange: (prompt: string) => void;
  placeholder: string;
  isLoading: boolean;
  onGenerate: () => void;
}

export function PromptInput({
  prompt,
  onPromptChange,
  placeholder,
  isLoading,
  onGenerate,
}: PromptInputProps) {
  return (
    <div className="space-y-4">
      <Textarea
        placeholder={placeholder}
        className="min-h-[200px]"
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
      />
      <Button 
        onClick={onGenerate} 
        disabled={isLoading || !prompt.trim()}
        className="w-full"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          "Generate"
        )}
      </Button>
    </div>
  );
}
