import React, { useState } from 'react';

export default function Home() {
  const [item, setItem] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const onButtonClick = () => {
    setItem(
      Array.from({ length: parseInt(itemCount) }, (v, k) => ({
        a: false,
        b: false,
        c: false,
        d: false,
        checked: false,
        correntItem: '',
      }))
    );
  };
  const onSelectOption = (value, key) => {
    setItem(
      item.map((item, idx) =>
        idx == key
          ? {
              ...item,
              ...{ a: false, b: false, c: false, d: false },
              checked: false,
              correct: '',
            }
          : item
      )
    );
    console.log(item);
  };
  const onCheck = (value, key) => {
    setItem(
      item.map((item, idx) =>
        idx == key
          ? {
              ...item,
              checked: true,
              correct: value,
            }
          : item
      )
    );
    console.log(item);
  };
  return (
    <div>
      <div>
        <input type="number" onChange={(e) => setItemCount(e.target.value)} />
        <button onClick={onButtonClick}>set Items</button>
      </div>
      <div>
        {item.map((i, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              marginTop: '5px',
            }}
          >
            <span>{idx + 1}.) </span>

            <div style={{ marginRight: '10px', marginLeft: '20px' }}>
              <input
                type="radio"
                id={'html' + idx}
                name={idx}
                value="a"
                onChange={(e) => onSelectOption(e.target.value, idx)}
              />
              <label htmlFor={'html' + idx}>a</label>
              <input
                type="radio"
                id={'html' + idx}
                name={idx}
                value="b"
                onChange={(e) => onSelectOption(e.target.value, idx)}
              />
              <label htmlFor={'html' + idx}>b</label>
              <input
                type="radio"
                id={'html' + idx}
                name={idx}
                value="c"
                onChange={(e) => onSelectOption(e.target.value, idx)}
              />
              <label htmlFor={'html' + idx}>c</label>
              <input
                type="radio"
                id={'html' + idx}
                name={idx}
                value="d"
                onChange={(e) => onSelectOption(e.target.value, idx)}
              />
              <label htmlFor={'html' + idx}>d</label>
            </div>
            {isChecking && (
              <div>
                <button
                  style={{ backgroundColor: 'orange', borderColor: 'orange' }}
                  onClick={() => onCheck(false, idx)}
                >
                  x
                </button>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'green',
                    marginLeft: '10px',
                  }}
                  onClick={() => onCheck(true, idx)}
                >
                  /
                </button>
                {i.checked ? (
                  i.correct ? (
                    <div
                      style={{
                        marginLeft: '20px',
                        backgroundColor: 'green',
                        borderRadius: '5px',
                        width: '10px',
                        height: '10px',
                        display: 'inline-block',
                      }}
                    ></div>
                  ) : (
                    <div
                      style={{
                        marginLeft: '20px',
                        backgroundColor: 'red',
                        borderRadius: '5px',
                        width: '10px',
                        height: '10px',
                        display: 'inline-block',
                      }}
                    ></div>
                  )
                ) : (
                  ''
                )}
              </div>
            )}
          </div>
        ))}
        {item.length > 0 && (
          <>
            {isChecking ? (
              <button onClick={() => setIsChecking(false)}>
                Edit Answer Cecking
              </button>
            ) : (
              <button onClick={() => setIsChecking(true)}>Start Cecking</button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
