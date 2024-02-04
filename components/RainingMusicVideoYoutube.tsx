import React from 'react';
import useBreakpoint from "use-breakpoint";
import {BREAKPOINTS} from "./common/CollapsibleHeader";

const RainingMusicVideoYoutube = () => {
    const {minWidth} = useBreakpoint(BREAKPOINTS, 'desktop');
    return (
        <div style={{zIndex: 200, padding: '16px 0'}}>
            <iframe width={minWidth === 0 ? "264" : "560"} height={minWidth === 0 ? "148" : "315"} src="https://www.youtube.com/embed/GWJnppMr30Y?si=kVvPUlr0FOaYbeM8"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>
    )
};

export default RainingMusicVideoYoutube;