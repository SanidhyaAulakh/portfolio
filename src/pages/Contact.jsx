import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_xclr3kr", // e.g. service_xxx
        "template_m851vs1", // e.g. template_xxx
        formData,
        "rK3hVqyitt82k7rJT" // e.g. user_xxx or public key
      )
      .then(
        () => {
          setStatus("SUCCESS");
          setFormData({ from_name: "", reply_to: "", message: "" });
        },
        () => {
          setStatus("FAILED");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-8">Feel free to reach out using the form below.</p>
        <form onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            value={formData.from_name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 outline-none"
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            required
            value={formData.reply_to}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 h-32 rounded bg-gray-100 dark:bg-gray-800 outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
          >
            Send Message
          </button>
        </form>

        {status === "SUCCESS" && (
          <p className="text-green-500 mt-4">Message sent successfully!</p>
        )}
        {status === "FAILED" && (
          <p className="text-red-500 mt-4">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
