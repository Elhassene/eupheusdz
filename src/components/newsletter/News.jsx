import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
    const [sub, setSub] = useState('');
    const [trigger, setTrigger] = useState(false); // State to trigger useEffect
    const fetchUrl = 'https://marine-dragonfly-e-learning-00af8488.koyeb.app/api/news';

    useEffect(() => {
        if (trigger) {
            async function getSub() {
                try {
                    const request = await axios.post(fetchUrl, {
                        email: sub
                    });
                    console.log('Subscription successful:', request.data);
                } catch (error) {
                    console.error('Error sending email:', error);
                } finally {
                    setTrigger(false); // Reset the trigger
                }
            }
            getSub();
        }
    }, [trigger, sub]);

    const handleSubscribe = () => {
        setTrigger(true);
    };

    return (
        <div className="relative p-8 pb-20 md:pb-28 md:p-16 mt-64 md:mt-0 z-0">
            <div className="relative max-w-lg mx-auto bg-blue-800 p-6 rounded-lg shadow-lg z-10">
                <div className="absolute top-0 left-0 w-16 h-16 bg-green-500 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-green-500 transform translate-x-1/2 translate-y-1/2 rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Subscribe To Get Updated About New Courses</h2>
                <p className="text-white mb-6">Stay updated with the latest insights and exclusive offers. Subscribe to our newsletter and never miss out on new learning opportunities!</p>
                <div className="flex flex-col md:flex-row">
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="flex-grow p-3 border border-gray-300 rounded-t-lg md:rounded-l-lg md:rounded-t-none focus:outline-none"
                        value={sub}
                        onChange={(e) => setSub(e.target.value)}
                    />
                    <button
                        className="bg-green-500 text-white px-6 py-3 rounded-b-lg md:rounded-r-lg md:rounded-b-none font-semibold shadow-lg hover:bg-green-600 transition duration-300 mt-4 md:mt-0"
                        onClick={handleSubscribe}
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default News;
