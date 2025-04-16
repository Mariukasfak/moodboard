import React from 'react';

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
    logo: string;
    telephone: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      postalCode: string;
      addressCountry: string;
    };
  };
  areaServed: string;
  price?: string;
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  provider,
  areaServed,
  price = "0"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": provider.name,
      "url": provider.url,
      "logo": provider.logo,
      "telephone": provider.telephone,
      "address": {
        "@type": "PostalAddress",
        ...provider.address
      }
    },
    "areaServed": {
      "@type": "City",
      "name": areaServed
    },
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "EUR"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

export default ServiceSchema;