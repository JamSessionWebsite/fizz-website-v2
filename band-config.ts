import {Video} from "./pages/videos";

export interface SocialMedia {
    platform: 'facebook' | 'tiktok' | 'twitter' | 'instagram' | 'youtube' | string;
    pageSrc: string;
}

export interface Logo {
    src: string;
    alt: string;
    wide?: {
        src: string;
        alt: string;
    }
}

export interface Photo {
    src: string;
    description: string;
    alt?: string;
    groupId?: string;
}

export interface Contact {
    id: string;
    name: string;
    method: 'phone' | 'email' | string;
    value: string;
    defaultSubject?: string;
}

export interface WebsitePage {
    id: string;
    name: string;
    path: string;
}

export interface BandWebsiteConfig {
    mainTitle: string;
    bandName: string;
    bandId: string;
    websiteId: string;
    domain: string;
    fontFamily?: string;
    primaryEmailAddress: string;
    backgroundImageSrc: string;
    genres: string[];
    logo: Logo;
    primaryColor?: string;
    socialMedia: SocialMedia[];
    photos: Photo[];
    contacts: Contact[];
    pages: WebsitePage[];
    videos: Video[];
}

const IMAGES_PATH = 'https://media.bandpractice.app/bands/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d/bandFiles/images/';

export const BAND_WEBSITE_CONFIG: BandWebsiteConfig = {
    mainTitle: 'Fizz: A Local Chicago Funk Pop Band',
    bandName: 'Fizz',
    bandId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    websiteId: 'c90e9dd2-289f-4497-9307-d3b7ab57cb21',
    domain: 'fizz.band',
    primaryEmailAddress: 'booking@fizz.band',
    fontFamily: 'Comfortaa',
    backgroundImageSrc: 'https://media.bandpractice.app/bands/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d/bandFiles/images/fizz-website-background-b-and-w.jpg',
    genres: ['pop','funk'],
    logo: {
        src: 'https://media.bandpractice.app/bands/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d/bandFiles/images/fizz-soda-red-blue-transparent-bg-256-512.png',
        alt: 'Fizz pop can logo',
        wide: {
            src: 'https://media.bandpractice.app/bands/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d/bandFiles/images/fizz-logo-pop-label-transparent-min.png',
            alt: 'Fizz pop bottle logo'
        }
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
            description: 'Full horn section plays in unison to a funky pop song.',
            src: `${IMAGES_PATH}horn-section-of-fizz-bookclub-chicago.jpg`
        },
        {
            description: 'Fizz performs "Something Cosmic" written by Sun Queen (feat. Fizz) at Bookclub Chicago.',
            src: `${IMAGES_PATH}fizz-performs-something-cosmic.jpg`
        },
        {
            description: 'Morgan Buckley, the lead singer of Fizz, singing at Bookclub Chicago in late 2022.',
            src: `${IMAGES_PATH}morgan-buckley-close-up.jpg`
        },
        {description: 'Spencer, drummer of Fizz, playing at Bookclub Chicago.', src: `${IMAGES_PATH}drums-playing-live.jpg`},
        {
            description: 'Alec, bassist of Fizz, playing his Fender Jazz Bass at Bookclub Chicago.',
            src: `${IMAGES_PATH}bass-playing-live-fizz.jpg`
        },
        {
            description: 'Patrick, guitarist of Fizz, playing Disco Ulysses by Vulfpeck at Bookclub Chicago.',
            src: `${IMAGES_PATH}guitar-playing-live.jpg`
        },
        {description: 'Sam, trumpet player of Fizz, takes a solo.', src: `${IMAGES_PATH}trumpet-solo-live.jpg`},
        {description: 'Close up of the drums and rhythm guitar locking in.', src: `${IMAGES_PATH}drums-and-guitar.jpg`},
        {
            description: 'Close up of the drummer of Fizz playing at Bookclub Chicago.',
            src: `${IMAGES_PATH}close-up-drummer-of-fizz.jpg`
        },
        {
            description: 'A close up of DJ, the trombone player of Fizz, taking a solo.',
            src: `${IMAGES_PATH}trombone-solo-live.jpg`
        },
        {
            description: 'The rhythm section of Fizz playing a cover of Disco Ulysses by Vulfpeck.',
            src: `${IMAGES_PATH}fizz-rhythm-section-live.jpg`
        },
        {
            description: 'Ethan, saxophone player of Fizz, taking a solo at Bookclub Chicago.',
            src: `${IMAGES_PATH}sax-solo-live.jpg`
        },
        {
            description: 'Setting up before the gig at Bookclub Chicago in late 2022.',
            src: `${IMAGES_PATH}gig-setup-for-fizz.jpg`
        },
    ],
    videos: [
        {
            type: 'youtube',
            videoId: 'Po3-1mDTm7I',
            name: 'I Love You - Morgan Buckley (feat. Fizz)',
            url: 'https://www.youtube-nocookie.com/embed/Po3-1mDTm7I',
        },
        {
            type: 'tiktok',
            name: 'Shot by Lawrence - Fizz Cover',
            url: 'https://www.tiktok.com/embed/7169370519249095979'
        },
        {
            type: 'tiktok',
            name: 'Something Cosmic - Sun Queen (feat. Fizz)',
            url: 'https://www.tiktok.com/embed/7169345381040491822'
        },
        {
            type: 'youtube',
            videoId: 'FDmttaicp9A',
            name: 'Latin Man at Dillo Day',
            url: 'https://www.youtube-nocookie.com/embed/FDmttaicp9A',
        },
        {
            type: 'youtube',
            videoId: 'SDLzqZ1Dg8s',
            name: 'American Boy/Dang! Covers - Fizz',
            url: 'https://www.youtube-nocookie.com/embed/SDLzqZ1Dg8s',
        },
        {
            type: 'youtube',
            videoId: '_7TZ8DVQpug',
            name: 'Caught Up - Fizz at Dillo Day',
            url: 'https://www.youtube-nocookie.com/embed/_7TZ8DVQpug',
        },
        {
            type: 'youtube',
            videoId: 'DW-T3eGuYAo',
            name: 'Fizz at Mayfest Battle of the Bands',
            url: 'https://www.youtube-nocookie.com/embed/DW-T3eGuYAo',
        }
    ],
    contacts: [
        {id: 'booking', name: 'Booking', method: 'email', value: 'booking@fizz.band', defaultSubject: 'Booking with Fizz'},
        {id: 'media', name: 'Media', method: 'email', value: 'media@fizz.band', defaultSubject: 'Media Inquiry for Fizz'},
        {id: 'merch', name: 'Merch', method: 'email', value: 'merch@fizz.band', defaultSubject: 'Merch Proposal for Fizz'},
        {id: 'tickets', name: 'Tickets', method: 'email', value: 'tickets@fizz.band', defaultSubject: 'I am Trying to Buy Tickets'},
        {id: 'website', name: 'Website', method: 'email', value: 'spencer@fizz.band', defaultSubject: 'I Have an Issue With the Website'},
        {id: 'other', name: 'Other', method: 'email', value: 'other@fizz.band', defaultSubject: 'Hi!'},
    ],
    pages: [
        {id: 'home', name: 'Home', path: '/'},
        {id: 'about-us', name: 'About Us', path: '/about-us'},
        {id: 'contact-us', name: 'Contact Us', path: '/contact-us'},
        {id: 'shows', name: 'Shows', path: '/shows'},
        {id: 'videos', name: 'Videos', path: '/videos'},
    ]
}