import { motion } from "framer-motion";
import "@/styles/page-heading.scss";
interface PageHeadingProps {
  title: string;
  description: string;
}


const PageHeading = ({title, description}: PageHeadingProps) => {
  return (
    <motion.div 
      className="flex-col gap-16 items-center justify-center | page-heading-container"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="page-heading-title">{title}</h2>
      <p className="page-heading-description">{description}</p>
    </motion.div>
  )
}

export default PageHeading