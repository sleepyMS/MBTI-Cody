import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faDragon, faDove, faFish } from "@fortawesome/free-solid-svg-icons";

const Sidebar: React.FC = () => {
  return (
    <div className="side-bar">
            <div className="side-bar__icon-box">
                <div className="side-bar__icon-1">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <ul>
                <li>
                    <p style={{textAlign: 'start'}}>
                        <span><FontAwesomeIcon icon={faCat} /></span>
                        <span>My MBTI</span>
                    </p>
                    <ul>
                        <li><p>text1</p></li>
                        <li><p>text2</p></li>
                        <li><p>text3</p></li>
                        <li><p>text4</p></li>
                    </ul>
                </li>
                <li>
                    <p style={{textAlign: 'start'}}>
                        <span><FontAwesomeIcon icon={faDragon} /></span>
                        <span>Best Style</span>
                    </p>
                    <ul>
                        <li><p>text1</p></li>
                        <li><p>text2</p></li>
                        <li><p>text3</p></li>
                        <li><p>text4</p></li>
                    </ul>
                </li>
                <li>
                    <p style={{textAlign: 'start'}}>
                        <span><FontAwesomeIcon icon={faDove} /></span>
                        <span>Community</span>
                    </p>
                    <ul>
                        <li><p>text1</p></li>
                        <li><p>text2</p></li>
                        <li><p>text3</p></li>
                        <li><p>text4</p></li>
                    </ul>
                </li>
                <li>
                    <p style={{textAlign: 'start'}}>
                        <span><FontAwesomeIcon icon={faFish} /></span>
                        <span>Q n A</span>
                    </p>
                    <ul>
                        <li><p>text1</p></li>
                        <li><p>text2</p></li>
                        <li><p>text3</p></li>
                        <li><p>text4</p></li>
                    </ul>
                </li>
            </ul>
        </div>
  )
}

export default Sidebar