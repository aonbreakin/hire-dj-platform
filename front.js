import React, { useState } from 'react';
import { Search, Star, Calendar, MapPin, Music, Wallet, Check, ChevronRight, Play, Users, Shield } from 'lucide-react';

const DJBookingPlatform = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedDJ, setSelectedDJ] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    venue: '',
    location: '',
    notes: '',
    paymentMethod: 'crypto'
  });

  const djs = [
    {
      id: 1,
      name: "DJ Neon",
      genre: ["House", "Techno"],
      rate: 150,
      rating: 4.9,
      verified: true,
      image: "/api/placeholder/150/150",
      location: "Miami, FL",
      equipment: ["Pioneer DDJ", "Speakers", "Lighting"],
      bio: "10+ years experience, played at Ultra Music Festival",
      bookings: 234
    },
    {
      id: 2,
      name: "Luna Beats",
      genre: ["Hip-Hop", "R&B"],
      rate: 125,
      rating: 4.8,
      verified: true,
      image: "/api/placeholder/150/150",
      location: "Los Angeles, CA",
      equipment: ["Serato", "Custom Light Show"],
      bio: "Award-winning DJ specializing in party vibes",
      bookings: 189
    },
    {
      id: 3,
      name: "Voltage",
      genre: ["EDM", "Dubstep"],
      rate: 200,
      rating: 4.9,
      verified: true,
      image: "/api/placeholder/150/150",
      location: "Las Vegas, NV",
      equipment: ["Traktor", "Laser Setup", "Fog Machine"],
      bio: "Festival headliner with massive sound systems",
      bookings: 156
    }
  ];

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <nav className="flex items-center justify-between p-6 text-white">
        <div className="text-2xl font-bold">🎧 BeatConnect</div>
        <div className="space-x-4">
          <button className="px-4 py-2 border border-white/30 rounded-lg hover:bg-white/10 transition-all">
            Login
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center px-6 py-20 text-white">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Hire Top DJs for Your Venue
        </h1>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Fast & Secure booking with Web3 smart contracts. Zero disputes, instant payments.
        </p>
        <div className="space-x-6">
          <button 
            onClick={() => setCurrentView('browse')}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all"
          >
            Find a DJ
          </button>
          <button className="px-8 py-4 border border-white/30 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all">
            Become a DJ
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 px-6 py-16 max-w-6xl mx-auto">
        <div className="text-center p-8 bg-white/10 backdrop-blur rounded-2xl border border-white/20">
          <Shield className="w-12 h-12 mx-auto mb-4 text-green-400" />
          <h3 className="text-xl font-semibold mb-2 text-white">Smart Contract Escrow</h3>
          <p className="text-gray-300">Payments held securely until gig completion</p>
        </div>
        <div className="text-center p-8 bg-white/10 backdrop-blur rounded-2xl border border-white/20">
          <Wallet className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-semibold mb-2 text-white">Crypto & Fiat</h3>
          <p className="text-gray-300">Pay with USDC, ETH or traditional methods</p>
        </div>
        <div className="text-center p-8 bg-white/10 backdrop-blur rounded-2xl border border-white/20">
          <Star className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
          <h3 className="text-xl font-semibold mb-2 text-white">Verified DJs</h3>
          <p className="text-gray-300">KYC verified professionals with proven track records</p>
        </div>
      </div>

      {/* Trending DJs */}
      <div className="px-6 py-16 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Trending DJs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {djs.slice(0, 3).map(dj => (
              <div key={dj.id} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                   onClick={() => {setSelectedDJ(dj); setCurrentView('profile');}}>
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-center text-white mb-2">{dj.name}</h3>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-gray-300">{dj.rating}</span>
                </div>
                <p className="text-center text-gray-300">${dj.rate}/hour</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const BrowsePage = () => (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm p-4">
        <button onClick={() => setCurrentView('home')} className="text-purple-600 hover:text-purple-800">
          ← Back to Home
        </button>
      </nav>
      
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Browse DJs</h1>
        
        {/* Search Bar */}
        <div className="mb-8 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by genre, location, or DJ name..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Search
          </button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Genre</h3>
              <div className="space-y-2">
                {["House", "Techno", "Hip-Hop", "EDM", "R&B"].map(genre => (
                  <label key={genre} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>{genre}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Price Range</h3>
              <input type="range" min="50" max="500" className="w-full" />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>$50</span>
                <span>$500</span>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="lg:col-span-3 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {djs.map(dj => (
              <div key={dj.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-all cursor-pointer"
                   onClick={() => {setSelectedDJ(dj); setCurrentView('profile');}}>
                <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-lg"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{dj.name}</h3>
                    {dj.verified && <Check className="w-5 h-5 text-green-500" />}
                  </div>
                  <p className="text-gray-600 mb-2">{dj.genre.join(", ")}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm text-gray-600">{dj.rating} ({dj.bookings} bookings)</span>
                    </div>
                    <div className="text-lg font-semibold text-purple-600">${dj.rate}/hr</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ProfilePage = () => (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm p-4">
        <button onClick={() => setCurrentView('browse')} className="text-purple-600 hover:text-purple-800">
          ← Back to Browse
        </button>
      </nav>

      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-white/20 rounded-full"></div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-3xl font-bold">{selectedDJ?.name}</h1>
                {selectedDJ?.verified && <Check className="w-6 h-6 text-green-300" />}
              </div>
              <p className="text-lg opacity-90">{selectedDJ?.bio}</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-300 fill-current mr-1" />
                  <span>{selectedDJ?.rating} rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-1" />
                  <span>{selectedDJ?.bookings} bookings</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-1" />
                  <span>{selectedDJ?.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Overview</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Genres</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedDJ?.genre.map(g => (
                      <span key={g} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">{g}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Equipment</h3>
                  <div className="space-y-1">
                    {selectedDJ?.equipment.map(eq => (
                      <div key={eq} className="text-gray-600">• {eq}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Tracks */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Sample Tracks</h2>
              <div className="space-y-3">
                {["Summer House Mix 2024", "Club Anthem Set", "Deep Techno Journey"].map(track => (
                  <div key={track} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span>{track}</span>
                    <button className="flex items-center text-purple-600 hover:text-purple-800">
                      <Play className="w-4 h-4 mr-1" />
                      Play
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="bg-white rounded-lg shadow p-6 h-fit sticky top-6">
            <div className="text-3xl font-bold text-purple-600 mb-4">${selectedDJ?.rate}/hour</div>
            <button 
              onClick={() => {setCurrentView('booking'); setBookingStep(1);}}
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all mb-4"
            >
              Book Now
            </button>
            <div className="text-center text-sm text-gray-500">
              Secured by smart contract escrow
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const BookingFlow = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8">
            {[1,2,3,4].map(step => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step <= bookingStep ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step < bookingStep ? <Check className="w-5 h-5" /> : step}
                </div>
                {step < 4 && <ChevronRight className="w-5 h-5 text-gray-400 mx-2" />}
              </div>
            ))}
          </div>

          {bookingStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Select Date & Time</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                  <input 
                    type="date" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    value={bookingData.date}
                    onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                  <input 
                    type="time" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    value={bookingData.time}
                    onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                  />
                </div>
              </div>
            </div>
          )}

          {bookingStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Event Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Paradise Club"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    value={bookingData.venue}
                    onChange={(e) => setBookingData({...bookingData, venue: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input 
                    type="text" 
                    placeholder="Full address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    value={bookingData.location}
                    onChange={(e) => setBookingData({...bookingData, location: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                  <textarea 
                    placeholder="Any special requirements or notes..."
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    value={bookingData.notes}
                    onChange={(e) => setBookingData({...bookingData, notes: e.target.value})}
                  />
                </div>
              </div>
            </div>
          )}

          {bookingStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="text-lg font-semibold mb-2">Booking Summary</div>
                  <div className="flex justify-between items-center mb-2">
                    <span>DJ: {selectedDJ?.name}</span>
                    <span>${selectedDJ?.rate}/hour</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Estimated Duration: 4 hours</span>
                    <span>${selectedDJ?.rate * 4}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between items-center font-semibold">
                    <span>Total (held in escrow):</span>
                    <span>${selectedDJ?.rate * 4}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input 
                      type="radio" 
                      name="payment"
                      checked={bookingData.paymentMethod === 'crypto'}
                      onChange={() => setBookingData({...bookingData, paymentMethod: 'crypto'})}
                    />
                    <div>
                      <div className="font-semibold">Crypto Payment (USDC/ETH)</div>
                      <div className="text-sm text-gray-600">Pay with cryptocurrency via smart contract</div>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input 
                      type="radio" 
                      name="payment"
                      checked={bookingData.paymentMethod === 'fiat'}
                      onChange={() => setBookingData({...bookingData, paymentMethod: 'fiat'})}
                    />
                    <div>
                      <div className="font-semibold">Credit Card</div>
                      <div className="text-sm text-gray-600">Traditional payment method</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {bookingStep === 4 && (
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
              <p className="text-gray-600 mb-6">
                Your booking with {selectedDJ?.name} is confirmed. Smart contract ID: #BC{Math.floor(Math.random() * 10000)}
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                <div className="font-semibold text-purple-800 mb-2">🎟️ NFT Booking Ticket Generated</div>
                <div className="text-sm text-purple-600">Your unique NFT ticket has been minted and sent to your wallet</div>
              </div>
              <button 
                onClick={() => setCurrentView('home')}
                className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Back to Home
              </button>
            </div>
          )}

          {bookingStep < 4 && (
            <div className="flex justify-between mt-8">
              {bookingStep > 1 && (
                <button 
                  onClick={() => setBookingStep(bookingStep - 1)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Previous
                </button>
              )}
              <button 
                onClick={() => setBookingStep(bookingStep + 1)}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 ml-auto"
              >
                {bookingStep === 3 ? 'Confirm & Pay' : 'Next'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {currentView === 'home' && <HomePage />}
      {currentView === 'browse' && <BrowsePage />}
      {currentView === 'profile' && <ProfilePage />}
      {currentView === 'booking' && <BookingFlow />}
    </div>
  );
};

export default DJBookingPlatform;
