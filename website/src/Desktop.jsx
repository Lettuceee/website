import { useEffect, useState } from 'react'
import Draggable from 'react-draggable';
import { useRef } from 'react';
import anime from 'animejs';
import "./App.css";
import Intro from './Intro.jsx';
import Info from './Info.jsx';
import Logo from './Logo.jsx';
import IconInfo from "./icons/icon-info.png";
import IconFolder from "./icons/icon-folder.png";
import IconMusic from "./icons/icon-music.png";
import IconWallpaper from "./icons/icon-wallpaper.png";
import paperShapesVideo from "./wallpaper/shapes_Camera_a_1920x1080.mp4";
import paperHudVideo from "./wallpaper/future-hud_Camera_a.mp4";
import paperPortholeVideo from "./wallpaper/porthole.mp4";


export default function Desktop() {

    const nodeRefInfo = useRef (null);
    const nodeRefWallpaper = useRef(null);
    const nodeRefIcon = useRef(null);
    const [time, setTime] = useState()
    const [date, setDate] = useState()
    const [taskStyle, setTaskStyle] = useState("twilight")
    const [paperStyle, setPaperStyle] = useState("noPaper")
    const [crtVis, setCrtVis] = useState(true)
    const [paperShapesVideoVis, setPaperShapesVideoVis] = useState(false)
    const [paperHudVideoVis, setPaperHudVideoVis] = useState(false)
    const [paperPortholeVideoVis, setPaperPortholeVideoVis] = useState(false)
    const [crtText, setCrtText] = useState("ON")
    const [showWindowInfo, setShowWindowInfo] = useState(false)
    const [showWindowWallpaper, setShowWindowWallpaper] = useState(false)
    const [showWindowProjects, setShowWindowProjects] = useState(false)
    var bgLogoAppear = anime.timeline()
    const [indexCount, setIndexCount] = useState(2)
    const [infoIndex, setInfoIndex] = useState(1)
    const [projectsIndex, setProjectsIndex] = useState(1)
    const [wallpaperIndex, setWallpaperIndex] = useState(1)

    


    function crtSwitch() {
        setCrtVis(crtVis === true ? false : true)
        setCrtText(crtText === "ON" ? "OFF" : "ON")
    }
    
    function animeLogo() {
        anime ({
            targets: '#bgLogo',
            opacity: 1,
            duration: 1000,
            delay: 3500,
            easing: 'cubicBezier(.25, .0, .15, 1)',
        })
    };
    
    function animeIcon() {
        anime ({
                targets: '#icon',
                translateX: [-200, 0],
                duration: 400,
                easing: 'cubicBezier(.25, .0, .15, 1)',
                delay: (_el, i) => { return 3300 + i * 50; },
        });
    }

    function animeMode() {
        anime ({
                targets: '.modeButton, .toggleSwitch',
                translateX: [200, 0],
                duration: 400,
                easing: 'cubicBezier(.25, .0, .15, 1)',
                delay: (_el, i) => { return 3450 + i * 50; },
        });
    }

    function animeTaskbar() {
        anime ({
                targets: '#taskbar',
                translateY: [50, 0],
                duration: 400,
                easing: 'cubicBezier(.25, .0, .15, 1)',
                delay: 3600,
        });
    }

    useEffect(() => {
        animeIcon();
        animeTaskbar();
        animeMode();
        animeLogo();
    }, []);
            
    useEffect(() => {

        setInterval(() => {

            const dateObject = new Date()

            let hour = dateObject.getHours().toString()
            const meridiem = hour >= 12 ? "PM " : "AM"
            hour = hour % 12 || 12
            const minute = dateObject.getMinutes().toString().padStart(2,0)

            const month = (dateObject.getMonth() + 1).toString()
            const day = dateObject.getDate().toString()
            const year = dateObject.getFullYear().toString()

            const currentTime = hour + ':' + minute + ' ' + meridiem
            const currentDate = month + '/' + day + '/' + year

            setTime(currentTime)
            setDate(currentDate)
        }, 1000)    
    }, [])

    return (
            <div id="desktop" class={taskStyle}>
                {crtVis &&
                    <div class="crt"></div>
                }
                <div id="bgLogo">
                    <Logo logoViewbox={"0 0 1777.39 405.84"}/>
                </div>
                <div class="wallpaper" id={paperStyle}></div>
                {paperShapesVideoVis &&
                    <video autoPlay loop muted className="paperVideo">
                        <source src={paperShapesVideo} type="video/mp4" />
                    </video>
                }
                {paperHudVideoVis &&
                    <video autoPlay loop muted className="paperVideo">
                        <source src={paperHudVideo} type="video/mp4" />
                    </video>
                }
                {paperPortholeVideoVis &&
                    <video autoPlay loop muted className="paperVideo">
                        <source src={paperPortholeVideo} type="video/mp4" />
                    </video>
                }
                <div id="intro"><Intro /></div>
                <div id="icons">
                    <Draggable nodeRef={nodeRefIcon}>
                        <div ref={nodeRefIcon} id="icon" onDoubleClick={() => {
                            setIndexCount((prevValue) => prevValue + 1)
                            setInfoIndex(indexCount)
                            setShowWindowInfo(true)
                        }}>
                            <div id="iconImgText">
                                <div id="iconImg" style={{backgroundImage:`url(${IconInfo})`}}></div>
                                Info
                            </div>
                        </div>
                    </Draggable>
                    <Draggable nodeRef={nodeRefIcon}>
                        <div ref={nodeRefIcon} id="icon">
                            <div id="iconImgText">
                                <div id="iconImg" style={{backgroundImage:`url(${IconFolder})`}}></div>
                                Projects
                            </div>
                        </div>
                    </Draggable>
                    <Draggable nodeRef={nodeRefIcon}>                    
                        <div ref={nodeRefIcon} id="icon">
                            <div id="iconImgText">
                                <div id="iconImg" style={{backgroundImage:`url(${IconMusic})`}}></div>
                                Music
                            </div>
                        </div>
                    </Draggable>
                    <Draggable nodeRef={nodeRefIcon}>                    
                        <div ref={nodeRefIcon} id="icon" onDoubleClick={() => {
                            setIndexCount((prevValue) => prevValue + 1)
                            setWallpaperIndex(indexCount)
                            setShowWindowWallpaper(true)
                        }}>
                            <div id="iconImgText">
                                <div id="iconImg" style={{backgroundImage:`url(${IconWallpaper})`}}></div>
                                Wallpaper
                            </div>
                        </div>
                    </Draggable>
                </div>
                <div id="modes">
                    <div class="toggleSwitch">
                        <input class="toggleInput" id="toggle" type="checkbox" onClick={() => crtSwitch()}></input>
                        <label class="toggleLabel" for="toggle"></label>
                        <div class="crtText"><p>CRT: {crtText}</p></div>
                    </div>
                    <div id="modeButtons">
                        <div id="modeContainer">
                            <div class="modeButton" id="modeLight" onClick={() => setTaskStyle("light")}></div>
                        </div>
                        <div id="modeContainer">
                            <div class="modeButton" id="modeTwilight" onClick={() => setTaskStyle("twilight")}></div>
                        </div>
                        <div id="modeContainer">
                            <div class="modeButton" id="modeDark" onClick={() => setTaskStyle("dark")}></div>
                        </div>
                    </div>
                </div>
                <div id="taskbar">
                    <div id="date">{date}</div>
                    <div id="clock">{time}</div>
                </div>
                {showWindowInfo &&
                    <Draggable nodeRef={nodeRefInfo}>
                        <div ref={nodeRefInfo} className="window" id="info" style={{zIndex:`${infoIndex}`}} onMouseDownCapture={() => {
                            setIndexCount((prevValue) => prevValue + 1)
                            setInfoIndex(indexCount)
                        }}>
                            <div className="windowheader">Info
                                <div className="close" onClick={() => setShowWindowInfo(false)}></div>
                            </div>
                            <div className="windowContent">
                                <div className="infoContainer">
                                    <Info />
                                </div>
                            </div>
                        </div>
                    </Draggable>
                }
                {showWindowProjects &&
                    <Draggable nodeRef={nodeRefProjects}>
                        <div ref={nodeRefProjects} className="window" id="projects" style={{zIndex:`${projectsIndex}`}} onMouseDownCapture={() => {
                            setIndexCount((prevValue) => prevValue + 1)
                            setInfoIndex(indexCount)
                        }}>
                            <div className="windowheader">Info
                                <div className="close" onClick={() => setShowWindowInfo(false)}></div>
                            </div>
                            <div className="windowContent">
                                <div className="infoContainer">
                                    <Info />
                                </div>
                            </div>
                        </div>
                    </Draggable>
                }
                {showWindowWallpaper &&
                    <Draggable nodeRef={nodeRefWallpaper}>
                        <div ref={nodeRefWallpaper} className="window" id="wallpaper" style={{zIndex:`${wallpaperIndex}`}} onMouseDownCapture={() => {
                            setIndexCount((prevValue) => prevValue + 1)
                            setWallpaperIndex(indexCount)
                        }}>
                            <div className="windowheader">Wallpaper
                                <div className="close" onClick={() => setShowWindowWallpaper(false)}></div>
                            </div>
                            <div className="windowContent">
                                <div class="paperSelect">
                                    <div class="paperOption">
                                        <div class="paperPreview" id={taskStyle} onClick={() => {
                                            setPaperShapesVideoVis(false)
                                            setPaperHudVideoVis(false)
                                            setPaperPortholeVideoVis(false)
                                            setPaperStyle("noPaper")
                                        }}>
                                            <div id="bgLogoPreview">
                                                <Logo logoViewbox={"0 0 17777.39 405.84"}/>
                                            </div>
                                        </div>
                                        Default
                                    </div>
                                    <div class="paperOption">
                                        <div class="paperPreview" id="shapesPreview" onClick={() => {
                                            setPaperStyle("shapesPreview")
                                            setPaperShapesVideoVis(true)
                                            setPaperHudVideoVis(false)
                                            setPaperPortholeVideoVis(false)
                                        }}></div>
                                         ▶ Shapes
                                    </div>
                                    <div class="paperOption">
                                        <div class="paperPreview" id="hudPreview" onClick={() => {
                                            setPaperStyle("hudPreview")
                                            setPaperHudVideoVis(true)
                                            setPaperShapesVideoVis(false)
                                            setPaperPortholeVideoVis(false)
                                        }}></div>
                                         ▶ Hologram
                                    </div>
                                    <div class="paperOption">
                                        <div class="paperPreview" id="portholePreview" onClick={() => {
                                            setPaperStyle("portholePreview")
                                            setPaperPortholeVideoVis(true)
                                            setPaperShapesVideoVis(false)
                                            setPaperHudVideoVis(false)
                                        }}></div>
                                        ▶ Porthole
                                    </div>
                                    <div class="paperOption">
                                        <div class="paperPreview" id="underpass" onClick={() => {
                                            setPaperShapesVideoVis(false)
                                            setPaperHudVideoVis(false)
                                            setPaperPortholeVideoVis(false)
                                            setPaperStyle("underpass")
                                        }}></div>
                                        Underpass
                                    </div>
                                    <div class="paperOption">
                                        <div class="paperPreview" id="burki" onClick={() => {
                                            setPaperShapesVideoVis(false)
                                            setPaperHudVideoVis(false)
                                            setPaperPortholeVideoVis(false)
                                            setPaperStyle("burki")
                                        }}></div>
                                        St. Louis City SC
                                    </div>
                                    <div class="paperOption">
                                        <div class="paperPreview" id="pigeons" onClick={() => {
                                            setPaperShapesVideoVis(false)
                                            setPaperHudVideoVis(false)
                                            setPaperPortholeVideoVis(false)
                                            setPaperStyle("pigeons")
                                        }}></div>
                                        D.C. Pigeons
                                    </div>
                                    <div class="paperOption">
                                        <div class="paperPreview" id="dogs" onClick={() => {
                                            setPaperShapesVideoVis(false)
                                            setPaperHudVideoVis(false)
                                            setPaperPortholeVideoVis(false)
                                            setPaperStyle("dogs")
                                        }}></div>
                                        Malarkey and Ollie
                                    </div>
                                    <div class="paperOption">
                                        <div class="paperPreview" id="vrchat1" onClick={() => {
                                            setPaperShapesVideoVis(false)
                                            setPaperHudVideoVis(false)
                                            setPaperPortholeVideoVis(false)
                                            setPaperStyle("vrchat1")
                                        }}></div>
                                        VRChat 1
                                    </div>
                                    <div class="paperOption">
                                        <div class="paperPreview" id="vrchat2" onClick={() => {
                                            setPaperShapesVideoVis(false)
                                            setPaperHudVideoVis(false)
                                            setPaperPortholeVideoVis(false)
                                            setPaperStyle("vrchat2")
                                        }}></div>
                                        VRChat 2
                                    </div>
                                    <div class="paperOption">
                                        <div class="paperPreview" id="img8461" onClick={() => {
                                            setPaperShapesVideoVis(false)
                                            setPaperHudVideoVis(false)
                                            setPaperPortholeVideoVis(false)
                                            setPaperStyle("img8461")
                                        }}></div>
                                        IMG_8461
                                    </div>
                                    <div class="paperOption">
                                        <div class="paperPreview" id="sunset" onClick={() => {
                                            setPaperShapesVideoVis(false)
                                            setPaperHudVideoVis(false)
                                            setPaperPortholeVideoVis(false)
                                            setPaperStyle("sunset")
                                        }}></div>
                                        Desert Sunset
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Draggable>
                }
            </div>
    )    
}