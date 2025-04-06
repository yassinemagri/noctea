import React from 'react'

const AdPlaceholder = () => {
  return (
    <div>
    <h1 className="font-bold text-lg mb-4">Sponsored</h1>
    <div className="bg-gray-200 border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center min-h-[300px] mb-6">
      <div className="text-gray-500 text-center">
        <p className="font-medium">Advertisement</p>
        <p className="text-sm mt-2">Your ad could be here</p>
      </div>
    </div>

    {/* Second ad placeholder */}
    <div className="bg-gray-200 border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center min-h-[250px] mt-6">
      <div className="text-gray-500 text-center">
        <p className="font-medium">Advertisement</p>
        <p className="text-sm mt-2">300x250</p>
      </div>
    </div>
  </div>
  )
}

export default AdPlaceholder