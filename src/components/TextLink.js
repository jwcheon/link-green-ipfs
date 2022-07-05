import { Link } from "react-router-dom";

function TextLink({ text, link="/" }) {
    return (
      <div className="
        flex justify-center items-center mb-4 px-2 py-[14px] min-h-[40px] bg-white shadow-sm rounded-2xl 
        font-normal text-sm hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white 
        transition-transform ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer
      ">
        <Link>
          { text }
        </Link>
      </div>
    );
  }
  
  export default TextLink;
  