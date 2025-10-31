"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ParallaxSection } from "@/components/ui/ParallaxSection";
import { ImageReveal } from "@/components/ui/ImageReveal";

export function ParallaxCTA() {
  return (
    <section className="relative min-h-[600px] overflow-hidden">
      <ParallaxSection speed={0.3} className="absolute inset-0">
        <ImageReveal
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600"
          alt="Team collaboration"
          fill
          className="object-cover"
        />
      </ParallaxSection>
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90" />
      
      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center px-6 py-20">
        <div className="w-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl"
          >
            Let's Build Something Great Together
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 text-xl leading-relaxed text-white/90 sm:text-2xl"
          >
            Ready to turn your idea into reality? Get in touch and let's start your journey.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button 
              href="/contact" 
              variant="primary" 
              size="lg" 
              className="bg-white text-primary shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:bg-neutral-100"
            >
              Get Started
            </Button>
            <Button 
              href="/contact" 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white text-white backdrop-blur-sm hover:bg-white/20"
            >
              Schedule a Call
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

