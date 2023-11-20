import { ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import flag from '../../src/assets/images/India.jpg';

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
]

const LanguageDropdown = () => {
  return (
    <div className="flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className='hover:border-b-4 hover:border-b-black'>
          <Button className='h-16 m-auto rounded-none bg-transparent hover:bg-transparent pr-0 hover:text-black'>
            <img src={ flag } alt='flag' className='object-contain mr-2' />
            <ChevronDown className='w-4 h-4 text-black' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-80 h-96 border-t-8 border-black rounded-none overflow-y-scroll'>
          <DropdownMenuLabel className='font-bold'>Default (English)</DropdownMenuLabel>
          <DropdownMenuSeparator className='bg-[#ccc]' />
          <DropdownMenuGroup>
            { languages.map((language, i) => (
              <div key={ `${ language.label }_${ i }` }>
                <DropdownMenuItem className='hover:bg-transparent focus:bg-transparent'>
                  <p className="cursor-pointer hover:underline">{ `${ language.label } (${ language.value })` }</p>
                </DropdownMenuItem>
                <DropdownMenuSeparator className='bg-[#ccc]' />
              </div>
            )) }
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default LanguageDropdown;