import CustomDropdown from '@/components/custom/dropdown';
import logo from './assets/images/logo.png';
import { NavLinks } from './constants/navLinks';
import LanguageDropdown from '@/components/custom/language_dropdown';
import { Menu, Search, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link, useNavigate } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import DateTime from '@/components/custom/date';
import { clearUser } from './slices/userSlice';

const NavBar = ({ careers=false, login=false, job=false }) => {
  const width = useSelector((state) => state.viewport.width);
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    dispatch(clearUser());
    navigate('/login');
  }
  
  return (
    <div className="flex justify-between bg-white fixed top-0 left-0 items-center w-full px-4 h-16 shadow z-10">
      <div className={ `flex items-center ${ width < 1024 && 'flex-row-reverse w-3/5 justify-between' }` }>
        <div className="w-[6.3rem] mr-14">
          <img src={ logo } alt="Logo" className='object-cover mb-2' />
        </div>
        { !login && !job && (
          width > 1024 ? (
            <>
              <CustomDropdown key={ 1 } twoColumn={ true } data={ NavLinks[0] } levelled={ false } />
              <CustomDropdown key={ 2 } twoColumn={ false } data={ NavLinks[1] } levelled={ false } />
              <CustomDropdown key={ 3 } twoColumn={ false } data={ NavLinks[2] } levelled={ false } />
              <CustomDropdown key={ 4 } twoColumn={ false } data={ NavLinks[3] } levelled={ true } />
              <CustomDropdown key={ 5 } twoColumn={ false } data={ NavLinks[4] } levelled={ true } />
            </>
          ) : (
            <Sheet>
              <SheetTrigger asChild>
                <Button className='bg-white'>
                  <Menu className='text-black' />
                </Button>
              </SheetTrigger>
              <SheetContent className='p-0 hidden_scrollbar overflow-scroll' side='left'>
                <Accordion collapsible={ true } type='single' className='w-full mt-8'>
                  { NavLinks.map((navLink, i) => (
                    <AccordionItem key={ i } value={ `item-${ i }` }>
                      <AccordionTrigger className='px-4'>{ navLink.name }</AccordionTrigger>
                      <AccordionContent className='px-4'>
                        { navLink.content && (
                          <div className='flex flex-col'>
                            <span className='text-lg mb-3 font-bold'>{ navLink.content.title }</span>
                            <span className='text-lg mb-3 font-bold'>{ navLink.content.contentName }</span>
                            <span className='text-sm mb-3 font-normal'>{ navLink.content.contentDescription }</span>
                          </div>
                        ) }
                        { navLink.subLinks.map((link, i) => (
                          <div className='text-base font-normal' key={ i }>
                            <div className="p-4">
                              <Link to={ link?.to ? link.to : '' } key={ link.name ? link.name : link }>{ link?.name ? link.name : link }</Link>
                            </div>
                            <Separator />
                          </div>
                        )) }
                        { navLink.levels && navLink.levels.map(level => (
                          level.links.map((link, i) => (
                            <div className='text-base font-normal' key={ i }>
                              <div className="p-4">
                                <Link to={ link?.to ? link.to : '' } key={ link.name ? link.name : link }>{ link?.name ? link.name : link }</Link>
                              </div>
                              <Separator />
                            </div>
                          ))
                        )) }
                      </AccordionContent>
                    </AccordionItem>
                  )) }
                </Accordion>
              </SheetContent>
            </Sheet>
          )
        ) }
      </div>
      { !login && !job && (
        <div className="flex items-end">
          <Button className='bg-transparent border-r-gray-400 border-r h-16 hover:bg-transparent hover:border-black rounded-none hover:border-b-4'><Search className='text-gray-500' /></Button>
          { careers && (
            <>
              <Link to='/login' className='bg-transparent text-black text-xs border-r-gray-400 border-r h-16 hover:bg-transparent hover:border-black rounded-none hover:border-b-4 flex items-center'>ACCESS APPLICATION</Link>
              <Button className='bg-transparent text-black text-xs border-r-gray-400 border-r h-16 hover:bg-transparent hover:border-black rounded-none hover:border-b-4'>
                <Star className='mr-3 w-4 h-4' />
                SAVED JOBS
              </Button>
            </>
          ) }
          <LanguageDropdown />
        </div>
      ) }
      { job && (
        <div className='flex items-center'>
          <div className='text-blue-700 flex flex-col items-center mr-4'>
            <p>{ user.email }</p>
            <DateTime />
          </div>
          <button className="text-2xl font-extrabold" onClick={ () => signOut() }>SIGN OUT</button>
        </div>
      ) }
    </div>
  );
}

export default NavBar;