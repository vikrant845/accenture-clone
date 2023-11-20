import { MoveRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const IndexSection = ({ data }) => {

  const [width, setWidth] = useState(0);
  const indexBar = useRef(null);
  const [direction, setDirection] = useState('up');
  
  useEffect(() => {
    if (data.progress) {
      let lastPosition = 0;
      const handleWidth = () => {
        setWidth(width => window.scrollY / (document.body.clientHeight - window.innerHeight));
        if (lastPosition > window.scrollY) setDirection('up');
        else setDirection('down');
        lastPosition = window.scrollY;
      }
  
      window.addEventListener('scroll', handleWidth);
  
      return () => window.removeEventListener('scroll', handleWidth);
    }
  }, []);
  
  return (
    <div className={ `bg-gray-100 h-14 ${ data.sticky ? 'sticky top-16' : 'fixed top-16' } left-0 w-full z-10` } ref={ indexBar }>
      { data.progress && <div className={ `h-14 absolute left-0 bg-[#8c8c8c] z-[-1]` } style={{ width: `${ width * 100 }%` }} /> }
      <ul className={ `flex items-center h-full z-[0] ${ data.centered && 'max-w-[75rem] mx-auto justify-between' }` }>
        { data.image && <li className='px-4 text-xs font-normal'><MoveRight className={ `${ direction === 'down' ? '-rotate-90' : 'rotate-0' } transition-all` } /></li> }
        { data.links.map((link, i) => (
          <li className='px-4 text-xs font-normal' key={ `${ link.split(' ')[0] }_${ i }` }>{ link }</li>
        )) }
      </ul>
    </div>
  );
}

export default IndexSection;