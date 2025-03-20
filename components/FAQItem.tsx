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
  
  // Dynamic max height based on content length
  const [maxHeight, setMaxHeight] = useState('500px');
  
  useEffect(() => {
    // Longer text needs more space
    if (answer.length > 200) {
      setMaxHeight('800px');
    }
    if (answer.length > 500) {
      setMaxHeight('1200px');
    }
  }, [answer]);
  
  return (
    <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center w-full">
          {/* Force proper positioning regardless of RTL setting */}
          {isRTL ? (
            <>
              {/* Arabic (RTL) - Chevron left, text right */}
              <div className="flex-shrink-0 ml-0 mr-3">
                {isExpanded ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
              <h3 className="flex-grow text-right font-semibold text-lg">
                {question}
              </h3>
            </>
          ) : (
            <>
              {/* English (LTR) - Text left, chevron right */}
              <h3 className="flex-grow text-left font-semibold text-lg">
                {question}
              </h3>
              <div className="flex-shrink-0 ml-3">
                {isExpanded ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </>
          )}
        </div>
      </button>
      
      <div 
        style={{ maxHeight: isExpanded ? maxHeight : '0' }}
        className={`px-4 transition-all duration-300 ease-in-out ${
          isExpanded 
            ? "py-4 opacity-100" 
            : "py-0 opacity-0 overflow-hidden"
        }`}
      >
        <p className={`text-gray-600 ${isRTL ? 'text-right text-lg leading-loose' : 'text-left'}`}>
          {answer}
        </p>
      </div>
      
      {/* NoScript fallback */}
      <noscript>
        <div className="px-4 py-4 border-t border-gray-200">
          <p className={`text-gray-600 ${isRTL ? 'text-right text-lg leading-loose' : 'text-left'}`}>
            {answer}
          </p>
        </div>
      </noscript>
    </div>
  );
}
