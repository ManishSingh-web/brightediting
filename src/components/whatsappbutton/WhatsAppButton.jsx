import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function WhatsAppButton() {
  const phoneNumber = "919319744830";
  const message = "Hello, I am interested in your photo editing services";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a

      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg animate-bounce hover:animate-none transition z-50"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  );
}

export default WhatsAppButton;