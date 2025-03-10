"use client";

import { useState } from "react";
import { Check, Send, AlertCircle } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    trxId: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "অবশ্যই নাম দিতে হবে।";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "অবশ্যই মোবাইল নাম্বার দিতে হবে।";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "সঠিক নাম্বার দাও (১০-১৫ ডিজিটের মধ্যে)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("আবশ্যিক তথ্যগুলা পূরণ করো।");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("সাবমিট হয়েছে।");
        setFormData({ name: "", phone: "", trxId: "", message: "" });
        setTouched({});
      } else {
        toast.error(result.error || "সাবমিট হয়নি।");
      }
    } catch (error) {
      toast.error("কিছু সমস্যা হইছে।");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <Toaster position="top-center" reverseOrder={false} />

      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
        তোমার তথ্য জমা দাও।
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="তোমার নাম *"
            required
            className={`w-full p-4 border bg-gray-50 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition ${
              touched.name && errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {touched.name && errors.name && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle size={14} className="mr-1" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone Number Field */}
        <div className="relative">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="মোবাইল নাম্বার দাও *"
            required
            className={`w-full p-4 border bg-gray-50 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition ${
              touched.phone && errors.phone
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {touched.phone && errors.phone && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle size={14} className="mr-1" />
              {errors.phone}
            </p>
          )}
        </div>

        {/* Transaction ID (Optional) */}
        <div className="relative">
          <input
            type="text"
            name="trxId"
            value={formData.trxId}
            onChange={handleChange}
            placeholder="ট্রান্সজেকশন আইডি (Optional)"
            className="w-full p-4 border bg-gray-50 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition border-gray-300"
          />
        </div>

        {/* Message (Optional) */}
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="তোমার মতামত/পরামর্শ (Optional)"
            className="w-full p-4 border bg-gray-50 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition border-gray-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center gap-2 p-4 rounded-lg text-white text-lg font-medium transition ${
            isSubmitting
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gray-800 hover:bg-gray-900"
          }`}
        >
          {isSubmitting ? <Check size={20} /> : <Send size={20} />}
          {isSubmitting ? " সাবমিটেড" : " সাবমিট করো"}
        </button>
      </form>
    </div>
  );
}
