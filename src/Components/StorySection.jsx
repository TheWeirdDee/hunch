/* eslint-disable no-unused-vars */
import React from 'react';
import banner from "../assets/banner.png";

const StorySection = () => {
  return (
    <div className="flex justify-start items-left ml-20 min-h-screen px-4 py-12">
      <div className="relative max-w-md w-full">
        
        {/* Image: visible only on large screens */}
        <img
          src={banner}
          alt="Salad"
          className="w-full h-auto object-cover rounded-sm hidden lg:block"
        />
         
        {/* Text content: visible only on large screens */}
        <div className="absolute top-5 left-full bg-pink-100 lg:w-[700px] p-10 rounded-md transform -translate-x-20 translate-y-4 shadow-lg hidden lg:block">
          <h2 className="text-3xl font-bold mb-4">The Hunch Story</h2>
          <p className="text-gray-700 text-md leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Rhoncus quam nunc habitant et urna arcu. Ut gravida magna nec at egestas pellentesque diam. Enim mattis facilisis egestas amet. Volutpat hendrerit mauris id ultrices. Ligula sit turpis in ornare non.
            <br />
            Lorem ipsum dolor sit amet consectetur. Rhoncus quam nunc habitant et urna arcu. Ut gravida magna nec at egestas pellentesque diam. Enim mattis facilisis egestas amet. Volutpat hendrerit mauris id ultrices. Ligula sit turpis in ornare non.
            <br />
            Lorem ipsum dolor sit amet consectetur. Rhoncus quam nunc habitant et urna arcu. Ut gravida magna nec at egestas pellentesque diam. Enim mattis facilisis egestas amet. Volutpat hendrerit mauris id ultrices. Ligula sit turpis in ornare non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veniam voluptatibus velit deserunt omnis beatae eos ipsam earum qui dolor sapiente dignissimos provident, minima reprehenderit in sunt quis? Assumenda, tempora. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

         
        <div className="bg-pink-100 md:w-[500px] p-10 rounded-md transform -translate-x-10 translate-y-4 shadow-lg block lg:hidden">
          <h2 className="text-3xl font-bold mb-4">The Hunch Story</h2>
          <p className="text-gray-700 text-md leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Rhoncus quam nunc habitant et urna arcu. Ut gravida magna nec at egestas pellentesque diam. Enim mattis facilisis egestas amet. Volutpat hendrerit mauris id ultrices. Ligula sit turpis in ornare non.
            <br />
            Lorem ipsum dolor sit amet consectetur. Rhoncus quam nunc habitant et urna arcu. Ut gravida magna nec at egestas pellentesque diam. Enim mattis facilisis egestas amet. Volutpat hendrerit mauris id ultrices. Ligula sit turpis in ornare non.
            <br />
            Lorem ipsum dolor sit amet consectetur. Rhoncus quam nunc habitant et urna arcu. Ut gravida magna nec at egestas pellentesque diam. Enim mattis facilisis egestas amet. Volutpat hendrerit mauris id ultrices. Ligula sit turpis in ornare non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veniam voluptatibus velit deserunt omnis beatae eos ipsam earum qui dolor sapiente dignissimos provident, minima reprehenderit in sunt quis? Assumenda, tempora. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
