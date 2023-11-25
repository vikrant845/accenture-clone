import ArticleCard from "./article_card";
import PeopleCard from "./people_card";

const OneColumnSection = ({
  background=true,
  children,
  title,
  description,
  people=false,
  peopleData={},
  article=false,
  articleData={},
  articleVariant='1'
}) => {
  return (
    <div className={ `py-12 flex justify-center ${ background ? 'bg-gray-100' : 'bg-white' } mt-8` }>
      <div className="w-[75rem]">
        <h1 className="text-5xl font-bold">{ title }</h1>
        <p className="my-6">{ description }</p>
        <div className="flex flex-wrap">
          { people && (
            peopleData.map(cardData => (
              <PeopleCard data={ cardData } />
            ))
          ) }
        </div>
        { article && (
          <div className={ `flex flex-wrap ${ articleVariant === '2' ? 'mt-24' : 'mt-40' }` }>
            { 
              articleData.map((cardData, i) => (
                <ArticleCard data={ cardData } variant={ articleVariant } key={ i } />
              ))
            }
          </div>
        ) }
        { children }
      </div>
    </div>
  );
}

export default OneColumnSection;