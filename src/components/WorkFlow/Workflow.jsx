import { Upload, FileText, Image, Clock, RefreshCcw } from "lucide-react";

const workflow = [
  {
    icon: <Upload className="w-6 h-6" />,
    title: "Send Images",
    desc: "Upload your photos via Drive or Dropbox."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Share Instructions",
    desc: "Tell us your editing style and requirements."
  },
  {
    icon: <Image className="w-6 h-6" />,
    title: "We Edit",
    desc: "We enhance your images professionally."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Fast Delivery",
    desc: "Get edited images within 24 hours."
  },
  {
    icon: <RefreshCcw className="w-6 h-6" />,
    title: "Revisions",
    desc: "We refine until you're satisfied."
  }
];

 function Workflow() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Our Workflow
        </h2>
        
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Simple, fast, and designed for real estate professionals.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {workflow.map((step, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-gray-100 text-gray-800 group-hover:bg-indigo-500 group-hover:text-white transition">
                {step.icon}
              </div>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {step.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Workflow;