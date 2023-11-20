import { Link } from "react-router-dom";
import { AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Separator } from "../ui/separator";

const AccordionNavItem = ({ data, twoRowed, i }) => {
  <AccordionItem value={ `item-${ i }` }>
    <AccordionTrigger>{ data.name }</AccordionTrigger>
    <AccordionContent>
      { twoRowed && (
        <>
          <span className='text-lg mb-3 font-bold'>{ data.content.title }</span>
          <span className='text-lg mb-3 font-bold'>{ data.content.contentName }</span>
          <span className='text-sm mb-3 font-normal'>{ data.content.contentDescription }</span>
        </>
      ) }
      { data.subLinks.map((link, i) => (
        <div className='text-[17px] flex content-between items-start leading-10 text-blue-700 font-normal focus:bg-transparent focus:text-blue-700 hover:text-blue-700 hover:bg-transparent flex-wrap' key={ i }>
          <Link to={ link?.to ? link.to : '' } className='w-[25%] max-w-[25%]' key={ link.name ? link.name : link }>{ link?.name ? link.name : link }</Link>
          <Separator />
        </div>
      )) }
    </AccordionContent>
  </AccordionItem>
}

export default AccordionNavItem;