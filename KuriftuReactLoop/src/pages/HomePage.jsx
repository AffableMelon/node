import React from 'react';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    };

    const handleSignup = () => {
        navigate('/signup');
    };

    return (
        <div className="min-h-screen bg-black flex flex-col">
  <main className="container mx-auto py-12 flex-grow">
    {/* TIME TO TRAVEL Section */}
    <section className="relative text-center mb-16 py-16 rounded-xl overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <img
      src="/images/kuriftu homepage1.jpg"  // Replace with your image path
      alt="Mountain National Park"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40"></div>  {/* Dark overlay */}
  </div>

  {/* Content */}
  <div className="relative z-10 px-4">
    <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">TIME TO TRAVEL</h1>
    <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
      The book must be read during Mountain National Park in March June 19.
      Appreciation videos can show it a matter and how these people may still receive the account for the course of delivery.
    </p>
  </div>
</section>

    {/* POPULAR TOURS Section */}
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">POPULAR TOURS</h2>
      <p className="text-center text-gray-600 mb-10">There will be a small talk here.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((tour) => (
          <div key={tour} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">TOUR {tour}</h3>
            <p className="text-gray-600">There will be a small description here.</p>
          </div>
        ))}
      </div>
    </section>

    {/* DISCOVER Section */}
    <section className="text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">DISCOVER THE WORLD IN A NEW WAY</h2>
      
      <div className="flex flex-col items-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mb-8 transition-colors">
          WATCH THE VIDEO
        </button>
        
        <div className="max-w-2xl text-left text-gray-700 space-y-4">
          <p>
            Allow you over Monday or Saturday next to the mountains? Just start my vacation soon, 
            and there is adequate time to visit the mountains where you are taken care. You very quiet.
          </p>
          <p className="font-semibold">If I miss holidays!</p>
        </div>
      </div>
    </section>
  </main>
</div>
    );
};

export default HomePage;