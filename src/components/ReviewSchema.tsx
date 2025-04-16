import React from 'react';

interface Review {
  author: string;
  reviewBody: string;
  reviewRating: number;
  datePublished: string;
}

interface ReviewSchemaProps {
  reviews: Review[];
  itemReviewed: {
    name: string;
    description: string;
    url: string;
  };
}

const ReviewSchema: React.FC<ReviewSchemaProps> = ({ reviews, itemReviewed }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": itemReviewed.name,
    "description": itemReviewed.description,
    "url": itemReviewed.url,
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.reviewBody,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.reviewRating,
        "bestRating": "5"
      },
      "datePublished": review.datePublished
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": (reviews.reduce((acc, review) => acc + review.reviewRating, 0) / reviews.length).toFixed(1),
      "reviewCount": reviews.length.toString()
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

export default ReviewSchema;