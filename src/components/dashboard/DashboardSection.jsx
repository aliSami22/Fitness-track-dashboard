import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 15, duration: 0.4 },
  },
};

const DashboardSection = ({
  children,
  className = "",
  variants = itemVariants,
}) => {
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
};

export const DashboardHeader = ({ title, subtitle }) => (
  <DashboardSection className="p-10  ">
    <h1 className="text-3xl text-amber-50 font-bold text-foreground/90">
      {title}
    </h1>
    {subtitle && (
      <p className="text-muted-foreground/80 text-amber-50 text-lg">
        {subtitle}
      </p>
    )}
  </DashboardSection>
);

export const DashboardGrid = ({
  children,
  className = "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
}) => {
  return <DashboardSection className={className}>{children}</DashboardSection>;
};

export default DashboardSection;
