import React, { useState, useRef, useEffect } from 'react';
import { AppContainer, GameContainer, GameTitle, Item, ItemList, Target, Line } from './style';

const items = [
  { id: 1, name: 'carrot', img: '🥕' },
  { id: 2, name: 'corn', img: '🌽' },
  { id: 3, name: 'beetroot', img: '🌱' },
  { id: 4, name: 'pepper', img: '🌶️' },
  { id: 5, name: 'tomato', img: '🍅' },
  { id: 6, name: 'eggplant', img: '🍆' }
];

const targets = [
  { id: 1, name: 'carrot' },
  { id: 2, name: 'corn' },
  { id: 3, name: 'beetroot' },
  { id: 4, name: 'pepper' },
  { id: 5, name: 'tomato' },
  { id: 6, name: 'eggplant' }
];

const Game3 = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [dropTargets, setDropTargets] = useState(targets.map(target => ({ ...target, item: null })));
  const itemRefs = useRef([]);
  const targetRefs = useRef([]);
  const [lines, setLines] = useState([]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleTargetClick = (target) => {
    if (selectedItem) {
      setDropTargets(prev =>
        prev.map(t =>
          t.id === target.id ? { ...t, item: selectedItem } : t
        )
      );
      setSelectedItem(null);
    }
  };

  useEffect(() => {
    const newLines = dropTargets.map(target => {
      if (target.item) {
        const itemElement = itemRefs.current[target.item.id];
        const targetElement = targetRefs.current[target.id];
        if (itemElement && targetElement) {
          const itemRect = itemElement.getBoundingClientRect();
          const targetRect = targetElement.getBoundingClientRect();
          return {
            x1: itemRect.left + itemRect.width / 2,
            y1: itemRect.top + itemRect.height / 2,
            x2: targetRect.left + targetRect.width / 2,
            y2: targetRect.top + targetRect.height / 2
          };
        }
      }
      return null;
    }).filter(line => line !== null);

    setLines(newLines);
  }, [dropTargets]);

  return (
    <AppContainer>
      <GameTitle>Matching Game</GameTitle>
      <GameContainer>
        <ItemList>
          {items.map(item => (
            <Item
              key={item.id}
              onClick={() => handleItemClick(item)}
              isSelected={selectedItem && selectedItem.id === item.id}
              ref={el => itemRefs.current[item.id] = el}
            >
              {item.img}
            </Item>
          ))}
        </ItemList>
        <ItemList>
          {dropTargets.map(target => (
            <Target
              key={target.id}
              onClick={() => handleTargetClick(target)}
              ref={el => targetRefs.current[target.id] = el}
            >
              {target.item ? target.item.img : target.name}
            </Target>
          ))}
        </ItemList>
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          {lines.map((line, index) => (
            <Line
              key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
            />
          ))}
        </svg>
      </GameContainer>
    </AppContainer>
  );
};

export default Game3;
