export interface SocialMedia {
    platform: 'facebook' | 'tiktok' | 'twitter' | 'instagram' | 'youtube' | string;
    pageSrc: string;
}

export interface Logo {
    src: string;
    alt: string;
}

export interface IBandConfig {
    mainTitle: string;
    bandName: string;
    genres: string[];
    logo: Logo;
    primaryColor?: string;
    socialMedia: SocialMedia[];
}

export const BAND_CONFIG: IBandConfig = {
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
}