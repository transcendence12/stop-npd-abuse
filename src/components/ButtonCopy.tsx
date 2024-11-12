"use client";
import { CopyIcon } from "@/assets/icons/CopyIcon";
import { useState } from "react";

interface CopyButtonProps {
  textToCopy: string | null;
}
export const ButtonCopy: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if(!textToCopy){
        console.error("No text to copy!");
        return
    }
    try {
        await navigator.clipboard.writeText(textToCopy);
        setIsCopied(true);
        setTimeout(()=>{setIsCopied(false)}, 2000)
    } catch(error){
        console.error("Failed to copy text.", error)
    }
  }
  return (
    <div className="relative">
      <button className="btn btn-xs" onClick={handleCopy}>
        <CopyIcon />
      </button>
      {isCopied && (<span className="tooltip tooltip-open tooltip-top" data-tip="Skopiowano!"></span>)}
    </div>
  );
};
