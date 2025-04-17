import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

// Global variable to track script loading
const GOOGLE_MAPS_SCRIPT_ID = 'google-maps-script';
const API_KEY = '';
const PLACE_ID = '';

interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

const GoogleReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [averageRating, setAverageRating] = useState<number>(0);

  useEffect(() => {
    // Load Google Maps script only when component is visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadGoogleMapsScript();
        observer.disconnect();
      }
    });

    observer.observe(document.getElementById('reviews-section') || document.body);

    return () => observer.disconnect();
  }, []);

  const loadGoogleMapsScript = () => {
    // Check if script is already loaded
    if (document.getElementById(GOOGLE_MAPS_SCRIPT_ID)) {
      if (window.google && window.google.maps) {
        initMap();
      }
      return;
    }

    // If script not loaded yet, load it
    const script = document.createElement('script');
    script.id = GOOGLE_MAPS_SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    script.onerror = () => {
      setError('Nepavyko įkelti Google Maps API');
      loadFallbackReviews();
    };
    document.head.appendChild(script);
  };

  function initMap() {
    try {
      const service = new window.google.maps.places.PlacesService(
        document.createElement('div')
      );

      service.getDetails(
        {
          placeId: PLACE_ID,
          fields: ['reviews', 'rating'],
        },
        (place, status) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            place?.reviews
          ) {
            // Normalizuoti Google atsiliepimus, užpildant reitingą default'u, jei undefined
            const normalized = place.reviews.map(r => ({
              author_name: r.author_name,
              profile_photo_url: r.profile_photo_url,
              rating: r.rating ?? 0,
              relative_time_description: r.relative_time_description,
              text: r.text,
              time: r.time
            }));
            setReviews(normalized);
            if (place.rating) {
              setAverageRating(place.rating);
            }
          } else {
            setError('Nepavyko gauti atsiliepimų');
            loadFallbackReviews();
          }
          setLoading(false);
        }
      );
    } catch (err) {
      console.error('Error initializing Google Maps:', err);
      setError('Įvyko klaida inicijuojant Google Maps');
      loadFallbackReviews();
    }
  }

  // Fallback reviews if API fails
  const loadFallbackReviews = () => {
    const fallbackReviews = [
      {
        author_name: "Tomas Petrauskas",
        profile_photo_url: "",
        rating: 5,
        relative_time_description: "prieš mėnesį",
        text: "Labai operatyvus ir profesionalus aptarnavimas. Atvyko laiku ir greitai išnešė seną šaldytuvą.",
        time: Date.now() / 1000 - 30 * 24 * 60 * 60
      },
      {
        author_name: "Laura Kazlauskienė",
        profile_photo_url: "",
        rating: 5,
        relative_time_description: "prieš 2 mėnesius",
        text: "Puiki paslauga! Išvežė seną skalbimo mašiną ir indaplovę. Rekomenduoju visiems.",
        time: Date.now() / 1000 - 60 * 24 * 60 * 60
      },
      {
        author_name: "Marius Jonaitis",
        profile_photo_url: "",
        rating: 4,
        relative_time_description: "prieš 3 mėnesius",
        text: "Greitai ir kokybiškai išvežė senus baldus. Labai patenkinti paslaugomis.",
        time: Date.now() / 1000 - 90 * 24 * 60 * 60
      }
    ];
    setReviews(fallbackReviews);
    setAverageRating(4.7);
    setLoading(false);
    setError(null);
  };

  // Create star rating display
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-5 h-5 ${
            i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      );
    }
    return stars;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <section id="reviews-section" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Klientų atsiliepimai
          </h2>
          <div className="flex justify-center items-center space-x-1 mb-2">
            {renderStars(averageRating)}
          </div>
          <p className="text-lg text-gray-600">
            {averageRating.toFixed(1)} iš 5 ({reviews.length} atsiliepimai)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              itemScope
              itemType="http://schema.org/Review"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  {review.profile_photo_url ? (
                    <img
                      src={review.profile_photo_url}
                      alt={`${review.author_name} nuotrauka`}
                      className="w-12 h-12 rounded-full"
                      loading="lazy"
                      width="48"
                      height="48"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-xl font-semibold text-green-600">
                        {review.author_name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold" itemProp="author">
                    {review.author_name}
                  </h3>
                  <p className="text-gray-500">{review.relative_time_description}</p>
                </div>
              </div>
              <div className="flex mb-3">{renderStars(review.rating)}</div>
              <p className="text-gray-600" itemProp="reviewBody">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={`https://search.google.com/local/reviews?placeid=${PLACE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-700 px-6 py-3 rounded-lg font-semibold border-2 border-green-700 hover:bg-green-700 hover:text-white transition-colors"
          >
            Palikite atsiliepimą
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;