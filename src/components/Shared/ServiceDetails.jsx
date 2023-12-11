import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const DetailPage = ({id}) => {
    
    const content = {
        title: 'Sample Title',
        description: 'Sample description goes here.',
        images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
        pricing: '$99.99',
        availability: 'In stock',
        location: '123 Main Street, City',
        contact: 'contact@example.com',
        rating: { rate: 4.5, count: 200 },
        relatedContent: ['Related Item 1', 'Related Item 2', 'Related Item 3'],
        bookingOptions: ['Option 1', 'Option 2', 'Option 3'],
    };

    return (
        <div className="container">
            <h1>{content.title}</h1>
            <p>{content.description}</p>
            <div className="image-gallery">
                {content.images.map((image, index) => (
                    <Image key={index} 
                        width={500}
                        height={500} src={image} alt={`Image ${index + 1}`} />
                ))}
            </div>
            <p>Pricing: {content.pricing}</p>
            <p>Availability: {content.availability}</p>
            <p>Location: {content.location}</p>
            <p>Contact Information: {content.contact}</p>
            <p>
                Rating: {content.rating.rate} ({content.rating.count} reviews)
            </p>
            <h2>Related Content/Services:</h2>
            <ul>
                {content.relatedContent.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h2>Booking Options:</h2>
            <ul>
                {content.bookingOptions.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </div>
    );
};

export default DetailPage;
