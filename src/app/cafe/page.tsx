// /home/ubuntu/kidzo_website/src/src/app/cafe/page.tsx
import Cafe from "@/components/Cafe"; // Assuming Cafe component is in components folder
import React from "react";

const CafePage = () => {
  return (
    <main>
      <Cafe />
      {/* TODO: Add Cafe Menu and other details here later as requested */}
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold text-center text-orange-600 mb-4">Menu Coming Soon!</h3>
        <p className="text-center text-gray-600">We are preparing our delicious menu. Check back soon!</p>
      </div>
    </main>
  );
};

export default CafePage;

