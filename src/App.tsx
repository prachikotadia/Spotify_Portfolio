import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import ResearchDetail from "./pages/ResearchDetail";
import EducationDetail from "./pages/EducationDetail";
import ExperienceDetail from "./pages/ExperienceDetail";
import Courses from "./pages/Courses";
import NotFound from "./pages/NotFound";
import BottomNavigation from "./components/BottomNavigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<Home />} />
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
            <Route path="/research/:id" element={<ResearchDetail />} />
            <Route path="/education/:id" element={<EducationDetail />} />
            <Route path="/experience/:id" element={<ExperienceDetail />} />
            <Route path="/courses" element={<Courses />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNavigation />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
