import React from 'react';

export default function StructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Najem Aleen Shipping',
    url: 'https://najemaleen.com',
    logo: 'https://najemaleen.com/najem_favicon.png',
    sameAs: [
      // Add your social media profiles here if any
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+97142579791',
        contactType: 'customer service',
        email: 'sales@najemaleen.com',
        areaServed: 'UAE',
        availableLanguage: ['English', 'Arabic'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+971549968487', // Mobile number
        contactType: 'sales',
        email: 'sales@najemaleen.com',
        areaServed: 'UAE',
        availableLanguage: ['English', 'Arabic'],
      },

    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UAE',
      addressLocality: 'Dubai',
    },
    description: 'Comprehensive logistics services in the UAE including container shipping, freight forwarding, customs clearance and car transportation',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 25.289367563662932,
        longitude: 55.385428345978006
      },
      geoRadius: '100000',
    },
  };

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Najem Aleen Shipping',
    image: 'https://najemaleen.com/op-logo.png',
    '@id': 'https://najemaleen.com',
    url: 'https://najemaleen.com',
    telephone: '+97142579791',
    mobilePhone: ['+971549968487'], // Added mobile numbers
    email: 'sales@najemaleen.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UAE',
      addressLocality: 'Dubai',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '15:00', // Updated Saturday closing time to 3pm
      }
    ],
  };

  const servicesData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Logistics Services',
    provider: {
      '@type': 'Organization',
      name: 'Najem Aleen Shipping',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Shipping Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Container Shipping',
            description: 'Efficient container shipping services for businesses with large-scale logistics needs',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Freight Forwarding',
            description: 'Expert consolidation services for import/export, ensuring efficient handling of your cargo',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Customs Clearance',
            description: 'Comprehensive customs clearance solutions to streamline your shipping process',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Car Transportation',
            description: 'Worldwide car transport services with all necessary paperwork handled for you',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Packaging & Repackaging',
            description: 'Repackaging services to ensure your goods are secure and compliant with shipping standards',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesData) }}
      />
    </>
  );
}
