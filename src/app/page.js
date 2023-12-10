
import RegisterUser from "@/components/Login/RegisterUser";
import AnimateCircles from "@/components/shared/AnimateCircles";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center dark:bg-black bg-white">
      <AnimateCircles/>
      <div className="border border-gray-500 w-11/12 lg:h-1/2 lg:w-1/3 z-50 relative backdrop-blur-md p-6">
        <RegisterUser/>
      </div>
    </main>
  )
}
