
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of doors do you offer?",
      answer: "We offer a wide range of doors including wooden, laminate-finished, and UPVC doors. Whether you're looking for style, durability, or weather resistance, we've got options to fit every requirement."
    },
    {
      question: "Do you provide kitchen appliances from top brands?",
      answer: "Yes, we stock kitchen appliances from leading brands to ensure quality and reliability for your kitchen needs."
    },
    {
      question: "Can I see the products before buying?",
      answer: "Absolutely! We encourage customers to visit our showroom to see and feel the products before making a purchase decision."
    },
    {
      question: "Do you offer premium and budget-friendly laminate options?",
      answer: "Yes, we offer both premium and budget-friendly laminate options to suit different preferences and budgets."
    },
    {
      question: "How do I get directions to your store?",
      answer: "Our store is located near Hanuman Mandir, Babaganj Pratapgarh, Bela Pratapgarh, Uttar Pradesh 230001. You can contact us for detailed directions."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-600 font-medium mb-2">FREQUENTLY ASKED QUESTIONS</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Common Questions About Our Products & Services</h2>
            <p className="text-gray-600">
              Have questions about our products, services, or store? We've put together some of the most common inquiries from our customers to help you shop confidently at 
              Kesarwani Hardware. If you don't see your question here, feel free to contact us directly — we're always happy to help!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
                  <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-yellow-600 transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-8 text-center">
            <div className="text-6xl font-bold text-yellow-600 opacity-20 mb-4">FAQ</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
