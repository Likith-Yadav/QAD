import React, { useState, useRef, useEffect } from 'react';
import { 
  Cpu, 
  Zap, 
  Plus, 
  Trash2, 
  Save, 
  RotateCw,
  Lightbulb,
  Thermometer,
  ToggleLeft,
  Gauge
} from 'lucide-react';
import { ComponentData } from '../types';

const PrototypingBoard: React.FC = () => {
  const [components, setComponents] = useState<ComponentData[]>([]);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const boardRef = useRef<HTMLDivElement>(null);
  const [connections, setConnections] = useState<{from: string, to: string}[]>([]);
  const [connectingFrom, setConnectingFrom] = useState<string | null>(null);

  const componentTypes = [
    { type: 'resistor', name: 'Resistor', icon: <RotateCw size={20} /> },
    { type: 'capacitor', name: 'Capacitor', icon: <Gauge size={20} /> },
    { type: 'led', name: 'LED', icon: <Lightbulb size={20} /> },
    { type: 'switch', name: 'Switch', icon: <ToggleLeft size={20} /> },
    { type: 'sensor', name: 'Sensor', icon: <Thermometer size={20} /> }
  ];

  const addComponent = (type: string) => {
    const newComponent: ComponentData = {
      id: `component-${Date.now()}`,
      type: type as any,
      name: `${type.charAt(0).toUpperCase() + type.slice(1)}-${components.length + 1}`,
      position: { x: 100, y: 100 },
      connections: [],
      properties: {}
    };
    
    setComponents([...components, newComponent]);
    setSelectedComponent(newComponent.id);
  };

  const handleMouseDown = (e: React.MouseEvent, componentId: string) => {
    setSelectedComponent(componentId);
    setIsDragging(true);
    
    const component = components.find(c => c.id === componentId);
    if (component) {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
    
    e.stopPropagation();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && selectedComponent && boardRef.current) {
      const boardRect = boardRef.current.getBoundingClientRect();
      const x = e.clientX - boardRect.left - dragOffset.x;
      const y = e.clientY - boardRect.top - dragOffset.y;
      
      setComponents(components.map(component => 
        component.id === selectedComponent
          ? { ...component, position: { x, y } }
          : component
      ));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleBoardClick = () => {
    setSelectedComponent(null);
  };

  const deleteComponent = (id: string) => {
    setComponents(components.filter(component => component.id !== id));
    setConnections(connections.filter(conn => conn.from !== id && conn.to !== id));
    setSelectedComponent(null);
  };

  const startConnection = (componentId: string) => {
    setConnectingFrom(componentId);
  };

  const completeConnection = (componentId: string) => {
    if (connectingFrom && connectingFrom !== componentId) {
      // Check if connection already exists
      const connectionExists = connections.some(
        conn => (conn.from === connectingFrom && conn.to === componentId) ||
               (conn.from === componentId && conn.to === connectingFrom)
      );
      
      if (!connectionExists) {
        setConnections([...connections, { from: connectingFrom, to: componentId }]);
        
        // Update component connections array
        setComponents(components.map(component => {
          if (component.id === connectingFrom) {
            return { ...component, connections: [...component.connections, componentId] };
          }
          if (component.id === componentId) {
            return { ...component, connections: [...component.connections, connectingFrom] };
          }
          return component;
        }));
      }
    }
    setConnectingFrom(null);
  };

  const getComponentPosition = (id: string) => {
    const component = components.find(c => c.id === id);
    return component ? component.position : { x: 0, y: 0 };
  };

  const renderComponentIcon = (type: string) => {
    switch(type) {
      case 'resistor': return <RotateCw size={20} />;
      case 'capacitor': return <Gauge size={20} />;
      case 'led': return <Lightbulb size={20} />;
      case 'switch': return <ToggleLeft size={20} />;
      case 'sensor': return <Thermometer size={20} />;
      default: return <Cpu size={20} />;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="cyberpunk-panel p-4 mb-4">
        <h2 className="text-xl font-bold mb-2 flex items-center">
          <Cpu className="mr-2 text-[var(--primary)]" />
          Virtual Prototyping Board
        </h2>
        <p className="text-sm text-[var(--text-dim)]">
          Drag and drop components to create your circuit design
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 flex-grow">
        {/* Component Palette */}
        <div className="cyberpunk-panel p-4 w-full md:w-64">
          <h3 className="text-lg font-bold mb-4 text-[var(--primary)]">Components</h3>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
            {componentTypes.map((component) => (
              <button
                key={component.type}
                onClick={() => addComponent(component.type)}
                className="cyberpunk-button flex items-center justify-center md:justify-start p-2"
              >
                <span className="mr-2">{component.icon}</span>
                <span>{component.name}</span>
              </button>
            ))}
          </div>
          
          {selectedComponent && (
            <div className="mt-6 border-t border-[var(--primary-dark)] pt-4">
              <h3 className="text-lg font-bold mb-4 text-[var(--primary)]">Properties</h3>
              <div className="space-y-2">
                {components.find(c => c.id === selectedComponent)?.type === 'led' && (
                  <div>
                    <label className="block text-sm text-[var(--text-dim)] mb-1">Color</label>
                    <select className="cyberpunk-input w-full p-2 rounded">
                      <option>Red</option>
                      <option>Green</option>
                      <option>Blue</option>
                      <option>Yellow</option>
                    </select>
                  </div>
                )}
                
                {components.find(c => c.id === selectedComponent)?.type === 'resistor' && (
                  <div>
                    <label className="block text-sm text-[var(--text-dim)] mb-1">Resistance (Ω)</label>
                    <input type="number" className="cyberpunk-input w-full p-2 rounded" defaultValue="220" />
                  </div>
                )}
                
                <div className="flex space-x-2 mt-4">
                  <button 
                    onClick={() => deleteComponent(selectedComponent)}
                    className="flex items-center justify-center p-2 bg-[var(--danger)] text-white rounded hover:bg-opacity-80 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                  
                  <button 
                    onClick={() => startConnection(selectedComponent)}
                    className={`flex items-center justify-center p-2 rounded transition-colors ${
                      connectingFrom === selectedComponent 
                        ? 'bg-[var(--accent)] text-[var(--background)]' 
                        : 'bg-[var(--surface-light)] text-[var(--primary)]'
                    }`}
                  >
                    <Zap size={16} />
                  </button>
                  
                  <button 
                    className="flex items-center justify-center p-2 bg-[var(--primary-dark)] text-[var(--background)] rounded hover:bg-[var(--primary)] transition-colors"
                  >
                    <Save size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Board */}
        <div 
          ref={boardRef}
          className="cyberpunk-panel flex-grow p-4 relative overflow-hidden"
          style={{ 
            backgroundImage: 'radial-gradient(circle, rgba(0,255,255,0.05) 1px, transparent 1px)', 
            backgroundSize: '20px 20px' 
          }}
          onClick={handleBoardClick}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Grid lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full" style={{ 
              backgroundImage: `
                linear-gradient(to right, rgba(0,255,255,0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          
          {/* Connection lines */}
          <svg className="absolute inset-0 pointer-events-none">
            {connections.map((connection, index) => {
              const fromPos = getComponentPosition(connection.from);
              const toPos = getComponentPosition(connection.to);
              return (
                <line
                  key={`connection-${index}`}
                  x1={fromPos.x + 20}
                  y1={fromPos.y + 20}
                  x2={toPos.x + 20}
                  y2={toPos.y + 20}
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              );
            })}
            
            {/* Active connection line */}
            {connectingFrom && (
              <line
                x1={getComponentPosition(connectingFrom).x + 20}
                y1={getComponentPosition(connectingFrom).y + 20}
                x2={isDragging ? 0 : boardRef.current?.getBoundingClientRect().left || 0}
                y2={isDragging ? 0 : boardRef.current?.getBoundingClientRect().top || 0}
                stroke="var(--accent)"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            )}
          </svg>
          
          {/* Components */}
          {components.map((component) => (
            <div
              key={component.id}
              className={`absolute w-40 p-2 rounded cursor-move ${
                selectedComponent === component.id 
                  ? 'ring-2 ring-[var(--primary)] bg-[var(--surface-light)]' 
                  : 'bg-[var(--surface)]'
              } ${connectingFrom && connectingFrom !== component.id ? 'cursor-pointer' : ''}`}
              style={{
                left: `${component.position.x}px`,
                top: `${component.position.y}px`
              }}
              onMouseDown={(e) => handleMouseDown(e, component.id)}
              onClick={() => connectingFrom && connectingFrom !== component.id ? completeConnection(component.id) : null}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[var(--surface-light)] flex items-center justify-center mr-2">
                  {renderComponentIcon(component.type)}
                </div>
                <div>
                  <div className="text-sm font-bold">{component.name}</div>
                  <div className="text-xs text-[var(--text-dim)]">{component.type}</div>
                </div>
              </div>
            </div>
          ))}
          
          {components.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-[var(--text-dim)]">
              <div className="text-center">
                <Plus size={40} className="mx-auto mb-2 opacity-50" />
                <p>Add components from the palette</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrototypingBoard;