import React from 'react';

export default function StructuredData() {
    const organizationData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Najem Aleen Shipping',
        url: 'https://www.najemaleen.com',
        logo: 'https://www.najemaleen.com/najem_favicon.png',
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
            addressCountry: 'AE', // Fixed: Using ISO country code instead of "UAE"
            addressLocality: 'Dubai',
            streetAddress: 'Al Qouz Industrial Area', // Added street address
        },
        description: 'Comprehensive logistics services across all emirates in the UAE including Dubai, Abu Dhabi, and Sharjah, offering container shipping, freight forwarding, customs clearance and car transportation',
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
        image: 'https://www.najemaleen.com/op-logo.png',
        '@id': 'https://www.najemaleen.com',
        url: 'https://www.najemaleen.com',
        telephone: '+97142579791',
        mobilePhone: ['+971549968487'],
        email: 'sales@najemaleen.com',
        priceRange: '$$-$$$', // Added price range indicator
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'AE',
            addressLocality: 'Dubai',
            streetAddress: 'Al Qusais Industrial Area',
            postalCode: '00000',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 25.289367563662932,
            longitude: 55.385428345978006
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
                closes: '15:00',
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
                        description: 'Efficient container shipping services for businesses with large-scale logistics needs throughout the UAE, including Dubai, Abu Dhabi, and Sharjah, as well as international destinations.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Freight Forwarding',
                        description: 'Expert consolidation services for import/export throughout all emirates in the UAE, ensuring efficient handling of your cargo with complete management of logistics operations.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Customs Clearance',
                        description: 'Comprehensive customs clearance solutions for ports and airports in Dubai, Abu Dhabi, and Sharjah, managing documentation, duty assessments, and ensuring regulatory compliance.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Car Transportation',
                        description: 'Specialized vehicle shipping services for exporting and importing cars to and from all UAE emirates, including Dubai, Abu Dhabi, and Sharjah, with full documentation, customs clearance, and secure transportation.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Packaging & Repackaging',
                        description: 'Professional packing services for fragile items, retail packaging, and shipment consolidation, using specialized materials and techniques for safe transit.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Warehousing Solutions',
                        description: 'Secure storage facilities in Dubai offering short and long-term options, including general warehousing, temperature-controlled storage, and high-value cargo security.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Shipment Tracking',
                        description: 'Real-time tracking services for all shipments, providing customers with up-to-date information on their cargo location and delivery status.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Shipping Insurance',
                        description: 'Comprehensive insurance options to protect shipments against loss or damage during transit, with streamlined claim procedures.',
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
