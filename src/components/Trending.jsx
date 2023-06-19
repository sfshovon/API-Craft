import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"

const Trending = () => {
  return (
    <div className="my-4 md:my-36 px-4 md:px-20">
      <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl font-extrabold">Shop Our Trending Products</h2>
      <p className="mt-6 w-[360px]">Life is hard enough already. Let us make it a little easier.</p>
      </div>

      <div className="mt-8 flex items-center">
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
    </div>
  )
}

export default Trending