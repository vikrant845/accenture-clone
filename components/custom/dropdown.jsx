import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CustomDropdown = ({ twoColumn, data, levelled }) => {
  
  const [open, setOpen] = useState(false);
  
  return (
    <DropdownMenu open={ open }>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='flex content-between data-[state=open]:pointer-events-auto h-16 hover:bg-transparent focus:bg-transparent hover:border-b-4 border-black rounded-none transition-all' onClick={ () => setOpen(open => !open) }>
          <p className='text-base font-normal mr-2'>{ data.name }</p>
          <ChevronDown className='w-4 h-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-screen flex py-10 px-32 -mt-1'>
        { twoColumn && !levelled && (
          <DropdownMenuGroup className='w-2/6 flex-none'>
            <DropdownMenuItem className='flex flex-col focus:bg-transparent hover:bg-transparent mr-8 items-start'>
              <span className='text-lg mb-3 font-bold'>{ data.content.title }</span>
              <span className='text-lg mb-3 font-bold'>{ data.content.contentName }</span>
              <span className='text-sm mb-3 font-normal'>{ data.content.contentDescription }</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        ) }
        { !levelled && (
          <DropdownMenuGroup>
            <DropdownMenuItem className='text-[17px] flex content-between items-start leading-10 text-blue-700 font-normal focus:bg-transparent focus:text-blue-700 hover:text-blue-700 hover:bg-transparent flex-wrap' onClick={ () => setOpen(false) }>
              { data.subLinks.map(link => (
                <Link to={ link?.to ? `/${ link.to }` : '' } className={ `w-[25%] max-w-[25%] ${ !link.to && 'text-black cursor-default' }` } key={ link.name ? link.name : link }>{ link?.name ? link.name : link }</Link>
              )) }
            </DropdownMenuItem>
          </DropdownMenuGroup>
        ) }
        { levelled && (
          <DropdownMenuGroup>
            {
              data.levels.map((level, i) => (
                <div key={ i }>
                  <div className='py-10'>
                    { level.title && <span className='text-lg mb-3 font-bold'>{ level.title }</span> }
                    <DropdownMenuItem key={ i } className='text-[17px] flex content-between items-start pl-0 leading-10 text-blue-700 font-normal focus:bg-transparent focus:text-blue-700 hover:text-blue-700 hover:bg-transparent flex-wrap' onClick={ () => setOpen(false) }>
                      {
                        level.links.map(link => (
                          <Link to={ link?.to ? link.to : '' } className={ `w-[25%] max-w-[25%] ${ level.size === 'big' && 'text-3xl' } ${ !link.to && 'text-black cursor-default' }` } key={ link.name ? link.name : link }>{ link?.name ? link.name : link }</Link>
                        ))
                      }
                    </DropdownMenuItem>
                  </div>
                  { (i < data.levels.length - 1) && <DropdownMenuSeparator className='bg-slate-300' /> }
                </div>
              ))
            }
          </DropdownMenuGroup>
        ) }
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CustomDropdown;