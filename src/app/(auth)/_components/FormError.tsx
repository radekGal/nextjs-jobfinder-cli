export const FormError = ({ text }: { text: string }) => {
  return(
    <span className="text-red-500 font-semibold text-[12px] -mt-1 mb-1">{text}</span>
  );
}