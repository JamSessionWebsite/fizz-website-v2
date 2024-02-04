import React from 'react';

const TheSipsSpotifyArtist = () => {
    return (
        <div style={{zIndex: 200}}>
            <iframe style={{borderRadius:'12px'}}
                    src="https://open.spotify.com/embed/artist/4QMmBetHc1LFnQGeH7Dzr3?utm_source=generator" width="100%"
                    height="352" frameBorder="0" allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
        </div>
    )
};

export default TheSipsSpotifyArtist;