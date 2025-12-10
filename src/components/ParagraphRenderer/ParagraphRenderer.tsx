import type {  Paragraphses } from "../../Interface/Interface";
const ParagraphRenderer: React.FC<{ paragraph: Paragraphses }> = ({ paragraph }) => {
  if (paragraph.type === "list" && Array.isArray(paragraph.text)) {
    return (
      <ul className="list-disc pl-6 space-y-1">
    {paragraph.text.map((li,i)=>{
        return(
     <li key={i} className="leading-6 text-gray01">{li}</li>
        )
    })}
      </ul>
    );
  }

  if (
    typeof paragraph.text === "string" &&
    paragraph.span &&
    paragraph.text.includes(paragraph.span)
  ) {
    const [before, after] = paragraph.text.split(paragraph.span);
    const spanClass =
      paragraph.spanStyle === "bold" ? "font-bold" :
      paragraph.spanStyle === "underline" ? "underline" : "";

    return (
      <p className="leading-6 text-gray01">
        {before}
        <span className={spanClass}>{paragraph.span}</span>
        {after}
      </p>
    );
  }

  return (
    <p className="leading-6 text-gray01">
      {Array.isArray(paragraph.text) ? paragraph.text.join(" ") : paragraph.text}
    </p>
  );
};

export default ParagraphRenderer;
