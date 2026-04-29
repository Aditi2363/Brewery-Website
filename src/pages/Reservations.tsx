import { useState } from 'react';
import { motion } from 'motion/react';
import { CalendarDays, Users, Clock, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Reservations() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    phone: '',
    email: '',
    specialRequests: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Generate times slots (mock) - normally would fetch from backend based on date
  const timeSlots = [
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && formData.date && formData.time && formData.guests) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-brand-base pt-32 pb-24 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Form Content */}
          <div>
            <div className="mb-10">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Reserve a Table</h1>
              <p className="text-brand-muted text-lg">
                Join us for an unforgettable evening of craft beer and great food. 
              </p>
              <div className="flex items-center gap-2 mt-4 text-brand-accent text-sm font-medium">
                <span className="w-2 h-2  bg-red-500 animate-pulse"></span>
                High demand for this weekend. Guarantee your spot.
              </div>
            </div>

            {!isSuccess ? (
              <div className="bg-brand-surface p-6 sm:p-10  border border-white/5 relative overflow-hidden">
                {/* Progress bar */}
                <div className="absolute top-0 left-0 h-1 bg-white/10 w-full">
                  <div 
                    className="h-full bg-brand-accent transition-all duration-500" 
                    style={{ width: `${(step / 2) * 100}%` }}
                  />
                </div>

                <form onSubmit={step === 1 ? handleNext : handleSubmit}>
                  {step === 1 ? (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Step 1: The Details</h3>
                      
                      <div className="space-y-6">
                        {/* Guests */}
                        <div>
                          <label className="block text-sm font-medium text-brand-muted mb-2 uppercase tracking-wide">Number of Guests</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Users className="h-5 w-5 text-brand-muted" />
                            </div>
                            <select 
                              name="guests"
                              value={formData.guests}
                              onChange={handleInputChange}
                              required
                              className="appearance-none block w-full bg-brand-base border border-white/10  py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-colors"
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8, '9+ (Large Group)'].map(num => (
                                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Date */}
                        <div>
                           <label className="block text-sm font-medium text-brand-muted mb-2 uppercase tracking-wide">Date</label>
                           <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <CalendarDays className="h-5 w-5 text-brand-muted" />
                            </div>
                            <input 
                              type="date" 
                              name="date"
                              value={formData.date}
                              onChange={handleInputChange}
                              required
                              min={new Date().toISOString().split('T')[0]} // Today
                              className="block w-full bg-brand-base border border-white/10  py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-colors [color-scheme:dark]"
                            />
                          </div>
                        </div>

                        {/* Time Slots */}
                        <div>
                           <label className="block text-sm font-medium text-brand-muted mb-2 uppercase tracking-wide">Time</label>
                           <div className="grid grid-cols-4 gap-3">
                             {timeSlots.map(time => (
                               <button
                                 type="button"
                                 key={time}
                                 onClick={() => setFormData({...formData, time})}
                                 className={`py-2  border text-sm font-medium transition-all ${
                                   formData.time === time 
                                   ? 'bg-brand-accent border-brand-accent text-brand-base' 
                                   : 'bg-brand-base border-white/10 text-brand-text hover:border-brand-accent/50'
                                 }`}
                               >
                                 {time}
                               </button>
                             ))}
                           </div>
                           <input type="hidden" name="time" value={formData.time} required />
                        </div>
                      </div>

                      <button 
                        type="submit"
                        disabled={!formData.date || !formData.time}
                        className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-brand-base hover:bg-brand-accent font-bold text-lg uppercase tracking-wider  transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <button type="button" onClick={() => setStep(1)} className="text-brand-muted hover:text-white transition-colors">
                          &larr; Back
                        </button>
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider">Step 2: Your Info</h3>
                      </div>

                      <div className="p-4 bg-brand-base border border-brand-accent/20  mb-6 flex items-center justify-between">
                         <div className="flex flex-col">
                           <span className="text-sm text-brand-muted">Booking</span>
                           <span className="font-bold text-white">{formData.guests} Guests • {formData.date} at {formData.time}</span>
                         </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-brand-muted mb-1">Full Name</label>
                          <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-brand-base border border-white/10  py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           <div>
                            <label className="block text-sm font-medium text-brand-muted mb-1">Phone Number</label>
                            <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full bg-brand-base border border-white/10  py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-brand-muted mb-1">Email</label>
                            <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-brand-base border border-white/10  py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-brand-muted mb-1">Special Requests (Optional)</label>
                          <textarea name="specialRequests" rows={3} value={formData.specialRequests} onChange={handleInputChange} className="w-full bg-brand-base border border-white/10  py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"></textarea>
                        </div>
                      </div>

                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-accent hover:bg-brand-accent-light text-brand-base font-bold text-lg uppercase tracking-wider  transition-all disabled:opacity-70 group"
                      >
                        {isSubmitting ? 'Confirming...' : 'Confirm Reservation'}
                      </button>
                    </motion.div>
                  )}
                </form>
              </div>
            ) : (
               <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-surface p-10  border border-brand-accent/30 text-center"
              >
                <div className="w-20 h-20 bg-brand-accent  flex items-center justify-center mx-auto mb-6">
                   <Check className="w-10 h-10 text-brand-base" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-2">You're All Set!</h3>
                <p className="text-brand-muted mb-8 text-lg">
                  We've successfully booked your table for {formData.guests} on {formData.date} at {formData.time}. A confirmation email has been sent to {formData.email}.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/" className="px-6 py-3 bg-white text-brand-base font-bold  hover:bg-gray-200 transition-colors">
                    Back to Home
                  </Link>
                  <button onClick={() => { setStep(1); setIsSuccess(false); setFormData({...formData, date: '', time: ''})}} className="px-6 py-3 border border-white/20 text-white font-bold  hover:bg-white/5 transition-colors">
                    Book Another
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Info Side Panel */}
          <div className="hidden lg:block relative h-full min-h-[600px]  overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1544146917-1341076b1f6d?q=80&w=1200&auto=format&fit=crop" 
              alt="People enjoying beer" 
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-base via-brand-base/60 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-10 z-10 w-full">
               <div className="bg-brand-base/80 backdrop-blur-md border border-white/10  p-6">
                 <h4 className="font-serif font-bold text-2xl text-white mb-4">Good to Know</h4>
                 <ul className="space-y-4 text-brand-text text-sm">
                   <li className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5  bg-brand-accent mt-1.5 shrink-0" />
                     <p>Reservations are held for 15 minutes past booking time.</p>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5  bg-brand-accent mt-1.5 shrink-0" />
                     <p>For groups larger than 8, please contact us directly at +91 98765 43210.</p>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5  bg-brand-accent mt-1.5 shrink-0" />
                     <p>Smart casual dress code. Entry permitted only for ages 21+.</p>
                   </li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
