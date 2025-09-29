import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import Profile from "./pages/Profile";
import Lyrics from "./pages/Lyrics";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import Awards from "./pages/Awards";
import Extras from "./pages/Extras";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectsAI from "./pages/ProjectsAI";
import ProjectsFullStack from "./pages/ProjectsFullStack";
import Certificates from "./pages/Certificates";
import CertificateDetail from "./pages/CertificateDetail";
import EducationDetail from "./pages/EducationDetail";
import ExperienceDetail from "./pages/ExperienceDetail";
import Courses from "./pages/Courses";
import Schedule from "./pages/Schedule";
import NotFound from "./pages/NotFound";
import BottomNavigation from "./components/BottomNavigation";
import LoadingScreen from "./components/LoadingScreen";
import GoogleAnalytics from "./components/GoogleAnalytics";
import PerformanceMonitor from "./components/PerformanceMonitor";
import BrowserHistoryManager from "./components/BrowserHistoryManager";
import { NavigationProvider } from "./contexts/NavigationContext";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
          }}
        >
          <NavigationProvider>
          <div className="min-h-screen bg-background">
            {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
            <GoogleAnalytics />
            <PerformanceMonitor />
            <BrowserHistoryManager />
            <Routes>
              <Route path="/" element={<Home isLoading={isLoading} />} />
              <Route path="/search" element={<Search />} />
              <Route path="/library" element={<Library />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/lyrics" element={<Lyrics />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/extras" element={<Extras />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/projects/ai-ml" element={<ProjectsAI />} />
              <Route path="/projects/fullstack" element={<ProjectsFullStack />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/certificate/:id" element={<CertificateDetail />} />
              <Route path="/education/:id" element={<EducationDetail />} />
              <Route path="/experience/:id" element={<ExperienceDetail />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/schedule" element={<Schedule />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <BottomNavigation />
          </div>
          </NavigationProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
