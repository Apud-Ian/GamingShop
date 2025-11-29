import { useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
const SerchButton = () => {

const [query, setQuery] = useState("");
const [open, setOpen] = useState(false);
const inputRef = useRef(null);

useEffect(() => {
    if (open && inputRef) {
        inputRef.current.focus();
    }
}, [open]);
    return (
        <div>
        <input type="text" onChange={(x)=>( setQuery(x.target.value))} ref={inputRef} onBlur={()=>setOpen(false)} className={open? " focus:outline-none  border-b-2 transition-all ease-in-out ":"hidden"}/>
        <button onClick={()=>setOpen(true)} className={open ? "hidden" :"hover:violet-400 text-gray-200 hover:text-white cursor-pointer"}>
                        <FaSearch />
        </button>
        <div>
            <p>{query}</p>
        </div>
        </div>

    )
}
export default SerchButton;