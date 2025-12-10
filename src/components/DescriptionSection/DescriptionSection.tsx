import type { DescriptionSections } from "../../Interface/Interface"


const DescriptionSection = ({ description }:DescriptionSections) => {
  return (
  <div className="flex flex-col gap-3">
 {description.map((text, index) => (
   <p key={index} className="leading-6 text-gray01 mb-3">{text}</p>
            ))}
        </div>
  )
}

export default DescriptionSection
