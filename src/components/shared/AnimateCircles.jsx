
const AnimateCircles = () => {
  return (
    <div className="w-screen h-full absolute overflow-x-hidden">
      <div className="relative w-full z-10 h-full overflow-y-hidden overflow-x-hidden">
        <div className="absolute top-[10rem] right-[30rem] w-[300px] h-[300px] bg-gradient-to-b  from-pink-950 via-pink-700 to-white rounded-full mix-blend-multiply filter animate-blob opacity-30 animation-delay-5000 overflow-hidden"></div>
        <div className="absolute left-[20rem] bottom-[20rem] w-[400px] h-[400px] bg-gradient-to-tl  from-white via-emerald-400 to-emerald-950  rounded-full mix-blend-multiply filter opacity-30 animate-blob animation-delay-4000 overflow-hidden"></div>
        <div className="absolute top-[35rem] right-[30rem] w-[150px] h-[150px] rounded-full rotate-45 bg-gradient-to-tr from-[#143154] to-[#191b31] mix-blend-multiply filter opacity-70 animate-blob animation-delay-6000"></div>{" "}
      </div>
    </div>
  )
}

export default AnimateCircles