
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = event;
      const { offsetWidth, offsetHeight } = heroRef.current;
      
      const x = (clientX / offsetWidth - 0.5) * 20;
      const y = (clientY / offsetHeight - 0.5) * 20;
      
      heroRef.current.style.setProperty('--x', `${x}px`);
      heroRef.current.style.setProperty('--y', `${y}px`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden"
      style={{ "--x": "0px", "--y": "0px" } as React.CSSProperties}
    >
      {/* Background gradient and shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] max-h-[1000px] opacity-50">
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-200 mix-blend-multiply blur-[120px] animate-float" />
          <div className="absolute top-1/2 right-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-200 mix-blend-multiply blur-[120px] animate-float animation-delay-1000" />
          <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-sky-200 mix-blend-multiply blur-[120px] animate-float animation-delay-2000" />
        </div>
      </div>

      <div className="container px-4 md:px-6 flex flex-col items-center text-center relative z-10 animate-fade-in">
        <div className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-primary/5 mb-6 animate-scale-in animate-stagger-1">
          Revolutionizing E-Learning with AI
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-4 animate-scale-in animate-stagger-2">
          Meet Aptora
        </h1>
        
        <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground mb-8 animate-scale-in animate-stagger-3">
          A smart, AI-powered e-learning platform that generates personalized study materials, 
          quizzes, flashcards, learning paths, and notes tailored to your learning style.
        </p>
        
        <div className="animate-scale-in animate-stagger-4">
          <Button size="lg" className="rounded-full px-8" onClick={scrollToFeatures}>
            Get Started
          </Button>
        </div>
        
        <div className="mt-16 w-full max-w-3xl mx-auto aspect-video relative rounded-xl overflow-hidden shadow-2xl animate-scale-in animate-stagger-5">
          <div className="absolute inset-0 bg-gray-900/10 backdrop-blur-sm z-10 border border-white/20 rounded-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-20"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')] bg-cover bg-center animate-blur-in"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
