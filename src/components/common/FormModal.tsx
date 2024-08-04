import React, { useState } from "react";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const googleScriptURL =
      "https://script.google.com/macros/s/1-kxnzgZuMb1uoU_0dkLc0dHTtcl02pf4j_4eNnlPsFJATDAFonwMUbZh/exec"; // Replace with your Google Apps Script URL

    try {
      const response = await fetch(googleScriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        onClose(); // Close modal after submission
      } else {
        const errorData = await response.json();
        alert(
          `Error: ${
            errorData.message || "There was an error submitting the form."
          }`
        );
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error submitting the form.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white text-black-950 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-black bg-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-black bg-white"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-black bg-white"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-black bg-white"
            rows={4}
            required
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 p-2 bg-gray-300 text-black"
            >
              Cancel
            </button>
            <button type="submit" className="p-2 bg-black-950 text-white">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
