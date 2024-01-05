import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import Sidebar from '../Sidebar/Sidebar';
import SelecMBTI from '../SelectMBTI/SelectMBTI'

const MainPage: React.FC = () => {
  return (
    <div>
        <div className="top-bar con-min-width">
            <div className="top-bar__main con flex flex-jc-c">
                <p className="top-bar__logo">
                    <span className="ico-1"><FontAwesomeIcon icon={faCat} /></span>
                    <span>
                        <span>MBTI-Style</span>
                    </span>
                </p>
            </div>
        </div>

        <Sidebar />
        <SelecMBTI />
        
    </div>
  )
}

export default MainPage