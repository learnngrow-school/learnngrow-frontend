import { useEffect, useRef } from 'react';
import { MathfieldElement } from 'mathlive'; // Импортируем MathfieldElement

export const MathKeyboard = () => {
  const mathFieldRef = useRef<MathfieldElement | null>(null);

  useEffect(() => {
    import('mathlive').then(({ MathfieldElement }) => {
      if (!customElements.get('math-field')) {
        customElements.define('math-field', MathfieldElement);
      }
    });
  }, []);

  const insertValue = (value: string) => {
    mathFieldRef.current?.executeCommand(['insert', value]);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <math-field
        ref={mathFieldRef}
        style={{ width: '100%', fontSize: '24px' }}
      />

      <div className="grid grid-cols-4 gap-2">
        <button onClick={() => insertValue('\\sqrt{}')} className="btn">√</button>
        <button onClick={() => insertValue('^{}')} className="btn">x²</button>
        <button onClick={() => insertValue('\\frac{}{}')} className="btn">a/b</button>
        <button onClick={() => insertValue('\\pi')} className="btn">π</button>
        <button onClick={() => insertValue('+')} className="btn">+</button>
        <button onClick={() => insertValue('-')} className="btn">-</button>
        <button onClick={() => insertValue('*')} className="btn">×</button>
        <button onClick={() => insertValue('/')} className="btn">÷</button>
        <button onClick={() => insertValue('(')} className="btn">(</button>
        <button onClick={() => insertValue(')')} className="btn">)</button>
        <button onClick={() => insertValue('=')} className="btn">=</button>
        <button onClick={() => insertValue('^2')} className="btn">²</button>
      </div>
    </div>
  );
};
