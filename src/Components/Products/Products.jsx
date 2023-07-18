import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendar} from "@fortawesome/free-solid-svg-icons";
import "./Products.css";

const Products = (props) => {
  const { image, name, features, published_in } = props.item;

  return (
    <div>
      <div className="p-6 border border-solid border-stone-300 w-full mx-auto rounded-2xl">
        <img
          src={image}
          alt=""
          className="w-full h-60 drop-shadow-md rounded-2xl object-cover"
        />

        <div className="">
          <h4 className="pb-4 pt-6 text-2xl font-semibold">Features</h4>

          <ul className="">
            {/* <li className="text-base font-normal text-slate-500	">{features[0]}</li> */}

            {/* {
                props.features.map(featureItem => <li>{featureItem}</li>)
            } */}
          </ul>

          <ol type="1" className="list-decimal px-5">
{features.map(item => <li>{item}</li>)}
            </ol>
        </div>
        <div className="divide-y divide-gray-400 md:divide-y-8"></div>

        <div className="flex justify-between items-center ">
          <div className="">
            <h4 className="pb-4 pt-6 text-2xl font-semibold">{name}</h4>
            <div className="flex items-center text-gray-400 font-medium">
              
              <FontAwesomeIcon icon={faCalendar} className="pr-2"/>
              {published_in}
            </div>
          </div>
          <div className="w-12 h-12 bg-red-100 rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faArrowRight} className="text-red-500"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
