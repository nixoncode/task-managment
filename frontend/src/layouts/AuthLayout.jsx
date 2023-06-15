export default function AuthLayout({ children }) {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0">
      <div
        className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row mt-20"
      >
        <div className="flex flex-col justify-center items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
          <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
            <div
              className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10"
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
