import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"

const Trending = () => {
  return (
    <div className="my-4 md:my-36 px-4">
      <div className="flex text-center flex-col justify-center items-center md:px-20">
      <h2 className="text-3xl text-center font-extrabold">Shop Our Trending Products</h2>
      <p className="mt-6 w-[360px] text-center">Life is hard enough already. Let us make it a little easier.</p>
      </div>

      <div className="mt-8 flex items-center md:px-20">
        <div className="flex justify-center flex-1">
          <ul className="text-sm menu menu-horizontal font-bold">
            <li className="border-b-2 border-zinc-900"><h6>Fashion</h6></li>
            <li><h6>Technology</h6></li>
            <li><h6>Interiors</h6></li>
            <li><h6>Food & Drink</h6></li>
          </ul>
        </div>
        <div className="flex justify-end items-center gap-2">
          <AiFillLeftCircle className="text-gray-300" size={20}/>
          <AiFillRightCircle size={20}/>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-10 lg:gap-4 mt-16 ml-0 lg:ml-24">
        <div className="lg:col-span-2 md:col-span-5 mx-6 lg:mx-0 col-span-10 py-4 px-4 flex bg-blue-100 h-40 rounded-xl relative">
          <div>
            <h3 className="text-lg font-bold">Seven Zero Five</h3>
            <p>Starting</p>
            <p className="text-error mt-10">$10.00</p>
          </div>
          <div className="absolute -top-14 right-0">
            <img src="705.png" alt="705" className=""/>
          </div>
        </div>
        <div className="lg:col-span-2 md:col-span-5 mx-6 lg:mx-0 col-span-10 py-4 px-4 flex bg-purple-100 h-40 rounded-xl relative">
          <div>
            <h3 className="text-lg font-bold">Clock</h3>
            <p>Starting</p>
            <p className="text-error mt-10">$25.00</p>
          </div>
          <div className="absolute -top-12 right-0">
            <img src="Clock.png" alt="clock" className=""/>
          </div>
        </div>
        <div className="lg:col-span-2 md:col-span-5 mx-6 lg:mx-0 col-span-10 py-4 px-4 flex bg-purple-100 h-40 rounded-xl relative">
          <div>
            <h3 className="text-lg font-bold">Curology</h3>
            <p>Starting</p>
            <p className="text-error mt-10">$12.00</p>
          </div>
          <div className="absolute -top-12 right-0">
            <img src="Curology-1.png" alt="curology-1" className=""/>
          </div>
        </div>
        <div className="lg:col-span-2 md:col-span-5 mx-6 lg:mx-0 col-span-10 py-4 px-4 flex bg-cyan-50 h-40 rounded-xl relative">
          <div>
            <h3 className="text-lg font-bold">Chair</h3>
            <p>Starting</p>
            <p className="text-error mt-10">$16.00</p>
          </div>
          <div className="absolute -top-12 right-0">
            <img src="Chair.png" alt="chair" className=""/>
          </div>
        </div>
        <div className="lg:col-span-2 md:col-span-5 mx-6 lg:mx-0 col-span-10 py-4 px-4 flex bg-sky-100 h-40 rounded-xl relative">
          <div>
            <h3 className="text-lg font-bold">Curology</h3>
            <p>Starting</p>
            <p className="text-error mt-10">$60.00</p>
          </div>
          <div className="absolute -top-8 right-4">
            <img src="Curology-2.png" alt="curology-2" className=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending