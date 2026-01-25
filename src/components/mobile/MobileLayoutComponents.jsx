import React from 'react';
import { MapPin, Search, Star, Clock, ChevronDown, Home, Calendar, User, Zap, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// ----------------------------------------------------------------------
// Mobile Header
// ----------------------------------------------------------------------
export const MobileHeader = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-slate-50 transition-all duration-300">
            <div className="flex flex-col">
                <div className="flex items-center gap-1 text-slate-400 text-[10px] font-bold tracking-wider uppercase">
                    <MapPin className="w-3 h-3" />
                    <span>Home</span>
                </div>
                <div className="flex items-center gap-1 text-slate-900 font-extrabold text-base leading-none mt-0.5">
                    <span>Sector 62, Noida</span>
                    <ChevronDown className="w-4 h-4 text-blue-600 stroke-[3px]" />
                </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-slate-100 ring-2 ring-slate-50 overflow-hidden relative active:scale-95 transition-transform">
                <img src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff" alt="User" />
            </div>
        </header>
    );
};

// ----------------------------------------------------------------------
// Mobile Search Bar
// ----------------------------------------------------------------------
export const MobileSearch = ({ value, onChange }) => {
    return (
        <div className="px-4 py-2 bg-white sticky top-[57px] z-40 pb-3 transition-shadow duration-300">
            <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-slate-600 transition-colors" />
                <input
                    type="text"
                    placeholder="Search for 'AC repair, plumber...'"
                    className="w-full pl-11 pr-4 py-3 bg-slate-100/80 text-slate-900 rounded-xl border border-transparent focus:bg-white focus:border-slate-200 focus:outline-none focus:shadow-lg focus:shadow-slate-200/40 transition-all font-medium placeholder:text-slate-400 text-sm"
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

// ----------------------------------------------------------------------
// Mobile Category Rail (Improved)
// ----------------------------------------------------------------------
export const MobileCategoryRail = ({ categories, selectedApi, onSelect }) => {
    return (
        <div className="py-2 overflow-x-auto no-scrollbar pl-4 bg-white">
            <div className="flex gap-3 pr-4">
                {/* All Option */}
                <button
                    onClick={() => onSelect('all')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 active:scale-95 ${selectedApi === 'all'
                        ? 'bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-900/20'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                >
                    <span className="text-sm font-bold">All</span>
                </button>

                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => onSelect(cat.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 active:scale-95 whitespace-nowrap ${selectedApi === cat.id
                            ? 'bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-900/20'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                            }`}
                    >
                        <span className="text-base">{cat.emoji || '✨'}</span>
                        <span className="text-sm font-bold">{cat.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

// ----------------------------------------------------------------------
// Mobile Service Card (Enhanced Hierarchy)
// ----------------------------------------------------------------------
export const MobileServiceCard = ({ service, onBook }) => {
    return (
        <div className="group bg-white rounded-[20px] overflow-hidden border border-slate-100 shadow-[0_8px_20px_rgb(0,0,0,0.04)] active:scale-[0.98] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
            {/* Image Section */}
            <div className="relative aspect-video">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-90" />

                {/* Top Badge Container */}
                <div className="absolute top-3 inset-x-3 flex justify-between items-start">
                    {service.isPromoted && (
                        <div className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-sm">
                            Promoted
                        </div>
                    )}

                    {/* Rating Badge (Moved to Top-Right) */}
                    <div className="ml-auto bg-black/40 backdrop-blur-md border border-white/10 px-2 py-1 rounded-lg flex items-center gap-1 text-white">
                        <span className="text-xs font-bold">{service.rating}</span>
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    </div>
                </div>

                {/* Discount Badge (Bottom Left) */}
                {service.discount && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-blue-600 text-white text-[11px] font-bold px-2 py-1 rounded-lg shadow-lg shadow-blue-600/30">
                        <Zap className="w-3 h-3 fill-current" />
                        {service.discount}
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-4 pt-3">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="font-extrabold text-slate-900 text-lg leading-tight w-3/4 line-clamp-2">
                        {service.title}
                    </h3>
                    <div className="text-right shrink-0">
                        <span className="block text-lg font-black text-slate-900">₹{service.price}</span>
                    </div>
                </div>

                <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2">
                    {service.description}
                </p>

                {/* URGENCY LINE (New) */}
                {service.urgency && (
                    <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-dashed border-slate-100">
                        <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                            {service.urgency}
                        </span>
                    </div>
                )}

                {/* Footer Action */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{service.eta || '60 mins'}</span>
                    </div>

                    <button
                        onClick={() => onBook(service)}
                        className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-600/20 active:scale-95 active:bg-blue-700 transition-all flex items-center gap-1"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};


// ----------------------------------------------------------------------
// Mobile Bottom Navigation (Polished)
// ----------------------------------------------------------------------
export const MobileBottomNav = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 pb-safe pt-2 px-6 flex justify-between items-center z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
            <Link
                to="/"
                className={`flex flex-col items-center gap-1 p-2 transition-transform active:scale-90 ${isActive('/') ? 'text-blue-600' : 'text-slate-400'}`}
            >
                <div className="relative">
                    <Home className="w-6 h-6" strokeWidth={isActive('/') ? 3 : 2} fill={isActive('/') ? "currentColor" : "none"} />
                    {isActive('/') && <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-current" />}
                </div>
                <span className={`text-[10px] font-bold ${isActive('/') ? 'text-blue-600' : 'text-slate-400'}`}>Home</span>
            </Link>

            <Link
                to="/services"
                className={`group flex flex-col items-center gap-1 p-2 transition-transform active:scale-90 ${isActive('/services') ? 'text-blue-600' : 'text-slate-400'}`}
            >
                <div className="relative">
                    <div className={`w-12 h-12 -mt-10 rounded-full flex items-center justify-center border-4 border-slate-50 transition-all shadow-lg ${isActive('/services') ? 'bg-blue-600 shadow-blue-600/30' : 'bg-slate-900'}`}>
                        <Search className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>
                </div>
                <span className={`text-[10px] font-bold ${isActive('/services') ? 'text-blue-600' : 'text-slate-400'}`}>Services</span>
            </Link>

            <Link
                to="/bookings"
                className={`flex flex-col items-center gap-1 p-2 transition-transform active:scale-90 ${isActive('/bookings') ? 'text-blue-600' : 'text-slate-400'}`}
            >
                <div className="relative">
                    <Calendar className="w-6 h-6" strokeWidth={isActive('/bookings') ? 3 : 2} fill={isActive('/bookings') ? "currentColor" : "none"} />
                    {isActive('/bookings') && <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-current" />}
                </div>
                <span className={`text-[10px] font-bold ${isActive('/bookings') ? 'text-blue-600' : 'text-slate-400'}`}>Bookings</span>
            </Link>
        </nav>
    );
};
