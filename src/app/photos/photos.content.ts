export type PhotoEntry = {
  src: string;
  alt: string;
  title: string;
  date: string;
  locationOrCaption: string;
  width: number;
  height: number;
};

export const photoEntries: PhotoEntry[] = [
  {
    src: '/photos/tide-study.svg',
    alt: 'Abstract seascape with low tide blues and warm horizon light.',
    title: 'Tide Study',
    date: 'March 2026',
    locationOrCaption: 'A quiet horizon and a little room to breathe.',
    width: 1600,
    height: 900,
  },
  {
    src: '/photos/cedar-silence.svg',
    alt: 'Abstract mountain landscape with cedar-toned foothills and pale mist.',
    title: 'Cedar Silence',
    date: 'February 2026',
    locationOrCaption: 'Cloud cover softening the edges of the afternoon.',
    width: 1600,
    height: 900,
  },
  {
    src: '/photos/night-ridge.svg',
    alt: 'Abstract twilight ridge with a deep blue sky and illuminated horizon.',
    title: 'Night Ridge',
    date: 'January 2026',
    locationOrCaption: 'The last line of light before everything turns indigo.',
    width: 1600,
    height: 900,
  },
  {
    src: '/photos/field-notes.svg',
    alt: 'Abstract golden field landscape with a soft sky and distant tree line.',
    title: 'Field Notes',
    date: 'December 2025',
    locationOrCaption: 'A long landscape frame for the kind of stillness I return to.',
    width: 1600,
    height: 900,
  },
];
