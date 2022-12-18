export interface SocialMedia {
    platform: 'facebook' | 'tiktok' | 'twitter' | 'instagram' | 'youtube' | string;
    pageSrc: string;
}

export interface Logo {
    src: string;
    alt: string;
}

export interface Photo {
    src: string;
    description: string;
    alt?: string;
    groupId?: string;
}

export interface BandWebsiteConfig {
    mainTitle: string;
    bandName: string;
    genres: string[];
    logo: Logo;
    primaryColor?: string;
    socialMedia: SocialMedia[];
    photos: Photo[];
}

const IMAGES_PATH = 'https://audio.fizztheband.com/images/fizz-website/';

export const BAND_WEBSITE_CONFIG: BandWebsiteConfig = {
    mainTitle: 'FIZZ: A Local Chicago Pop/Funk/Indie Band',
    bandName: 'FIZZ',
    genres: ['pop','funk', 'indie'],
    logo: {
        src: 'https://audio.fizztheband.com/images/fizz-website/fizz-website-logo.png',
        alt: 'FIZZ pop can logo'
    },
    primaryColor: '',
    socialMedia: [
        {platform: 'youtube', pageSrc: 'https://www.youtube.com/channel/UCCYlcZuQdCE2gD3k9jsTRJw'},
        {platform: 'instagram', pageSrc: 'https://www.instagram.com/fizz.band/'},
        {platform: 'tiktok', pageSrc: 'https://www.tiktok.com/@fizz.band'},
        {platform: 'facebook', pageSrc: 'https://www.facebook.com/Fizzthebandofficial'},
    ],
    photos: [
        {
            description: 'FIZZ performs "Something Cosmic" written by Sun Queen (feat. FIZZ) at Bookclub Chicago.',
            src: `${IMAGES_PATH}fizz-performs-something-cosmic.jpg`
        },
        {
            description: 'Morgan Buckley, one of the lead singers of FIZZ, singing at Bookclub Chicago in late 2022.',
            src: `${IMAGES_PATH}morgan-buckley-close-up.jpg`
        },
        {
            description: 'Mary aka Sun Queen, one of the lead singers of FIZZ, singing at Bookclub Chicago in late 2022.',
            src: `${IMAGES_PATH}sun-queen-plays-something-cosmic.jpg`
        },
        {description: 'Spencer, drummer of FIZZ, playing at Bookclub Chicago.', src: `${IMAGES_PATH}drums-playing-live.jpg`},
        {
            description: 'Alec, bassist of FIZZ, playing his Fender Jazz Bass at Bookclub Chicago.',
            src: `${IMAGES_PATH}bass-playing-live-fizz.jpg`
        },
        {
            description: 'Patrick, guitarist of FIZZ, playing Disco Ulysses by Vulfpeck at Bookclub Chicago.',
            src: `${IMAGES_PATH}guitar-playing-live.jpg`
        },
        {description: 'Sam, trumpet player of FIZZ, takes a solo.', src: `${IMAGES_PATH}trumpet-solo-live.jpg`},
        {description: 'Close up of the drums and rhythm guitar locking in.', src: `${IMAGES_PATH}drums-and-guitar.jpg`},
        {
            description: 'Full horn section plays in unison to a funky pop song.',
            src: `${IMAGES_PATH}horn-section-of-fizz-bookclub-chicago.jpg`
        },
        {
            description: 'Close up of the drummer of FIZZ playing at Bookclub Chicago.',
            src: `${IMAGES_PATH}close-up-drummer-of-fizz.jpg`
        },
        {
            description: 'A close up of DJ, the trombone player of FIZZ, taking a solo.',
            src: `${IMAGES_PATH}trombone-solo-live.jpg`
        },
        {
            description: 'The rhythm section of FIZZ playing a cover of Disco Ulysses by Vulfpeck.',
            src: `${IMAGES_PATH}fizz-rhythm-section-live.jpg`
        },
        {
            description: 'Ethan, saxophone player of FIZZ, taking a solo at Bookclub Chicago.',
            src: `${IMAGES_PATH}sax-solo-live.jpg`
        },
        {
            description: 'Setting up before the gig at Bookclub Chicago in late 2022.',
            src: `${IMAGES_PATH}gig-setup-for-fizz.jpg`
        },
    ],
}