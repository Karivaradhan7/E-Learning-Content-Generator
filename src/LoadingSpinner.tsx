import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center p-4">
    <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
  </div>
);

export default LoadingSpinner;