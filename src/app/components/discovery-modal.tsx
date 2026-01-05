import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Video } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DiscoveryModal({ isOpen, onClose }: DiscoveryModalProps) {
  const [step, setStep] = useState(1); // 1: form, 2: calendar, 3: confirmation
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    projectBrief: "",
    budget: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSchedule = (timeSlot: string) => {
    console.log("Scheduled:", timeSlot, formData);
    setStep(3);
  };

  const resetAndClose = () => {
    setStep(1);
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      projectBrief: "",
      budget: "",
    });
    onClose();
  };

  const timeSlots = [
    "Monday, Jan 13 - 10:00 AM EST",
    "Monday, Jan 13 - 2:00 PM EST",
    "Tuesday, Jan 14 - 11:00 AM EST",
    "Tuesday, Jan 14 - 3:00 PM EST",
    "Wednesday, Jan 15 - 9:00 AM EST",
    "Wednesday, Jan 15 - 1:00 PM EST",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1a1d29]/60 backdrop-blur-sm z-[100]"
          />

          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b border-[#e5e7eb] px-8 py-6 flex items-center justify-between">
                <h2 className="text-2xl tracking-tight text-[#1a1d29] font-semibold">
                  {step === 1 && "Schedule a Discovery Call"}
                  {step === 2 && "Choose a Time"}
                  {step === 3 && "You're All Set"}
                </h2>
                <button
                  onClick={resetAndClose}
                  className="text-[#52525b] hover:text-[#1a1d29] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-8 py-8">
                {step === 1 && (
                  <motion.form
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <p className="text-[#52525b] leading-relaxed font-medium mb-6">
                      Tell us about your project and we'll schedule a 45-minute discovery call to discuss how we can help.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-[#1a1d29] mb-2 font-medium">
                          Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#1a1d29] mb-2 font-medium">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-[#1a1d29] mb-2 font-medium">
                          Company *
                        </label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#1a1d29] mb-2 font-medium">
                          Role *
                        </label>
                        <Input
                          type="text"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          required
                          placeholder="e.g., CTO, VP Engineering"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-[#1a1d29] mb-2 font-medium">
                        Estimated Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#e5e7eb] rounded-md px-4 py-3 text-[#1a1d29] font-medium"
                      >
                        <option value="">Select range</option>
                        <option value="100k-250k">$100k - $250k</option>
                        <option value="250k-500k">$250k - $500k</option>
                        <option value="500k-1m">$500k - $1M</option>
                        <option value="1m+">$1M+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-[#1a1d29] mb-2 font-medium">
                        Project Brief *
                      </label>
                      <Textarea
                        name="projectBrief"
                        value={formData.projectBrief}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Describe your project, key challenges, and what you hope to achieve..."
                        className="w-full resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#1e40af] text-white px-8 py-5 rounded-lg text-base tracking-wide border-0 hover:bg-[#1e3a8a] transition-all duration-300 font-semibold shadow-lg shadow-[#1e40af]/30"
                    >
                      Continue to Scheduling
                    </Button>
                  </motion.form>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <div className="flex items-start gap-3 p-4 bg-[#fafaf9] rounded-lg border border-[#e5e7eb]">
                      <Calendar className="w-5 h-5 text-[#1e40af] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-[#1a1d29] font-semibold mb-1">45-minute Discovery Call</p>
                        <p className="text-xs text-[#52525b] font-medium">Video conference via Zoom</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm text-[#1a1d29] mb-4 font-semibold">Available Times (EST)</h3>
                      <div className="space-y-3">
                        {timeSlots.map((slot, i) => (
                          <motion.button
                            key={i}
                            onClick={() => handleSchedule(slot)}
                            whileHover={{ x: 4 }}
                            className="w-full text-left px-4 py-4 border border-[#e5e7eb] rounded-lg hover:border-[#fb923c]/60 hover:bg-[#fafaf9] transition-all duration-300"
                          >
                            <p className="text-[#1a1d29] font-medium">{slot}</p>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setStep(1)}
                      className="text-sm text-[#52525b] hover:text-[#1a1d29] transition-colors font-medium"
                    >
                      ← Back to form
                    </button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-[#1e40af] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Video className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl tracking-tight text-[#1a1d29] font-semibold mb-4">
                      Call Scheduled
                    </h3>
                    <p className="text-[#52525b] leading-relaxed font-medium mb-8">
                      You'll receive a calendar invitation and Zoom link at<br />
                      <span className="text-[#1a1d29] font-semibold">{formData.email}</span>
                    </p>
                    <Button
                      onClick={resetAndClose}
                      className="bg-[#1e40af] text-white px-8 py-4 rounded-lg text-base tracking-wide border-0 hover:bg-[#1e3a8a] transition-all duration-300 font-semibold shadow-lg shadow-[#1e40af]/30"
                    >
                      Done
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
