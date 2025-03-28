
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { healthKnowledgeBase } from '@/lib/healthKnowledgeBase';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatAssistant = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm your Medi Nova assistant. How can I help you with your health concerns today?" }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [fullResponse, setFullResponse] = useState("");
  const [typingSpeed, setTypingSpeed] = useState(25); // ms per character
  const chatRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typingText]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        // Don't close, just minimize
        if (isChatOpen && !isMinimized) {
          setIsMinimized(true);
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isChatOpen, isMinimized]);

  // Typing effect simulation
  useEffect(() => {
    if (!isTyping || !fullResponse) return;
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullResponse.length) {
        setTypingText(fullResponse.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        // Add the full message to the chat history
        setMessages(prev => [...prev.slice(0, -1), { role: 'assistant', content: fullResponse }]);
        setFullResponse("");
        setTypingText("");
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, [isTyping, fullResponse, typingSpeed]);

  const generateResponse = (userQuery: string) => {
    // Check for health-related keywords
    const query = userQuery.toLowerCase();
    
    // Start with a greeting and acknowledgment
    let responseStart = "I understand you're asking about ";
    
    // Analysis based on categories (like Babylon Health and Ada Health approaches)
    if (query.includes("symptom") || query.includes("feel") || query.includes("pain") || query.includes("hurt")) {
      // Symptom checker response style
      return `${responseStart}symptoms you're experiencing. While I can provide general information, it's important to consult with a healthcare professional for proper diagnosis. 

Can you tell me more about what you're experiencing? For how long have you had these symptoms?`;
    } 
    else if (query.includes("appointment") || query.includes("schedule") || query.includes("book")) {
      return `${responseStart}booking an appointment. You can schedule one through our Medi Nova app or call us at (555) 123-4567. 

Would you prefer to see a general practitioner or a specialist? We have immediate openings as soon as tomorrow.`;
    } 
    else if (query.includes("doctor") || query.includes("specialist") || query.includes("physician")) {
      return `${responseStart}our medical professionals. Medi Nova has specialists in various fields including cardiology, neurology, orthopedics, pediatrics, and general medicine.

Is there a particular specialty you're looking for? I can help you find the right doctor for your needs.`;
    } 
    else if (query.includes("emergency") || query.includes("urgent")) {
      return `If you're experiencing a medical emergency, please call 911 immediately. 

For urgent but non-life-threatening conditions, our urgent care center at 123 Main Street is open 24/7. The current wait time is approximately 15 minutes.`;
    }
    else if (query.includes("medication") || query.includes("prescription") || query.includes("drug") || query.includes("medicine")) {
      return `${responseStart}medications. For prescription refills or questions about your current medications, please contact our pharmacy at (555) 987-6543.

I should remind you that it's important to take your medications as prescribed and to consult with your doctor before making any changes to your medication regimen.`;
    }
    else if (query.includes("insurance") || query.includes("cover") || query.includes("payment") || query.includes("cost")) {
      return `${responseStart}insurance coverage and payments. Medi Nova accepts most major insurance plans including BlueCross, Aetna, Cigna, and Medicare.

For specific questions about your coverage, I recommend contacting our billing department at (555) 789-0123 with your insurance details ready.`;
    }
    else if (query.includes("test") || query.includes("lab") || query.includes("result") || query.includes("scan")) {
      return `${responseStart}medical tests or lab results. Your test results are typically available within 24-48 hours through your secure patient portal.

If you need assistance accessing your results or have questions about them, our lab staff is available at (555) 234-5678 from 8 AM to 6 PM on weekdays.`;
    }
    else if (query.includes("diet") || query.includes("nutrition") || query.includes("eat") || query.includes("food")) {
      return `${responseStart}nutrition and diet. Proper nutrition is essential for maintaining good health.

Our nutritionists recommend a balanced diet rich in fruits, vegetables, lean proteins, and whole grains. Would you like me to schedule a consultation with one of our dietitians for personalized advice?`;
    }
    else if (query.includes("exercise") || query.includes("workout") || query.includes("fitness") || query.includes("active")) {
      return `${responseStart}exercise and physical activity. Regular exercise is vital for both physical and mental health.

The American Heart Association recommends at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous activity per week, plus muscle-strengthening activities twice a week. Would you like some specific exercise recommendations based on your health goals?`;
    }
    else if (query.includes("stress") || query.includes("anxiety") || query.includes("depress") || query.includes("mental")) {
      return `${responseStart}mental health concerns. It's important to take care of your mental wellbeing just as you would your physical health.

Medi Nova offers counseling services and mental health resources. Would you like information about our mental health professionals or some techniques for managing stress and anxiety?`;
    }
    else if (query.includes("covid") || query.includes("vaccine") || query.includes("vaccination") || query.includes("shot")) {
      return `${responseStart}COVID-19 or vaccinations. We offer COVID-19 testing and vaccinations at all our locations.

The CDC recommends staying up to date with COVID-19 vaccines for everyone 6 months and older. Our current vaccination schedule has openings this week if you'd like to book an appointment.`;
    }
    else if (query.includes("prevention") || query.includes("wellness") || query.includes("checkup") || query.includes("screening")) {
      return `${responseStart}preventive care and wellness. Regular check-ups and screenings are essential for early detection and prevention of health issues.

Based on your age and gender, I recommend scheduling an annual physical examination. Would you like information about specific health screenings that might be appropriate for you?`;
    }
    else {
      // General health inquiry using Welltok CafeWell approach for wellness guidance
      return `Thank you for your question about ${userQuery.toLowerCase().split(' ').slice(0, 3).join(' ')}...

At Medi Nova, we're committed to providing you with comprehensive healthcare information and services. Could you provide more specific details about your health concerns so I can better assist you?`;
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // Focus back on input after sending
    inputRef.current?.focus();

    // Simulate processing time for more natural interaction
    setTimeout(() => {
      const response = generateResponse(userMessage);
      setIsLoading(false);
      
      // Add a temporary message that will be replaced by the typing animation
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
      setFullResponse(response);
      setIsTyping(true);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const openChat = () => {
    setIsChatOpen(true);
    setIsMinimized(false);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50" ref={chatRef}>
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 'auto' : 480,
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className={cn(
              "bg-white rounded-2xl shadow-2xl w-[340px] overflow-hidden flex flex-col",
              isMinimized ? "h-auto" : "h-[480px]"
            )}
          >
            <div className="p-4 border-b flex justify-between items-center bg-gradient-to-r from-medical to-medical-dark text-white">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border-2 border-white/20">
                  <AvatarImage src="/mediNova-logo.png" alt="Bot" />
                  <AvatarFallback className="bg-medical-dark text-white">MN</AvatarFallback>
                </Avatar>
                <span className="font-medium">Medi Nova Assistant</span>
              </div>
              <div className="flex items-center gap-1">
                <Button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-white hover:bg-white/10"
                >
                  <ChevronUp className={`h-5 w-5 transition-transform ${isMinimized ? 'rotate-180' : ''}`} />
                </Button>
                <Button 
                  onClick={() => setIsChatOpen(false)}
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-white hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {!isMinimized && (
              <>
                <div className="flex-1 p-4 overflow-y-auto">
                  <AnimatePresence initial={false}>
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex items-start gap-2 mb-4 ${
                          message.role === 'user' ? 'flex-row-reverse' : ''
                        }`}
                      >
                        {message.role === 'assistant' && (
                          <Avatar className="h-8 w-8 mt-1">
                            <AvatarImage src="/mediNova-logo.png" alt="Bot" />
                            <AvatarFallback className="bg-medical text-white">MN</AvatarFallback>
                          </Avatar>
                        )}
                        {message.role === 'user' && (
                          <Avatar className="h-8 w-8 mt-1">
                            <AvatarImage src="/placeholder.svg" alt="You" />
                            <AvatarFallback className="bg-gray-200 text-gray-700">You</AvatarFallback>
                          </Avatar>
                        )}
                        <motion.div
                          initial={{ scale: 0.95 }}
                          animate={{ scale: 1 }}
                          className={`rounded-lg p-3 text-sm max-w-[230px] ${
                            message.role === 'user'
                              ? 'bg-medical text-white'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          <p className="whitespace-pre-line">{
                            // If this is the last message and we're typing, show the typing text
                            isTyping && index === messages.length - 1 ? typingText : message.content
                          }</p>
                        </motion.div>
                      </motion.div>
                    ))}
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-2 mb-4"
                      >
                        <Avatar className="h-8 w-8 mt-1">
                          <AvatarImage src="/mediNova-logo.png" alt="Bot" />
                          <AvatarFallback className="bg-medical text-white">MN</AvatarFallback>
                        </Avatar>
                        <div className="bg-gray-100 rounded-lg p-3 text-gray-800">
                          <div className="flex space-x-1">
                            <motion.div
                              animate={{ scale: [0.8, 1, 0.8] }}
                              transition={{ repeat: Infinity, duration: 1 }}
                              className="h-2 w-2 rounded-full bg-gray-400"
                            />
                            <motion.div
                              animate={{ scale: [0.8, 1, 0.8] }}
                              transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                              className="h-2 w-2 rounded-full bg-gray-400"
                            />
                            <motion.div
                              animate={{ scale: [0.8, 1, 0.8] }}
                              transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                              className="h-2 w-2 rounded-full bg-gray-400"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </AnimatePresence>
                </div>

                <div className="p-3 border-t">
                  <div className="relative rounded-full overflow-hidden border border-gray-200 focus-within:ring-1 focus-within:ring-medical focus-within:border-medical">
                    <textarea
                      ref={inputRef}
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={handleKeyPress}
                      placeholder="Ask any health question..."
                      className="w-full px-4 py-2 pr-12 text-sm max-h-20 resize-none focus:outline-none"
                      rows={1}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim() || isLoading || isTyping}
                      className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 rounded-full transition-colors ${
                        inputMessage.trim() && !isLoading && !isTyping
                          ? 'bg-medical text-white hover:bg-medical-dark'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {!isChatOpen && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={openChat}
                className="bg-medical text-white p-4 rounded-full shadow-lg flex items-center gap-2"
              >
                <Bot className="w-6 h-6" />
                <span className="hidden md:inline font-medium">Health Assistant</span>
              </motion.button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Ask a health question</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};

export default ChatAssistant;
