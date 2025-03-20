'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLocale } from 'next-intl';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const locale = useLocale();
  const isRTL = locale === 'ar';
  
  // Dynamic max height to accommodate longer Arabic text
  const [maxHeight, setMaxHeight] = useState('500px');
  
  // Adjust max height based on content length and language
  useEffect(() => {
    // Arabic text often needs more vertical space
    if (isRTL && answer.length > 200) {
      setMaxHeight('800px');
    }
  }, [isRTL, answer]);
  
  return (
    <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={isExpanded}
      >
        {/* Different order of elements for RTL vs LTR */}
        {isRTL ? (
          <>
            {/* For RTL: Chevron on left */}
            <div className="flex-shrink-0 order-first">
              {isExpanded ? (
                <ChevronUp className="h-5 w-5 text-primary" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </div>
            
            {/* Question text aligned right */}
            <h3 className="flex-grow text-right font-semibold text-lg pr-4">
              {question}
            </h3>
          </>
        ) : (
          <>
            {/* For LTR: Question text aligned left */}
            <h3 className="flex-grow text-left font-semibold text-lg">
              {question}
            </h3>
            
            {/* Chevron on right */}
            <div className="flex-shrink-0 ml-4">
              {isExpanded ? (
                <ChevronUp className="h-5 w-5 text-primary" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </div>
          </>
        )}
      </button>
      
      <div 
        style={{ maxHeight: isExpanded ? maxHeight : '0' }}
        className={`px-4 transition-all duration-300 ease-in-out ${
          isExpanded 
            ? "py-4 opacity-100" 
            : "py-0 opacity-0 overflow-hidden"
        } ${isRTL ? 'text-right' : 'text-left'}`}
      >
        <p className={`text-gray-600 ${isRTL ? 'leading-relaxed' : ''}`}>
          {answer}
        </p>
      </div>
      
      {/* NoScript fallback for users without JavaScript */}
      <noscript>
        <div className={`px-4 py-4 border-t border-gray-200 ${isRTL ? 'text-right' : 'text-left'}`}>
          <p className={`text-gray-600 ${isRTL ? 'leading-relaxed' : ''}`}>
            {answer}
          </p>
        </div>
      </noscript>
    </div>
  );
}
