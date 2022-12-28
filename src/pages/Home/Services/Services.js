import React from "react";
import { Box } from "@mui/material";
import { servicesData } from "../../../utils/helper";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <Box className="bg-primary h-auto">
      <Box className="container mx-auto flex flex-col justify-center items-center text-center py-12">
        <h3 className="text-3xl lg:text-5xl text-black font-avenirroman uppercase py-10">
          Services
        </h3>
        <Box className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-12 gap-y-20 md:px-0 px-8 py-8">
          {servicesData.map((item, index) => {
            const { title, description, icon } = item;
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                key={index}
                className="flex flex-col items-center text-center gap-2 px-6 border border-gray-300 py-6 rounded-xl hover:border-primaryRed duration-300"
              >
                <img
                  src={icon}
                  alt="icon"
                  className="h-[100px] w-[100px] bg-transparent"
                />
                <h3 className="text-2xl font-avenirheavy">{title}</h3>
                <p className="text-md font-avenirlight">{description}</p>
              </motion.div>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
