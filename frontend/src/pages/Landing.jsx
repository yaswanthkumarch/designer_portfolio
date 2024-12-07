import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const LandingPage = () => {
    const images = [
        'https://images.squarespace-cdn.com/content/v1/62a5da76d667412c7bef9ac3/9de89528-2a2e-4215-be95-1c485e7d6686/Apartment+3+at+Kessaku+Phoenix-1.jpeg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/62a5da76d667412c7bef9ac3/7a5b9e74-0cfa-441c-85f1-dca8f1da356a/Apt1+Kessaku+Phoenix-3.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/62a5da76d667412c7bef9ac3/3696d989-2bd4-4c4f-b0b2-91c4bf3ea19e/Kemwell+Bio+Pharma+Workplace+-15.jpg?format=2500w',
    ];

    const cards = [
        {
            title: 'Card 1',
            description: 'Description of card 1.',
        },
        {
            title: 'Card 2',
            description: 'Description of card 2.',
        },
        {
            title: 'Card 3',
            description: 'Description of card 3.',
        },
        {
            title: 'Card 4',
            description: 'Description of card 4.',
        },
        {
            title: 'Card 5',
            description: 'Description of card 5.',
        },
    ];

    return (
        <div className="bg-gray-100">
            {/* Full Screen Image Slider */}
            <div className="w-full h-screen overflow-hidden">
                <Swiper
                    loop={true}
                    autoplay={{ delay: 3500 }}
                    className="h-full"
                    modules={[Autoplay]}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="h-full bg-cover bg-center rounded-lg"
                                style={{ backgroundImage: `url(${image})`}}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Content Section */}
            <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-4xl mx-auto text-left">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                        Welcome to Our Landing Page
                    </h2>
                    <p className="text-lg text-gray-600">
                        Line 1: Create memorable experiences for your users.
                    </p>
                    <p className="text-lg text-gray-600">
                        Line 2: Deliver high-quality content and visuals.
                    </p>
                    <p className="text-lg text-gray-600">
                        Line 3: Engage your audience effectively.
                    </p>
                    <p className="text-lg text-gray-600">
                        Line 4: Transform ideas into reality with us.
                    </p>
                    <p className="text-lg text-gray-600">
                        Line 5: Stay connected with the latest updates.
                    </p>
                </div>
            </section>

            {/* Card Slider */}
            <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-100">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600">{card.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    );
};

export default LandingPage;
