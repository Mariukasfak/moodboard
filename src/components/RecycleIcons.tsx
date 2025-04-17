import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Daikto ikonų komponentas pagal daikto tipą
export const ItemIcon = ({ itemType, size = 24 }: { itemType: string, size?: number }) => {
  const getIcon = () => {
    switch(itemType.toLowerCase()) {
      case 'buitinė technika':
        return '❄️';
      case 'elektronika':
        return '📱';
      case 'baldai':
        return '🪑';
      case 'metalo laužas':
        return '🔧';
      default:
        return '📦';
    }
  };

  return (
    <span style={{ fontSize: `${size}px` }}>{getIcon()}</span>
  );
};

// Perdirbimo proceso vizualizacijos komponentas
export const RecycleIcon = ({ stage, itemType, size = 40 }: { stage: number, itemType: string, size?: number }) => {
  // Kiekvieno daikto tipo vizualizacija skirtinguose etapuose
  const getStageIcon = () => {
    // Bendri etapų ikonų variantai
    const stageIcons: Record<string, string> = {
      '1': '🚚', // Paėmimas
      '2': '🔍', // Įvertinimas
      '3': '♻️', // Perdirbimas
      '4': '✨', // Nauja forma
      '5': '🌍', // Planetai geriau
    };
    
    // Specialios ikonos pagal daikto tipą ir etapą
    if (itemType.toLowerCase() === 'buitinė technika') {
      if (stage === 3) return '🧊'; // Specialus buitinės technikos perdirbimo simbolis
      if (stage === 4) return '🔌'; // Buitinės technikos komponentų naujas panaudojimas
    } 
    else if (itemType.toLowerCase() === 'elektronika') {
      if (stage === 3) return '💻'; // Elektronikos perdirbimo simbolis
      if (stage === 4) return '🖥️'; // Elektronikos dalių naujas panaudojimas
    }
    else if (itemType.toLowerCase() === 'baldai') {
      if (stage === 3) return '🪵'; // Baldų perdirbimo simbolis
      if (stage === 4) return '🪑'; // Baldų medžiagų naujas panaudojimas
    }
    else if (itemType.toLowerCase() === 'metalo laužas') {
      if (stage === 3) return '⚙️'; // Metalo perdirbimo simbolis
      if (stage === 4) return '🔧'; // Metalo naujas panaudojimas
    }
    
    // Jei nėra specialios ikonos, naudoti bendras
    return stageIcons[stage.toString()] || '♻️';
  };

  return (
    <span style={{ fontSize: `${size}px` }}>{getStageIcon()}</span>
  );
};

// Transformacijos proceso efekto komponentas
export const TransformationEffect = ({ itemType, isActive = false }: { itemType: string, isActive?: boolean }) => {
  const [opacity, setOpacity] = useState(0.7);
  
  // Pulsuojantis efektas, kai aktyvus
  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setOpacity(prev => prev === 0.7 ? 1 : 0.7);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isActive]);
  
  // Skirtingos spalvos pagal daikto tipą
  const getColor = () => {
    switch(itemType.toLowerCase()) {
      case 'buitinė technika':
        return '#36A281'; // Tamsesnė žalia - aplinkos technologija
      case 'elektronika':
        return '#9381FF'; // Violetinė - technologijų sektorius
      case 'baldai':
        return '#3B995B'; // Žalia - medienos sektorius
      case 'metalo laužas':
        return '#4EA8DE'; // Mėlyna - pramoninis sektorius
      default:
        return '#167d36'; // Standartinė svetainės žalia
    }
  };
  
  return (
    <div 
      style={{ 
        width: isActive ? '40px' : '30px', 
        height: isActive ? '40px' : '30px', 
        borderRadius: '50%',
        background: getColor(),
        opacity: isActive ? opacity : 0.4,
        transition: 'all 0.5s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: isActive ? `0 0 15px ${getColor()}` : 'none'
      }}
    >
      <ItemIcon itemType={itemType} size={isActive ? 20 : 16} />
    </div>
  );
};

export default {
  ItemIcon,
  RecycleIcon,
  TransformationEffect
};