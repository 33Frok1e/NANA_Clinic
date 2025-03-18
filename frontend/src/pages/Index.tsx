
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import AppointmentForm from '../components/AppointmentForm';
import Footer from '../components/Footer';
import ActionButtons from '../components/ActionButtons';
import ScrollToTop from '../components/ScrollToTop';
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  useEffect(() => {
    // Activate reveal animations on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <AppointmentForm />
      <Footer />
      <ActionButtons />
      <Toaster />
    </div>
  );
};

export default Index;
