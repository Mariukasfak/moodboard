import React from 'react';
import { RecycleIcon } from './RecycleIcons';

interface RecyclePathProps {
  itemType: string;
  currentStage: number;
}

const RecyclePath: React.FC<RecyclePathProps> = ({ itemType, currentStage }) => {
  const stages = [1, 2, 3, 4, 5];
  
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full my-8 relative">
      {/* Jungiamoji linija tarp etapų */}
      <div className="hidden md:block absolute left-0 right-0 h-1 bg-green-200 top-1/2 transform -translate-y-1/2 z-0"></div>
      
      {/* Etapų žingsniai */}
      {stages.map((stage) => (
        <div key={stage} className="flex flex-col items-center mb-6 md:mb-0 z-10">
          <div 
            className={`w-16 h-16 rounded-full flex items-center justify-center 
            ${stage <= currentStage ? 'bg-green-500' : 'bg-gray-200'} 
            transition-all duration-500 mb-2`}
          >
            <RecycleIcon stage={stage} itemType={itemType} size={32} />
          </div>
          <div className="text-sm font-medium mt-2 text-center">
            {getStageLabel(stage)}
          </div>
        </div>
      ))}
    </div>
  );
};

// Etapų pavadinimai
const getStageLabel = (stage: number): string => {
  switch (stage) {
    case 1:
      return 'Paėmimas';
    case 2:
      return 'Įvertinimas';
    case 3:
      return 'Perdirbimas';
    case 4:
      return 'Naujas panaudojimas';
    case 5:
      return 'Nauda aplinkai';
    default:
      return '';
  }
};

export default RecyclePath;