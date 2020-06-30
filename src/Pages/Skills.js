import React from "react";
import $ from "jquery";
import blast from "blast-text";

function skillsTags() {
    var a = ['length', 'remove', 'location', 'href', 'indexOf', 'floor', 'random'];
    $(".skills h1").blast({ delimiter: "word", tag: "span" }); a = 0; $(".skills h1 .blast").each(function () { var el = $(this);setTimeout(function () { el.addClass('animated bounceIn'); }, a); a = a + 80; }); setTimeout(function () { $(".skills .blast").removeClass('animated bounceIn'); $(".skills .blast").css('opacity', 1); $(".skills .blast").mouseenter(function () { var el = $(this); $(this).addClass('animated rubberBand'); $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () { el.removeClass('animated rubberBand'); }); }); }, 2000);
    var white = "#fff";
    if (!$('#myCanvas').tagcanvas({ textColour: white, outlineThickness: 0.5, outlineColour: '#FE0853', maxSpeed: 0.06, freezeActive: true, shuffleTags: true, shape: 'sphere', zoom: 0.9, noSelect: true, textFont: null, pinchZoom: true, freezeDecel: true, fadeIn: 3000, initial: [0.3, -0.1], depth: 1.4 })) { $('#myCanvasContainer').hide(); }
    setTimeout();
}

function Skills(props) {
    return (
        <div className="skils" onLoad={skillsTags()}>
            <div id="myCanvasContainer">
                <canvas width="500" height="500" id="myCanvas">
                    <ul>
                        <li>
                            <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">HTML 5</a></li><li><a data-weight="25" href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">CSS</a>
                        </li>
                        <li>
                            <a data-weight="25" href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>
                        </li>
                        <li>
                            <a data-weight="25" href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">TypeScript</a>
                        </li>
                        <li>
                            <a data-weight="24" href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank">REST</a>
                        </li>
                    </ul>
                </canvas>
            </div>
        </div>
    )
}

export default Skills;