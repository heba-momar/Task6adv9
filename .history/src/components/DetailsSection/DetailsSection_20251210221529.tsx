import type { DetailsSection } from "../../Interface/Interface";
import ParagraphRenderer from "../ParagraphRenderer/ParagraphRenderer";


const DetailsSection = ({ details }:DetailsSection) => {
   if (!details) return null;   
  return (
    <div>
      {details.map((item, index) => (
        <div key={index} className="mb-3 space-y-4">
          {item.title && <p className="font-bold text-lg leading-6 text-gray01">{item.title}</p>}
          {item.example && <p className="font-bold leading-6 text-gray01">{item.example}</p>}
          {item.paragraphs?.map((p, pIndex) => (
            <ParagraphRenderer key={pIndex} paragraph={p} />
          ))}
          {item.blogImage && (
            <div className="my-4">
              <img src={item.blogImage} alt="Blog Detail" className="w-full rounded-lg" />
              {item.ImageDescription && (
                <p className="md:w-[68%] w-full mx-auto text-gray01 text-center mt-2 italic">{item.ImageDescription}</p>
              )}
            </div>
          )}

          {item.paragraphs01?.map((p, pIndex) => (
            <ParagraphRenderer key={pIndex} paragraph={p} />
          ))}
          {item.paragraph02?.map((extraText, extraIndex) => (
            <p key={`extra-${extraIndex}`} className="leading-6 text-gray01">{extraText}</p>
          ))}
        </div>
      ))}
    </div>
  );
  
}

export default DetailsSection
