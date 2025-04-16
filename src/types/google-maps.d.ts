declare namespace google {
  namespace maps {
    class PlacesService {
      constructor(attrContainer: HTMLElement);
      getDetails(
        request: {
          placeId: string;
          fields: string[];
        },
        callback: (
          place: {
            reviews?: {
              author_name: string;
              profile_photo_url: string;
              rating: number;
              relative_time_description: string;
              text: string;
              time: number;
            }[];
            rating?: number;
          } | null,
          status: string
        ) => void
      ): void;
    }
    namespace places {
      const PlacesServiceStatus: {
        OK: string;
        ERROR: string;
        INVALID_REQUEST: string;
        NOT_FOUND: string;
        OVER_QUERY_LIMIT: string;
        REQUEST_DENIED: string;
        UNKNOWN_ERROR: string;
        ZERO_RESULTS: string;
      };
    }
  }
}