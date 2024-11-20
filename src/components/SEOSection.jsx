import React from 'react';
import { Search, MapPin } from 'lucide-react';

const SEOSection = () => {
  return (
    <div className="bg-[#1101d] py-4 my-0">
      <div className="w-full max-w-6xl mx-auto px-2 flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Google Search Card */}
        <div className="w-full lg:w-1/3 bg-[#11101d] rounded-xl shadow-xl overflow-hidden">
          <div className="p-1.5 border-b border-gray-700">
            <div className="flex gap-1.5 mb-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
            </div>
            <div className="flex items-center bg-[#2a2d3d] rounded px-2 py-1">
              <div className="flex-1 flex items-center gap-1.5 text-gray-400 text-sm">
                <Search className="w-3.5 h-3.5" />
                <span>google.com/search</span>
              </div>
            </div>
          </div>

          <div className="p-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl font-medium text-white">Google</span>
            </div>

            <div className="flex gap-3 text-sm text-gray-400 border-b border-gray-700 pb-1.5">
              <span className="text-blue-400 border-b-2 border-blue-400">All</span>
              <span>Images</span>
              <span>Videos</span>
              <span>Maps</span>
              <span>Shopping</span>
            </div>

            <div className="mt-3">
              <div className="flex gap-2">
                <div className="w-5 h-5 rounded-full bg-orange-400 flex-shrink-0"></div>
                <div>
                  <div className="text-blue-400 hover:underline cursor-pointer text-sm">
                    Your Company - Your Products
                  </div>
                  <div className="text-xs text-gray-400">yourcompany.com</div>
                  <div className="mt-0.5 text-xs text-gray-300 max-w-sm">
                    Your company description would appear here...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Card */}
        <div className="w-full lg:w-1/3 bg-[#090909] rounded-xl shadow-xl overflow-hidden">
          <div className="p-1.5 border-b border-gray-700">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
            </div>
          </div>

          <div className="p-3">
            {/* Improved Map Grid */}
            <div className="relative bg-[#2a2d3d] rounded-lg overflow-hidden h-40 mb-3">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <defs>
                  <pattern id="improved-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path 
                      d="M 0 0 L 100 0 L 100 100 L 0 100 Z" 
                      fill="none" 
                      stroke="#3f4164" 
                      strokeWidth="2"
                    />
                    <path 
                      d="M 50 0 L 50 100 M 0 50 L 100 50" 
                      fill="none" 
                      stroke="#3f4164" 
                      strokeWidth="2"
                      strokeDasharray="2 2"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#improved-grid)" />
                <path 
                  d="M 200 140 L 200 160 L 180 160 L 200 140" 
                  fill="#6366f1" 
                  opacity="0.8"
                />
                <circle 
                  cx="200" 
                  cy="150" 
                  r="6" 
                  fill="#818cf8"
                />
              </svg>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-1.5 bg-gray-600 rounded-full flex-grow"></div>
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/3 text-white text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Get Top Rankings on Google</h1>
          <p className="text-gray-400 text-base mb-4">
            Let your business taste the flavour of top rankings with the best result-driven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
           
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-medium transition-colors text-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOSection;