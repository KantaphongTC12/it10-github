import React from "react";
import cardData from "../services/cardData";
import { useParams } from "react-router-dom";


const CardDetail = () => {
  const { id } = useParams();
  const CardDetail = cardData.find(item => item.id === parseInt(id));
  return (
    <>
      <main className="flex-grow">
        <div className="contrainer mx-auto py-10 px-4">
          <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 w-full">
              <img src={CardDetail.imageUrl} alt="  " />
            </div>
          </div>

          <div className="md:w-1/2 w-full p-6 flex flex-col">
            <h1 className="text-3xl font-bold mb-4 text-purple-800"> </h1>
            <p className="text-gray-700 text-lg leading-relaxed"> </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default CardDetail;
