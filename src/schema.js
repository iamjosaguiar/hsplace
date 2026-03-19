export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": "https://hsplace.com.au/#hairsalon",
  "name": "H's Place Hair Studio",
  "alternateName": "HS Place",
  "description": "Melton's award-winning blonde and balayage specialists since 2004. Keune master colourists, precision cutting and hair extensions.",
  "url": "https://hsplace.com.au",
  "telephone": "+61397469001",
  "email": "Hsplace0@gmail.com",
  "image": "https://hsplace.com.au/logo.png",
  "logo": "https://hsplace.com.au/logo.png",
  "foundingDate": "2004",
  "priceRange": "$$",
  "currenciesAccepted": "AUD",
  "paymentAccepted": "Cash, Credit Card, EFTPOS, Afterpay, Zippay",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "41 McKenzie St",
    "addressLocality": "Melton",
    "addressRegion": "VIC",
    "postalCode": "3337",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -37.6839,
    "longitude": 144.5800
  },
  "hasMap": "https://maps.google.com/?q=41+McKenzie+St+Melton+VIC+3337",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday"],
      "opens": "09:00",
      "closes": "17:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Thursday", "Friday"],
      "opens": "09:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/HsPlaceHairStudio",
    "https://www.instagram.com/hsplacehairstudio",
    "https://www.tiktok.com/@hs.place.hair.stu"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Melton",
      "containedInPlace": {
        "@type": "State",
        "name": "Victoria",
        "containedInPlace": { "@type": "Country", "name": "Australia" }
      }
    },
    { "@type": "City", "name": "Melton South" },
    { "@type": "City", "name": "Melton West" },
    { "@type": "City", "name": "Brookfield" },
    { "@type": "City", "name": "Kurunjang" },
    { "@type": "City", "name": "Bacchus Marsh" },
    { "@type": "City", "name": "Caroline Springs" },
    { "@type": "City", "name": "Hillside" }
  ],
  "knowsAbout": [
    "Balayage", "Blonde Hair Specialist", "Hair Colouring",
    "Keune Hair Colour", "Hair Extensions", "Precision Hair Cutting", "Hair Styling"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Cut & Styling Services",
        "description": "Precision cuts, blow-dries and special occasion styling by advanced cutting specialists."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Hair Colour",
        "description": "Balayage, foils, toning and creative colour by Keune master colourists. Blonde and balayage specialists."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Hair Extensions",
        "description": "Premium hair extension services with a range of application methods."
      }
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "149",
    "reviewCount": "149"
  },
  "review": [
    { "@type": "Review", "author": { "@type": "Person", "name": "Emma" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "All the girls at H's Place are fantastic, very welcoming, helpful, and honest. Highly recommend the salon, had great experience from day one and wouldn't go anywhere else." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Nicole" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "It was one of the best salon experiences I've ever had! I left feeling so confident and proud of my hair!" },
    { "@type": "Review", "author": { "@type": "Person", "name": "Maxine" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Great morning in the salon with the girls! Loving my hair colour & had an amazing facial. The girls are AWESOME at H's, very professional and friendly." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Michelle Grey" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Absolutely love my blonde hair!! I finally got what I have been trying to get for years thanks to Hayleigh. Do yourself a favour if you want a clean looking blonde you must go to this salon." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Rachael" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "I will highly recommend H's Place to anyone wanting great professional service." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Jade Green" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "5 stars all the way! The most amazing team I've ever seen in a hair salon. They really go above and beyond for you." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Heather" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "My experience was amazing! Walked out feeling like a million dollars thanks to Aimee and her amazing massage!" },
    { "@type": "Review", "author": { "@type": "Person", "name": "Nicole B." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "THANK GOD I found H's Place. Thanks to Hayleigh I got what I wanted. She was really honest. I highly recommend this salon." }
  ]
}

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "H's Place Hair Studio",
  "url": "https://hsplace.com.au",
  "potentialAction": {
    "@type": "ReserveAction",
    "target": "https://apps.kitomba.com/bookings/hsplace",
    "name": "Book Online"
  }
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

export const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "H's Place Hair Studio Gallery",
  "description": "Hair transformations by H's Place Hair Studio in Melton — balayage, blonde specialist, colour, cutting and extensions.",
  "url": "https://hsplace.com.au/gallery",
  "about": { "@id": "https://hsplace.com.au/#hairsalon" }
}

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact H's Place Hair Studio",
  "description": "Get in touch with H's Place Hair Studio in Melton. Call (03) 9746 9001 or visit us at 41 McKenzie St, Melton VIC 3337.",
  "url": "https://hsplace.com.au/contact",
  "mainEntity": { "@id": "https://hsplace.com.au/#hairsalon" }
}

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About H's Place Hair Studio",
  "description": "Learn about Melton's award-winning hair salon, established in 2004. Keune master colourists and advanced cutting specialists.",
  "url": "https://hsplace.com.au/about",
  "mainEntity": { "@id": "https://hsplace.com.au/#hairsalon" }
}
