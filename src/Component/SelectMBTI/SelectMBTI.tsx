import React, {useState} from 'react'

const SelectMBTI: React.FC = () => {
  const [selEI, setSelEI] = useState<string>('E / I');
  const [selSN, setSelSN] = useState<string>('S / N');
  const [selTF, setSelTF] = useState<string>('T / F');
  const [selJP, setSelJP] = useState<string>('J / P');


  return (
    <div className="top-menu con-min-width">
      <div className="top-menu-bar con">
        <nav className="top-menu__box">
          <ul className="flex flex-jc-sa">
            <li style={{ width: '25%' }}>
              <div>{selEI}</div>
              <ul>
                <li><div onClick={() => setSelEI('E')}>E</div></li>
                <li><div onClick={() => setSelEI('I')}>I</div></li>
              </ul>
            </li>
            <li style={{ width: '25%' }}>
              <div>{selSN}</div>
              <ul>
                <li><div onClick={() => setSelSN('S')}>S</div></li>
                <li><div onClick={() => setSelSN('N')}>N</div></li>
              </ul>
            </li>
            <li style={{ width: '25%' }}>
              <div>{selTF}</div>
              <ul>
                <li><div onClick={() => setSelTF('T')}>T</div></li>
                <li><div onClick={() => setSelTF('F')}>F</div></li>
              </ul>
            </li>
            <li style={{ width: '25%' }}>
              <div>{selJP}</div>
              <ul>
                <li><div onClick={() => setSelJP('J')}>J</div></li>
                <li><div onClick={() => setSelJP('P')}>P</div></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default SelectMBTI