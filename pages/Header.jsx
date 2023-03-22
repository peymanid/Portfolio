import Image from "next/image";
import { AiFillGithub } from "react-icons/ai"
import img from "@/public/Space-Illustration.png"

const Header = () => {
  return (
    <div className="flex h-[88vh] items-center py-5">
      <div className="text-white w-[50%] p-10">
        <p className="text-[#842cdd]">Developer</p>
        <p className="text-7xl">Peyman Esmaeilpour</p>
        
        <p className="text-[#8a878a] my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          harum voluptate? Saepe vitae laborum illo. Recusandae, dignissimos?
          Consequuntur magnam, libero, non nisi nulla cumque nesciunt hic
          cupiditate iusto, quaerat laboriosam?
        </p>
        <button className="flex px-[50px] py-[20px] bg-[#842cdd] rounded-[50px]">
            <AiFillGithub size={20}/>
            <p className="ml-2">Github</p>
        </button>
        
      </div>
      <div className="w-[30%] h-full">
        <figure className="w-[90%] ml-auto h-full relative ">
            <Image src={img} fill className="rounded-l-[40px]"/>
        </figure>
      </div>
    </div>
  );
};

export default Header;
