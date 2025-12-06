import { useEffect, useState } from 'react'
import Draggable from 'react-draggable';
import { useRef } from 'react';
import Logo from './Logo.jsx';

export default function Wallpaper({
    setPaperStyle, setPaperShapesVideoVis, setPaperHudVideoVis, setPaperPortholeVideoVis,
    indexCount, setIndexCount, wallpaperIndex, setWallpaperIndex, taskStyle,
    setShowWindowWallpaper
}) {
        const nodeRefWallpaper = useRef(null);

        return (
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
        )
    }