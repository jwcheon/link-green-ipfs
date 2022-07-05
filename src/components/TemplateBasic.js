function TemplateBasic({ children }) {
    return (
      <div className="h-screen overflow-y-auto bg-slate-100">
        <div className="flex flex-col min-h-full max-w-sm m-auto pt-10 px-5">
            { children }
        </div>
      </div>
    );
  }
  
export default TemplateBasic;
  