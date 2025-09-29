import React, { useState } from 'react';
import { 
  Users, Music, Store, Calendar, DollarSign, Star, Settings, 
  BarChart3, AlertTriangle, Check, X, Search, Filter, 
  Shield, Wallet, ChevronDown, Eye, Edit, Ban, Play,
  TrendingUp, Activity, Clock, MapPin
} from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedDispute, setSelectedDispute] = useState(null);

  // Mock data
  const stats = {
    totalDJs: { verified: 156, unverified: 23 },
    totalShops: 89,
    activeBookings: 34,
    escrowedFunds: 45620,
    completedBookings: 1247
  };

  const disputes = [
    {
      id: 'DP-001',
      bookingId: 'BC-5432',
      dj: 'DJ Neon',
      shop: 'Paradise Club',
      issue: 'Equipment failure during performance',
      status: 'pending',
      amount: '$600',
      date: '2025-09-18',
      evidence: ['audio_recording.mp3', 'witness_statement.pdf']
    },
    {
      id: 'DP-002',
      bookingId: 'BC-5431',
      dj: 'Luna Beats',
      shop: 'Rooftop Bar',
      issue: 'DJ arrived late, event cut short',
      status: 'investigating',
      amount: '$450',
      date: '2025-09-17',
      evidence: ['timestamp_log.txt', 'photos.zip']
    }
  ];

  const bookings = [
    {
      id: 'BC-5434',
      dj: 'Voltage',
      shop: 'Miami Beach Club',
      date: '2025-09-22',
      status: 'confirmed',
      payment: 'escrowed',
      amount: '$800',
      contractId: '0x742d35...8f41'
    },
    {
      id: 'BC-5433',
      dj: 'DJ Neon',
      shop: 'Downtown Lounge',
      date: '2025-09-21',
      status: 'completed',
      payment: 'released',
      amount: '$600',
      contractId: '0x859a42...7c23'
    }
  ];

  const djs = [
    {
      id: 1,
      stageName: 'DJ Neon',
      fullName: 'Marcus Johnson',
      wallet: '0x742d35Cc8C7f8f41',
      genre: ['House', 'Techno'],
      status: 'verified',
      rating: 4.9,
      bookings: 234,
      location: 'Miami, FL'
    },
    {
      id: 2,
      stageName: 'Luna Beats',
      fullName: 'Sarah Chen',
      wallet: '0x859a42Bb9D8e7c23',
      genre: ['Hip-Hop', 'R&B'],
      status: 'pending',
      rating: 4.8,
      bookings: 189,
      location: 'Los Angeles, CA'
    }
  ];

  const Sidebar = () => (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <h1 className="text-xl font-bold">🎧 BeatConnect Admin</h1>
      </div>
      
      <nav className="mt-8">
        {[
          { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
          { id: 'djs', label: 'DJs Management', icon: Music },
          { id: 'shops', label: 'Shops Management', icon: Store },
          { id: 'bookings', label: 'Bookings', icon: Calendar },
          { id: 'payments', label: 'Payments & Escrow', icon: DollarSign },
          { id: 'reviews', label: 'Reviews & Ratings', icon: Star },
          { id: 'disputes', label: 'Support / Disputes', icon: AlertTriangle },
          { id: 'settings', label: 'Platform Settings', icon: Settings },
          { id: 'analytics', label: 'Reports & Analytics', icon: TrendingUp }
        ].map(item => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-800 transition-colors ${
                activeTab === item.id ? 'bg-purple-600 border-r-4 border-purple-400' : ''
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );

  const Dashboard = () => (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total DJs</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalDJs.verified + stats.totalDJs.unverified}</p>
              <p className="text-xs text-green-600">{stats.totalDJs.verified} verified</p>
            </div>
            <Music className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Shops</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalShops}</p>
            </div>
            <Store className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Bookings</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeBookings}</p>
            </div>
            <Calendar className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Escrowed Funds</p>
              <p className="text-2xl font-bold text-gray-900">${stats.escrowedFunds.toLocaleString()}</p>
            </div>
            <Wallet className="w-8 h-8 text-yellow-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{stats.completedBookings}</p>
            </div>
            <Check className="w-8 h-8 text-green-600" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
          <div className="space-y-4">
            {bookings.slice(0, 5).map(booking => (
              <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div>
                  <div className="font-medium">{booking.dj} → {booking.shop}</div>
                  <div className="text-sm text-gray-600">{booking.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{booking.amount}</div>
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    booking.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                    booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Revenue Chart</h3>
          <div className="h-64 flex items-end justify-between space-x-2">
            {[12, 19, 23, 35, 28, 42, 38].map((height, idx) => (
              <div key={idx} className="bg-purple-500 rounded-t" style={{height: `${height * 2}px`, width: '30px'}}></div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>
      </div>
    </div>
  );

  const DJsManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">DJs Management</h2>
        <div className="flex space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search DJs..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DJ</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wallet</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Genre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {djs.map(dj => (
              <tr key={dj.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="font-medium text-gray-900">{dj.stageName}</div>
                    <div className="text-sm text-gray-500">{dj.fullName}</div>
                    <div className="text-xs text-gray-400">{dj.location}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-600">
                  {dj.wallet}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-wrap gap-1">
                    {dj.genre.map(g => (
                      <span key={g} className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded">{g}</span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    dj.status === 'verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {dj.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm">{dj.rating}</span>
                    <span className="text-xs text-gray-500 ml-1">({dj.bookings})</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  {dj.status === 'pending' && (
                    <button className="text-green-600 hover:text-green-900">
                      <Check className="w-4 h-4" />
                    </button>
                  )}
                  <button className="text-blue-600 hover:text-blue-900">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Ban className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const BookingsManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Bookings Management</h2>
        <div className="flex space-x-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg">
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Completed</option>
            <option>Disputed</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DJ / Shop</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contract</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map(booking => (
              <tr key={booking.id}>
                <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">{booking.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="font-medium">{booking.dj}</div>
                    <div className="text-sm text-gray-500">{booking.shop}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{booking.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    booking.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                    booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium">{booking.amount}</div>
                  <div className={`text-xs ${
                    booking.payment === 'escrowed' ? 'text-yellow-600' : 'text-green-600'
                  }`}>
                    {booking.payment}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-mono text-xs text-gray-600">
                  {booking.contractId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900">
                    <Check className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const DisputeManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Support / Disputes</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Pending:</span>
          <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm font-medium">
            {disputes.filter(d => d.status === 'pending').length}
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Disputes List */}
        <div className="lg:col-span-2 space-y-4">
          {disputes.map(dispute => (
            <div key={dispute.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{dispute.id}</h3>
                  <p className="text-sm text-gray-600">Booking: {dispute.bookingId}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  dispute.status === 'pending' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {dispute.status}
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-gray-600">DJ</div>
                  <div className="font-medium">{dispute.dj}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Shop</div>
                  <div className="font-medium">{dispute.shop}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-600">Issue</div>
                <div className="text-sm">{dispute.issue}</div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-600">Amount in Dispute</div>
                  <div className="font-semibold text-lg">{dispute.amount}</div>
                </div>
                <button 
                  onClick={() => setSelectedDispute(dispute)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Investigate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dispute Detail Panel */}
        <div className="bg-white p-6 rounded-lg shadow h-fit">
          {selectedDispute ? (
            <div>
              <h3 className="font-semibold text-lg mb-4">Dispute Resolution</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600">Booking Details</div>
                  <div className="text-sm">ID: {selectedDispute.bookingId}</div>
                  <div className="text-sm">Date: {selectedDispute.date}</div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-2">Evidence Files</div>
                  {selectedDispute.evidence.map(file => (
                    <div key={file} className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm">
                      <span>{file}</span>
                      <button className="text-purple-600 hover:text-purple-800">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-2">Resolution Actions</div>
                  <div className="space-y-2">
                    <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                      Release to DJ
                    </button>
                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Refund to Shop
                    </button>
                    <button className="w-full px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">
                      Split 50/50
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Resolution Notes</label>
                  <textarea 
                    rows="4" 
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                    placeholder="Document your decision..."
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
              <p>Select a dispute to investigate</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'djs': return <DJsManagement />;
      case 'bookings': return <BookingsManagement />;
      case 'disputes': return <DisputeManagement />;
      default: 
        return (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold text-gray-600">Coming Soon</h2>
            <p className="text-gray-500 mt-2">This section is under development</p>
          </div>
        );
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      
      <div className="flex-1 ml-64">
        {/* Top Bar */}
        <header className="bg-white shadow-sm px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">System Status: Online</span>
              </div>
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
