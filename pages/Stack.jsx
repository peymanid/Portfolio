import Card from "react-animated-3d-card";
import stack from "@/public/stack.json";
import Image from "next/image";

const Stack = () => {
  console.log(stack);
  return (
    <div className="w-[97%] min-h-screen flex flex-wrap items-center justify-start">
      <div className="w-[65%] flex flex-wrap items-center justify-center">
        {stack.map((item, index) => {
          return (
            <div className="mr-5 my-5">
              <Card
                style={{
                  width: "150px",
                  backgrgoundColor: "black",
                  height: "200px",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <figure className="w-[100px] relative">
                    <Image
                      alt="language-img"
                      src={item.img}
                      width={100}
                      height={100}
                    />
                  </figure>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stack;
