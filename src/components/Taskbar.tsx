import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeOff } from 'lucide-react'
import sound from '../assets/ost.mp3'
import { format } from '@formkit/tempo';


// const date = new Date();

export const Taskbar = () => {

  const [date, setDate] = useState(new Date())
  const [on, setOn] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null);


  useEffect(() => {
    const playAudio = () => {
      audioRef.current?.play();
      setOn(true);
      window.removeEventListener("click", playAudio);

    };

    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    window.addEventListener("click", playAudio);

    return () => {
      window.removeEventListener("click", playAudio);
      clearInterval(timer);
    };
  }, [])



  const stopOrPlay = async () => {
    if (audioRef.current?.paused) {
      await audioRef.current?.play();
      setOn(true)
      return
    }

    audioRef.current?.pause();
    setOn(false)
    return
  }

  return (
    <div className="taskbar flex items-center px-4 justify-between">
      <div className="flex items-center gap-4">
        <a href="#" className="start-btn flex items-center gap-2" type="button">
          <span className="material-symbols-outlined text-[18px]">apps</span>
          START
        </a>
        <div className="hidden md:flex gap-1">
          <a href="#projects" className="bg-white/50 border border-[color:var(--outline)]/50 p-1 px-3 text-[10px] font-label-md">Projects</a>
          <a href="#skills" className="bg-white/50 border border-[color:var(--outline)]/50 p-1 px-3 text-[10px] font-label-md">Skills</a>
        </div>
      </div>
      <div className="bg-white/40 border border-[color:var(--outline)]/40 px-3 py-1 flex items-center gap-3">
        <audio ref={audioRef} src={sound} autoPlay loop />
        <span className="material-symbols-outlined text-[16px]">wifi</span>
        <span className={on ? "animate-pulse" : ''} onClick={stopOrPlay}>
          {
            on ?
              <Volume2 size={24} />
              :
              <VolumeOff size={24} />
          }
        </span>
        <span className="font-label-md text-[11px] pt-0.5" id="timer">{format(date, { date: 'short', time: 'short' })}</span>
      </div>
    </div>
  )
}
