
import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface PDFExportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  filename: string;
  onFilenameChange: (filename: string) => void;
  onDownload: () => void;
}

export function PDFExportDialog({
  open,
  onOpenChange,
  filename,
  onFilenameChange,
  onDownload,
}: PDFExportDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Download as PDF</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label htmlFor="filename" className="text-sm font-medium">
              Enter a filename for your PDF:
            </label>
            <Input
              id="filename"
              value={filename}
              onChange={(e) => onFilenameChange(e.target.value)}
              placeholder="Enter filename (without .pdf)"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={onDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
