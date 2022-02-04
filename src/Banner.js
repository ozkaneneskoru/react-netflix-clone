import React from 'react';
import "./Banner.css";
function Banner() {
    return <header className='banner' style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOILLf89Ij8uzw9xjLGDx4EMQeEzd-ixZ6Sg&usqp=CAU')`,
        backgroundSize: "cover",
        backgroundPosition: "center center"

    }}>
        <div className="banner__contents">
            <h1 className="banner__title">Movie Name</h1>
            <div className='banner__butttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className='banner__description'>This is a tes description</h1>
        </div>
        <div className='banner__fadeBottom'></div>
    </header>;
}

export default Banner;
