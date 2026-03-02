import { Navbar } from './Navbar';
import InfiniteMenu from './InfiniteMenu';

const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
];

export const EventsPage = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center overflow-hidden pt-24">
      <Navbar />
      
      <div className="w-full text-center px-4 relative z-10 mb-8 mt-4">
        <h2 className="font-headingWide text-4xl md:text-7xl text-white uppercase tracking-wider text-shadow-glow leading-none">
          EXPLORE <span className="text-neon-yellow">EVENTS</span>
        </h2>
        <p className="text-white mt-4 uppercase tracking-widest text-sm md:text-base">
          Scroll and drag to discover what's coming
        </p>
      </div>

      <div style={{ height: '600px', width: '100%', position: 'relative', zIndex: 0 }}>
        <InfiniteMenu items={items} scale={1} />
      </div>
    </div>
  );
};
