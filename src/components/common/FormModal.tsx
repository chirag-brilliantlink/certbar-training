import React, { useEffect, useState } from "react";
import GradientButton from "./gradientButton";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const zapierWebhookUrl =
      "https://hooks.zapier.com/hooks/catch/19685113/2uvuyw6/"; // Replace with your actual Zapier webhook URL

    try {
      const response = await fetch(zapierWebhookUrl, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        onClose(); // Close modal after submission
      } else {
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error submitting the form.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black-950 bg-opacity-80 z-50">
      <div className="bg-white text-black-950 p-6 rounded-lg shadow-lg w-full max-w-lg mx-[10px]">
        <h2 className="text-2xl mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-black bg-white rounded-xl"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-black bg-white rounded-xl"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-black bg-white rounded-xl"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-black bg-white rounded-xl"
            rows={4}
            required
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 py-1 md:py-2 px-4 bg-white border-[1px] border-[#054ADA] text-black-950 rounded-xl text-[12px] md:text-[16px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="mr-4 py-1 md:py-2 px-4 bg-[#054ADA]  text-white rounded-xl text-[12px] md:text-[16px]"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
