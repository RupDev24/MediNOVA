
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Medicare from "./pages/PharmCare";
import PathoLab from "./pages/PathoCare";
import NotFound from "./pages/NotFound";
import Doctor from "./pages/Doctor";
import Clinic from "./pages/Clinic";
import Ambulance from "./pages/Ambulance";
import SupportThem from "./pages/SupportThem";
import { Hospital } from "lucide-react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/medicare" element={<Medicare />} />
            <Route path="/pathocare" element={<PathoLab />} />
            <Route path="/doctors" element={<Doctor />} />
            <Route path="/hospital" element={<Clinic />} />
            <Route path="/ambulance" element={<Ambulance />} />
            <Route path="/support" element={<SupportThem />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
