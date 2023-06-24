import Link from 'next/link';
import { AiFillDownCircle } from 'react-icons/ai';

const DownArrow = () => {
  return (
    <>
      <Link href="/#category">
        <div className="cursor-pointer hover:scale-110 ease-in duration-300">
          <AiFillDownCircle className="text-5xl"/>
        </div>
      </Link>
    </>
  );
};

export default DownArrow;