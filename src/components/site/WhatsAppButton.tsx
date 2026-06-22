"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { whatsappLink } from "@/lib/site";

/**
 * Floating click-to-chat WhatsApp button, fixed bottom-right on every page.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PinkFox on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:-translate-y-0.5 active:scale-95 sm:bottom-7 sm:right-7"
    >
      <span className="relative flex h-7 w-7 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-70 [animation-duration:2.4s] motion-reduce:hidden" />
        <WhatsappLogo weight="fill" className="relative h-7 w-7" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 group-hover:max-w-[8rem] group-hover:opacity-100">
        Book on WhatsApp
      </span>
    </a>
  );
}
