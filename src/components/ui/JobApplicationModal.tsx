"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, Upload, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

export function JobApplicationModal({ isOpen, onClose, jobTitle }: JobApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    yearsOfExperience: "",
    resume: null as File | null,
    coverLetter: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resumeFileName, setResumeFileName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Application submitted:", formData);
    // You can add API call here
    setIsSubmitted(true);
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        yearsOfExperience: "",
        resume: null,
        coverLetter: "",
      });
      setResumeFileName("");
      onClose();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        resume: file,
      });
      setResumeFileName(file.name);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-[#0B0C10]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 shadow-lg transition-all hover:bg-white dark:bg-[#0B0C10]/90 dark:hover:bg-[#0B0C10]"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 text-gray-900 dark:text-white" />
              </button>

              {/* Form or Thank You Message */}
              <div className="overflow-y-auto max-h-[90vh] p-6 sm:p-8 lg:p-12">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center min-h-[400px] text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="mb-6"
                      >
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                          <CheckCircle className="h-12 w-12 text-white" />
                        </div>
                      </motion.div>
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-4 text-3xl font-bold text-gray-900 dark:text-white"
                      >
                        Application Submitted!
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-6 text-lg text-gray-600 dark:text-gray-400 max-w-md"
                      >
                        Thank you for your interest! We've received your application and will review it shortly. Our team will get back to you within 5-7 business days.
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-sm text-gray-500 dark:text-gray-500"
                      >

                      </motion.p>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-6">
                        <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                          Job Application
                        </h2>
                        {jobTitle && (
                          <p className="mb-2 text-lg font-semibold text-primary dark:text-primary/80">
                            {jobTitle}
                          </p>
                        )}
                        <p className="text-gray-600 dark:text-gray-400">
                          Please fill out the form below to apply for this position.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[#111] dark:text-white"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[#111] dark:text-white"
                            placeholder="john@example.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[#111] dark:text-white"
                            placeholder="+1 (234) 567-890"
                          />
                        </div>

                        <div>
                          <label htmlFor="yearsOfExperience" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200">
                            Years of Experience *
                          </label>
                          <select
                            id="yearsOfExperience"
                            name="yearsOfExperience"
                            required
                            value={formData.yearsOfExperience}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[#111] dark:text-white"
                          >
                            <option value="">Select years of experience</option>
                            <option value="0-1">0-1 years</option>
                            <option value="1-3">1-3 years</option>
                            <option value="3-5">3-5 years</option>
                            <option value="5-7">5-7 years</option>
                            <option value="7-10">7-10 years</option>
                            <option value="10+">10+ years</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="resume" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200">
                            Upload Resume *
                          </label>
                          <div className="relative">
                            <input
                              type="file"
                              id="resume"
                              name="resume"
                              required
                              accept=".pdf,.doc,.docx"
                              onChange={handleFileChange}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 dark:border-gray-700 dark:bg-[#111]">
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <Upload className="h-5 w-5 text-primary" />
                              </div>
                              <div className="flex-1">
                                {resumeFileName ? (
                                  <div className="flex items-center gap-2">
                                    <FileText className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                    <span className="text-sm text-gray-900 dark:text-white">{resumeFileName}</span>
                                  </div>
                                ) : (
                                  <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Click to upload resume (PDF, DOC, DOCX)
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                            Accepted formats: PDF, DOC, DOCX (Max 5MB)
                          </p>
                        </div>

                        <div>
                          <label htmlFor="coverLetter" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200">
                            Cover Letter *
                          </label>
                          <textarea
                            id="coverLetter"
                            name="coverLetter"
                            rows={5}
                            required
                            value={formData.coverLetter}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[#111] dark:text-white"
                            placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                          />
                        </div>

                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          className="w-full"
                        >
                          <Send className="mr-2 h-5 w-5" />
                          Submit Application
                        </Button>
                      </form>
                    </>
                  )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
