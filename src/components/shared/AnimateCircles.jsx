
const AnimateCircles = () => {
  return (
    <div className="w-screen h-full absolute overflow-x-hidden">
      <div className="relative w-full z-10 h-full overflow-y-hidden overflow-x-hidden">
        <div className="absolute left-[35rem] bottom-[10rem] w-[200px] h-[200px] bg-gradient-to-tl  from-white via-emerald-400 to-emerald-950  rounded-full mix-blend-multiply filter opacity-30 animate-blob animation-delay-4000 overflow-hidden"></div>
        <div className="absolute left-[35rem] bottom-[20rem] w-[200px] h-[200px] bg-gradient-to-tl from-[#143154] to-[#191b31] rounded-full mix-blend-multiply filter opacity-30 animate-blob animation-delay-4000 overflow-hidden"></div>
        <div className="absolute left-[40rem] bottom-[10rem] w-[200px] h-[200px] bg-gradient-to-tl from-pink-950 via-pink-700 to-white rounded-full mix-blend-multiply filter opacity-30 animate-blob animation-delay-4000 overflow-hidden"></div>
      </div>
    </div>
  )
}

export default AnimateCircles