
import React, { useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const testimonialElements = testimonialsRef.current?.querySelectorAll(".testimonial-card");
    if (testimonialElements) {
      testimonialElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Medical Student",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256",
      review: "Aptora transformed my study routine. The AI-generated notes helped me grasp complex medical concepts that I struggled with for months. My exam scores improved significantly!"
    },
    {
      name: "David Chen",
      role: "Computer Science Tutor",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=256",
      review: "As an educator, I've found Aptora's quiz generator to be a game-changer. It creates challenging questions that truly test understanding rather than just memorization."
    },
    {
      name: "Amara Patel",
      role: "Business Professional",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256",
      review: "The flashcard feature helped me prepare for my certification exam in half the time. The AI seems to understand which concepts I need to review more often."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
            Real experiences from students, educators, and professionals who've transformed their learning with Aptora.
          </p>
        </div>

        <div 
          ref={testimonialsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              review={testimonial.review}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
