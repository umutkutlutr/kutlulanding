import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Calendar, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { saveFormSubmission } from "../../utils/formSubmission";

export function DiscoveryCall() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1); // 1: Form, 2: Calendar, 3: Confirmation
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    projectBrief: "",
  });
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const availableDates = [
    { date: "2026-01-15", day: "Wednesday" },
    { date: "2026-01-16", day: "Thursday" },
    { date: "2026-01-17", day: "Friday" },
    { date: "2026-01-20", day: "Monday" },
    { date: "2026-01-21", day: "Tuesday" },
    { date: "2026-01-23", day: "Thursday" },
  ];

  const availableTimes = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleTimeSelection = () => {
    // Save form submission to file
    saveFormSubmission({
      ...formData,
      selectedDate,
      selectedTime,
      type: 'discovery-call',
    });
    setStep(3);
  };

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      setStep(1);
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        phone: "",
        projectBrief: "",
      });
      setSelectedDate("");
      setSelectedTime("");
    }, 300);
  };

  return (
    <section id="discovery" className="relative py-32 border-t border-[#e5e7eb]/50 overflow-hidden bg-white">
      {/* Static gradient orbs - no animation, reduced blur */}
      <div
        className="absolute top-20 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.08) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div
        className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30, 64, 175, 0.06) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-sm tracking-[0.3em] text-[#1e40af] uppercase font-medium">
              Start Here
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-[#1a1d29]">
            Schedule a Discovery Call
          </h2>
          <p className="text-[#71717a] max-w-2xl mx-auto mb-12 leading-relaxed text-lg">
            We don't offer fixed-price packages. Every enterprise has unique needs. Start with a discovery call to understand your requirements before we propose an engagement.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-2xl mx-auto"
          >
            {/* 3D Card effect */}
            <motion.div
              className="relative p-12 rounded-2xl border-2 border-[#e5e7eb] backdrop-blur-sm overflow-hidden bg-white/60"
              style={{
                transformStyle: "preserve-3d",
              }}
              whileHover={{
                rotateX: 2,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated gradient background */}
              <motion.div 
                className="absolute inset-0 opacity-20"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 50%, rgba(30, 64, 175, 0.15) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 50%)",
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative space-y-8" style={{ transform: "translateZ(20px)" }}>
                <div className="space-y-4">
                  {[
                    "45-minute video consultation",
                    "Understand your business and technical needs",
                    "Discuss project scope and timeline",
                    "Receive preliminary recommendations"
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 rounded-full mt-2.5"
                        style={{
                          background: `linear-gradient(135deg, #fb923c, #1e40af)`,
                          boxShadow: "0 0 10px rgba(251, 146, 60, 0.5)",
                        }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                      <p className="text-[#52525b] text-left group-hover:text-[#1a1d29] transition-colors duration-500">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => setShowModal(true)}
                    className="w-full bg-[#1e40af] text-white hover:bg-[#1e3a8a] py-6 text-sm tracking-wide rounded-lg border-0 transition-colors duration-300 font-semibold cursor-hover shadow-xl shadow-[#1e40af]/30"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Schedule Your Call
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </motion.div>

                <p className="text-xs text-[#9ca3af] text-center">
                  No commitment required • Free consultation
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Discovery Call Modal */}
      <Dialog open={showModal} onOpenChange={handleClose}>
        <DialogContent className="bg-white border-[#e5e7eb] max-w-3xl rounded-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl tracking-tight text-[#1a1d29]">
              {step === 1 && "Tell us about your project"}
              {step === 2 && "Choose a time"}
              {step === 3 && "You're all set!"}
            </DialogTitle>
            <DialogDescription className="text-base text-[#71717a]">
              {step === 1 && "We'll use this information to prepare for our conversation."}
              {step === 2 && "Select a date and time that works best for you."}
              {step === 3 && "We've sent a calendar invite to your email."}
            </DialogDescription>
          </DialogHeader>

          {/* Step 1: Form */}
          {step === 1 && (
            <form onSubmit={handleFormSubmit} className="space-y-6 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-[#52525b] font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Smith"
                    className="bg-white border-[#e5e7eb] mt-2 focus:border-[#fb923c] transition-colors text-[#1a1d29] placeholder:text-[#9ca3af]"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#52525b] font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@company.com"
                    className="bg-white border-[#e5e7eb] mt-2 focus:border-[#1e40af] transition-colors text-[#1a1d29] placeholder:text-[#9ca3af]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company" className="text-[#52525b] font-medium">
                    Company *
                  </Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Acme Corporation"
                    className="bg-white border-[#e5e7eb] mt-2 focus:border-[#fb923c] transition-colors text-[#1a1d29] placeholder:text-[#9ca3af]"
                  />
                </div>
                <div>
                  <Label htmlFor="role" className="text-[#52525b] font-medium">
                    Your Role *
                  </Label>
                  <Input
                    id="role"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    placeholder="CTO, Founder, etc."
                    className="bg-white border-[#e5e7eb] mt-2 focus:border-[#1e40af] transition-colors text-[#1a1d29] placeholder:text-[#9ca3af]"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-[#52525b] font-medium">
                  Phone Number (optional)
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+1 (555) 123-4567"
                  className="bg-white border-[#e5e7eb] mt-2 focus:border-[#fb923c] transition-colors text-[#1a1d29] placeholder:text-[#9ca3af]"
                />
              </div>

              <div>
                <Label htmlFor="projectBrief" className="text-[#52525b] font-medium">
                  Brief Project Description *
                </Label>
                <Textarea
                  id="projectBrief"
                  required
                  value={formData.projectBrief}
                  onChange={(e) => setFormData({...formData, projectBrief: e.target.value})}
                  placeholder="Tell us about your project goals, challenges, and timeline..."
                  className="bg-white border-[#e5e7eb] mt-2 min-h-[120px] focus:border-[#1e40af] transition-colors text-[#1a1d29] placeholder:text-[#9ca3af]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#1e40af] text-white hover:bg-[#1e3a8a] py-6 text-base tracking-wide border-0 font-semibold transition-colors duration-300 shadow-lg shadow-[#1e40af]/30"
              >
                Continue to Scheduling
              </Button>
            </form>
          )}

          {/* Step 2: Calendar */}
          {step === 2 && (
            <div className="space-y-8 pt-6">
              {/* Date Selection */}
              <div>
                <Label className="text-[#52525b] font-medium mb-4 block">
                  Select a Date
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {availableDates.map((dateObj, i) => (
                    <motion.button
                      key={i}
                      type="button"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => setSelectedDate(dateObj.date)}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        selectedDate === dateObj.date
                          ? "border-[#fb923c] bg-[#fb923c]/10"
                          : "border-[#e5e7eb] hover:border-[#fb923c]/50"
                      }`}
                    >
                      <Calendar className="w-5 h-5 mx-auto mb-2 text-[#1e40af]" />
                      <p className="text-sm font-semibold text-[#1a1d29]">{dateObj.day}</p>
                      <p className="text-xs text-[#71717a]">{dateObj.date}</p>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Label className="text-[#52525b] font-medium mb-4 block">
                    Select a Time (EST)
                  </Label>
                  <div className="grid grid-cols-3 gap-3">
                    {availableTimes.map((time, i) => (
                      <motion.button
                        key={i}
                        type="button"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                          selectedTime === time
                            ? "border-[#1e40af] bg-[#1e40af]/10"
                            : "border-[#e5e7eb] hover:border-[#1e40af]/50"
                        }`}
                      >
                        <Clock className="w-4 h-4 mx-auto mb-1 text-[#1e40af]" />
                        <p className="text-xs font-semibold text-[#1a1d29]">{time}</p>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Confirm Button */}
              {selectedDate && selectedTime && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Button
                    onClick={handleTimeSelection}
                    className="w-full bg-[#1e40af] text-white hover:bg-[#1e3a8a] py-6 text-base tracking-wide border-0 font-semibold transition-colors duration-300 shadow-lg shadow-[#1e40af]/30"
                  >
                    Confirm Meeting
                  </Button>
                </motion.div>
              )}
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#10b981]/10 mb-6"
              >
                <CheckCircle className="w-10 h-10 text-[#10b981]" />
              </motion.div>

              <h3 className="text-2xl font-semibold text-[#1a1d29] mb-4">
                Meeting Scheduled!
              </h3>
              
              <div className="bg-[#f9fafb] rounded-xl p-6 mb-6 space-y-2">
                <p className="text-sm text-[#71717a]">
                  <strong className="text-[#1a1d29]">{formData.name}</strong>
                </p>
                <p className="text-sm text-[#71717a]">{formData.email}</p>
                <div className="h-px bg-[#e5e7eb] my-4" />
                <p className="text-sm text-[#1a1d29] font-semibold">
                  {selectedDate} at {selectedTime} EST
                </p>
              </div>

              <p className="text-[#71717a] mb-8">
                We've sent a calendar invite to <strong className="text-[#1a1d29]">{formData.email}</strong>.
                <br />
                You'll receive a Zoom link 24 hours before the meeting.
              </p>

              <Button
                onClick={handleClose}
                className="bg-[#1e40af] text-white hover:bg-[#1e3a8a] px-8 py-3 rounded-lg font-semibold"
              >
                Done
              </Button>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}