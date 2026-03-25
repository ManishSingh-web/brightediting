import { motion, AnimatePresence } from "framer-motion";

const SuccessPopup = ({ show, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center max-w-sm w-full shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-3 text-green-600">
              Message Sent!
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Thank you for contacting Bright Editing. We will reply shortly.
            </p>

            <button
              onClick={onClose}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessPopup;