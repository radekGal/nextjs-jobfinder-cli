export const FormSeparator = () => {
  return(
    <div className="my-2 w-full md:w-3/5 lg:w-1/2">
      <div className="flex items-center">
        <div className="w-2/5 h-[1px] bg-gray-200"></div>
        <div className="w-1/5 text-center">
          <span className="text-gray-300 block">or</span>
        </div>
        <div className="w-2/5 h-[1px] bg-gray-200"></div>
      </div>
    </div>
  );
}