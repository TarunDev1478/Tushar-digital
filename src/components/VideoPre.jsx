import React, { useRef } from 'react'
import '../styles/videospre.css'
function VideoPre(props) {
    const ref=[];
const close=()=>{
    const full = document.getElementById('video-player-full');
    const player = document.getElementById('video-player');
    const inside =document.getElementById('video-preview');
    const video=inside.querySelector('video');
    video.pause();
    player.style.display = 'none';
    full.style.display = 'none';
}
const pauseAll=()=>{
        ref.forEach(videoRef => {
            if (videoRef && videoRef.current) {
              videoRef.current.pause();
              videoRef.current.setAttribute('poster', videoRef.current.getAttribute('poster'));
            }
          });
    }
function Video({ cover,source }) {
    const videoRef = useRef(null);
    
    const handleHover = () => {
        ref.push(videoRef);
        pauseAll();
        const video = videoRef.current;
        if (video.paused) {
            video.play().catch(error => console.error('Error while attempting to play the video:', error));
        }
    };
    const playVideo = (event) => {
        const full = document.getElementById('video-player-full');
        const player = document.getElementById('video-player');
        const inside =document.getElementById('video-preview');
        player.style.display = 'flex';
        full.style.display = 'flex';
        const src = event.currentTarget.currentSrc;
        const videoEle = document.createElement('video');
        videoEle.src = src;
        videoEle.controls = true;
        inside.innerHTML = ''; 
        inside.appendChild(videoEle);
    };
    return (
        <div className="preview">
            <i onClick={handleHover} class="bi bi-play-btn"></i>
            <video
                ref={videoRef}
                preload="auto"
                onClick={(event)=>playVideo(event)}
                loop
                poster={cover}
                muted="muted"
                volume="0"
            >
                <source src={source} type="video/mp4" />
            </video>
        </div>

    );
}
  return (
    <div>
      <div id="video-player-full">
                <i onClick={close} class="bi bi-x-lg"></i>
                    <div id="video-player">
                        <div id="video-preview">

                        </div>
                    </div>
                </div>
                <div className='display1'>
                    <div className='column1'>
                        {props.c1.map((video, index) => (
                            <iframe width="640" height="360" frameborder="0" src="https://drive.google.com/file/d/1GSYaTgStRoQTP8WOy6s50YXKU1dxusGT/view?usp=drive_link" allowfullscreen ></iframe>
                            // <Video key={index} cover={`/images/cover${index+1}.png`} source={video} />
                        ))}
                    </div>
                    <div className='column1'>
                        {props.c2.map((video, index) => (
                            <Video key={index} cover={`/images/cover1${index+1}.png`} source={video} />
                        ))}
                    </div>
                    <div className='column1'>
                        {props.c3.map((video, index) => (
                            <Video key={index} cover={`/images/cover2${index+1}.png`} source={"https://mega.nz/embed/ZPsjwI4C#X7cUgxp2lA7qw8tOAbBmCT6DLwD5UkPT6-dHS819eF8"} />
                        ))}
                    </div>
                </div>
    </div>
  )
}

export default VideoPre
