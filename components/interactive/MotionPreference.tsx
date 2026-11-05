"use client";
import { useSyncExternalStore } from "react";
const eventName = "portfolio-motion-change";
function subscribe(callback:()=>void) { window.addEventListener(eventName,callback); return ()=>window.removeEventListener(eventName,callback); }
const snapshot = () => document.documentElement.dataset.motion === "reduced";
export function MotionPreference() {
  const reduced = useSyncExternalStore(subscribe,snapshot,()=>false);
  return <button type="button" className="motion-preference" aria-pressed={reduced} onClick={()=>{
    document.documentElement.dataset.motion = reduced ? "system" : "reduced";
    window.dispatchEvent(new Event(eventName));
  }}>{reduced?"Use system motion":"Reduce motion"}</button>;
}
