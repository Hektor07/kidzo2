"use client"; // Required for hooks
import React, { useState, useEffect } from "react";
import { useTranslation } from "../lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react"; // Import Star icon

// Define the structure for a review
interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
  date: string;
}

const Reviews = () => {
  const { t, locale } = useTranslation();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const [formData, setFormData] = useState({
    name: "",
    rating: 0, // Add rating state
    review: "",
  });
  const [reviews, setReviews] = useState<Review[]>([]); // State to hold reviews
  const [hoverRating, setHoverRating] = useState(0); // State for star hover effect

  // --- Mock Review Data & Local Storage --- 
  // In a real application, you would fetch/post reviews from/to a backend API.
  // For this example, we'll use local storage to persist reviews temporarily.

  useEffect(() => {
    // Load reviews from local storage on component mount
    const storedReviews = localStorage.getItem("kidzoReviews");
    if (storedReviews) {
      try {
        setReviews(JSON.parse(storedReviews));
      } catch (error) {
        console.error("Error parsing reviews from local storage:", error);
        localStorage.removeItem("kidzoReviews"); // Clear invalid data
      }
    }
  }, []);

  const saveReviewsToLocalStorage = (updatedReviews: Review[]) => {
    localStorage.setItem("kidzoReviews", JSON.stringify(updatedReviews));
  };
  // --- End Mock Data & Local Storage ---

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (newRating: number) => {
    setFormData({ ...formData, rating: newRating });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rating === 0 || !formData.name || !formData.review) {
        alert(t("reviews.validationError")); // Add a validation message key
        return;
    }
    // Create new review object
    const newReview: Review = {
        id: Date.now(), // Simple unique ID
        name: formData.name,
        rating: formData.rating,
        review: formData.review,
        date: new Date().toLocaleDateString(),
    };

    // Add review to the list and save to local storage
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    saveReviewsToLocalStorage(updatedReviews);

    alert(t("reviews.submitSuccess"));
    // Reset form
    setFormData({ name: "", rating: 0, review: "" });
    setHoverRating(0);
  };

  return (
    <section id="reviews" className="py-16 bg-orange-50" dir={dir}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-4">{t("reviews.title")}</h2>
        <p className="text-lg text-center text-gray-600 mb-8">{t("reviews.subtitle")}</p>

        {/* Review Submission Form */}
        <Card className="max-w-lg mx-auto mb-12">
          <CardHeader>
            <CardTitle className="text-center text-xl text-orange-500">{t("reviews.formTitle")}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">{t("reviews.nameLabel")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("reviews.namePlaceholder")}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Rating Input */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">{t("reviews.ratingLabel")}</label>
                <div className="flex space-x-1" dir="ltr"> {/* Force LTR for stars */}
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`cursor-pointer h-6 w-6 ${ (hoverRating >= star || formData.rating >= star) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      onClick={() => handleRatingChange(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="review" className="block text-gray-700 font-bold mb-2">{t("reviews.reviewLabel")}</label>
                <textarea
                  id="review"
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                  placeholder={t("reviews.reviewPlaceholder")}
                  rows={4}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                  {t("reviews.submitButton")}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Display Reviews Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-orange-600 mb-6">{t("reviews.displayTitle")}</h3>
          {reviews.length > 0 ? (
            <div className="space-y-6">
              {reviews.slice().reverse().map((review) => ( // Display newest first
                <Card key={review.id} className="bg-white shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-semibold text-gray-800">{review.name}</CardTitle>
                      <div className="flex items-center space-x-1" dir="ltr"> {/* Force LTR for stars */}
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-5 w-5 ${ star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{review.review}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">{t("reviews.noReviews")}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

