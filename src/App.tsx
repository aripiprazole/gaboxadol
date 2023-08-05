import './App.css';
import {FiPlay, FiZap} from 'react-icons/fi';
import {useEffect, useRef, useState} from 'react';

function App() {
  const [text, setText] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const text = textRef.current!;

    const updateLines = () => {
      const container = containerRef.current!;
      const lines = linesRef.current!;
      const text = textRef.current!;

      const lineCount = text.value.split('\n').length;
      const lineNumbers = Array.from(
        {length: container.clientHeight / 22},
        () => '~',
      );
      for (let i = 0; i < lineCount; i++) {
        lineNumbers[i] = `${i + 1}`;
      }

      lines.innerHTML = lineNumbers.join('<br>');
    };

    updateLines();

    text.addEventListener('input', updateLines);

    return () => {
      text.removeEventListener('input', updateLines);
    };
  }, []);

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='code-editor'>
          <header>
            <h1>Theorem Prover</h1>

            <div className='buttons'>
              <button aria-label='Run code'>
                <FiPlay />
              </button>
              <button aria-label='Type check code'>
                <FiZap />
              </button>
            </div>
          </header>

          <main ref={containerRef}>
            <div ref={linesRef as never} className='lines'></div>

            <textarea
              ref={textRef}
              onChange={(event) => setText(event.target.value)}
              onKeyDown={(event) => {
                if (event.key == 'Tab') {
                  event.preventDefault();

                  const current = textRef.current!;
                  const start = current.selectionStart;
                  const end = current.selectionEnd;

                  // set textarea value to: text before caret + tab + text after caret
                  current.value =
                    current.value.substring(0, start) +
                    '  ' +
                    current.value.substring(end);

                  // put caret at right position again
                  current.selectionStart = current.selectionEnd = start + 2;
                }
              }}
              name='Code'
              cols={30}
              rows={10}
            >
              {text}
            </textarea>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
