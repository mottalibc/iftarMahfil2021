"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react"; // Import icons

export default function CopyPhoneNumber() {
  const [copiedNumber, setCopiedNumber] = useState(null);

  const handleCopy = async (number) => {
    try {
      await navigator.clipboard.writeText(number);
      setCopiedNumber(number);
      setTimeout(() => setCopiedNumber(null), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const phoneNumbers = [
    { label: "বিকাশ (পার্সনাল)", number: "01870463513" },
    { label: "নগদ (পার্সনাল)", number: "01855745531" },
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      {phoneNumbers.map(({ label, number }) => (
        <div key={number} className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-gray-600">{label}</span>
          <button
            onClick={() => handleCopy(number)}
            className="flex items-center justify-around w-full border-[1px] px-1 py-1 rounded hover:bg-gray-200 transition"
          >
            <span className="text-lg font-medium">{number}</span>
            {copiedNumber === number ? (
              <Check size={20} className="text-green-600" />
            ) : (
              <Copy size={20} />
            )}
          </button>
        </div>
      ))}
    </div>
  );
}
