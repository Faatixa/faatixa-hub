import React, { useEffect, useRef } from "react"
import { site } from "../config/site"

function ChatBubble(){
  const btnRef = useRef(null)

  useEffect(() => {
    const btn = btnRef.current
    if(!btn) return
    const handleClick = () => {
      const url = `https://wa.me/${site.whatsapp}?text=Hello%20${encodeURIComponent(site.brand)}%2C%20I%20need%20a%20demo`
      window.open(url, "_blank")
    }
    btn.addEventListener("click", handleClick)
    return () => btn.removeEventListener("click", handleClick)
  }, [])

  return (
    <button
      ref={btnRef}
      aria-label="Open chat"
      className="fixed bottom-6 right-6 bg-[#4d0a0a] text-white rounded-full h-14 w-14 shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform flex items-center justify-center"
    >
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3C7.031 3 3 6.589 3 11c0 2.427 1.211 4.606 3.156 6.086L5 21l4.117-1.356C10.05 19.878 11.006 20 12 20c4.969 0 9-3.589 9-8s-4.031-9-9-9zm-1.18 5.25h2.36c.41 0 .74.33.74.74v2.36c0 .41-.33.74-.74.74H12v1.48h1.18c.41 0 .74.33.74.74v2.36c0 .41-.33.74-.74.74h-2.36a.74.74 0 01-.74-.74v-2.36c0-.41.33-.74.74-.74H11v-1.48h-1.18a.74.74 0 01-.74-.74v-2.36c0-.41.33-.74.74-.74z"/>
      </svg>
    </button>
  )
}  

export default ChatBubble


