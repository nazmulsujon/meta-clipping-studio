import { pricingData } from "@/lib/constants";
import React from "react";


const Pricing: React.FC = () => {
    return (
        <div className="bg-white px-4 py-12 pt-24 max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center bg-[#15395B] py-6 rounded">
                Following Is Our Starting Rates In USD
            </h2>

            <div className="mt-12 space-y-12">
                {pricingData.map((service) => (
                    <div key={service.id} className="flex items-center justify-between flex-wrap md:flex-nowrap gap-4 border-b pb-6">
                        <img
                            src={service.image}
                            alt={service.name}
                            className="w-32 h-32 object-cover rounded"
                        />
                        <p className="text-xl font-semibold text-[#15395B] flex-1">
                            {service.name}
                        </p>
                        <p className="text-xl font-semibold text-[#15395B]">
                            {service.price}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
