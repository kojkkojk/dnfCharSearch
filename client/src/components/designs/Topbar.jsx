import React from 'react'
import { Link } from 'react-router-dom';
import { FiClipboard } from 'react-icons/fi';
import { RiAuctionLine,RiSearchLine } from 'react-icons/ri';

function Topbar() {
    return (
        <nav className='topBar'>
            <div className='dfgg_logo'>
                <img src="https://firebasestorage.googleapis.com/v0/b/plogprojects.appspot.com/o/ef.png?alt=media&token=f62000c6-4bd8-4280-b004-d6c905141cc9" alt="logo" />
            </div>
            <div className='dfgg_topmenu'>
                <ul>
                    <li><Link to={"/"}><RiSearchLine/><span>&nbsp;캐릭터 검색</span></Link></li>
                    <li><Link to={"/auction"}><RiAuctionLine/><span>&nbsp;경매장 시세검색</span></Link></li>
                    <li><Link to={"/inchant"}><FiClipboard /><span>&nbsp;부위별 마부</span></Link></li>
                    <li><Link to={"/notice"}><FiClipboard /><span>&nbsp;던파 업데이트</span></Link></li>
                </ul>
            </div>
            <div className='poweredByNeople'>
                <a href={"http://developers.neople.co.kr"}
                    target={"_blank"} rel="noopener noreferrer">
                    <img src="https://firebasestorage.googleapis.com/v0/b/plogprojects.appspot.com/o/gallery%2FTech.png?alt=media&token=ca786818-53a6-4207-8f5f-a8ebe2e4f4b6" alt="Neople 오픈 API" />
                </a>
            </div>
        </nav>
    )
}

export default Topbar