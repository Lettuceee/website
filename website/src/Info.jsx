import "./App.css";
import IconBrandon from "./assets/DSC01481-circle.png";
import IconLettuce from "./assets/lettuce-icon.png";

export default function Info() {
    return (
        <div class="containerInfo">
            <div class="container4col">
                <div id="infoImg" style={{backgroundImage:`url(${IconBrandon})`}}></div>
                <h1 style={{gridColumnStart: 2, gridColumnEnd: 4}}>Welcome to my website!</h1>
                <div id="infoImg" style={{backgroundImage:`url(${IconLettuce})`}}></div>
            </div>
            <p>I'm Brandon Sharp, a multidisciplinary designer based in St. Louis, Missouri.
                Whether it's graphic design, motion media, video or 3D-modeling,
                I aim for my projects to be effective, attention-grabbing and entertaining;
                at the end of the day, my goal is for my designs to make people smile!
                When I'm not on the clock, you can find me playing the piano, hunting for Pokémon
                in Pokémon GO, working on personal projects, or practicing Japanese in VRChat.</p>
            <p>I wanted to make a website that's part portfolio and part desktop playground.
                Try dragging things around — the windows, and even the icons on the left!</p>
            <p>This site was made entirely using ReactJS, with Vite as my build tool of choice.
                If by chance you're trying to make your own website, feel free to peek at
                the source code!</p>
            <p>Have a project in mind? Got overflow? Let's talk! Shoot me a message
                at <b>brandonsharpdesign@gmail.com.</b></p>
        </div>

    )
}