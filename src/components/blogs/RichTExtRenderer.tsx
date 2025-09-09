import Dompurify from "dompurify";
interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  content: string;
}
function RichTExtRenderer({ content, className }: Props) {
  const sanitizedContent = Dompurify.sanitize(content);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      className={className}
    />
  );
}

export default RichTExtRenderer;
