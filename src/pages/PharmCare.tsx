
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavigationHeader from '@/components/NavigationHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Plus, Search, Upload, ShoppingCart, ArrowRight } from 'lucide-react';
import MouseFollower from '@/components/MouseFollower';

const popularMedicines = [
  { 
    id: 1, 
    name: "Aspirin", 
    description: "Pain reliever", 
    price: 199, 
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400&h=400" 
  },
  { 
    id: 2, 
    name: "Ibuprofen", 
    description: "Anti-inflammatory", 
    price: 249, 
    image: "https://images.unsplash.com/photo-1550572017-9de88c4213d7?auto=format&fit=crop&q=80&w=400&h=400" 
  },
  { 
    id: 3, 
    name: "Paracetamol", 
    description: "Fever reducer", 
    price: 149, 
    image: "https://images.unsplash.com/photo-1584308666535-290707c7d055?auto=format&fit=crop&q=80&w=400&h=400" 
  },
  { 
    id: 4, 
    name: "Amoxicillin", 
    description: "Antibiotic", 
    price: 399, 
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=400&h=400" 
  },
  { 
    id: 5, 
    name: "Loratadine", 
    description: "Antihistamine", 
    price: 299, 
    image: "https://images.unsplash.com/photo-1585435557343-3b348031e799?auto=format&fit=crop&q=80&w=400&h=400" 
  },
  { 
    id: 6, 
    name: "Omeprazole", 
    description: "Acid reducer", 
    price: 449, 
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=400&h=400" 
  },
];

const Medicare = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<Array<{ id: number, name: string, price: number, quantity: number }>>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Medicare - HealthCare";
    
    document.body.classList.add('medicare-page');
    
    return () => {
      document.body.classList.remove('medicare-page');
    };
  }, []);

  const filteredMedicines = popularMedicines.filter(medicine => 
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (id: number, name: string, price: number) => {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
      setCart(
        cart.map(item => 
          item.id === id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      );
    } else {
      setCart([...cart, { id, name, price, quantity: 1 }]);
    }
    
    toast({
      title: "Added to cart",
      description: `${name} added to your cart`,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      toast({
        title: "Prescription uploaded",
        description: "Our pharmacist will review your prescription shortly.",
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden medicare-bg">
      {/* Medicine Background Image - Increased opacity to 100% */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=2070" 
          alt="Medicine background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-indigo-900/50 to-purple-900/50 opacity-90 mix-blend-multiply">
          <div className="absolute inset-0 mix-blend-multiply bg-[radial-gradient(circle_at_top_right,rgba(67,56,202,0.3),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(79,70,229,0.3),transparent_50%)]"></div>
        </div>
      </div>
      
      <MouseFollower />
      
      {/* Enhanced navbar with better visibility */}
      <div className="sticky top-0 left-0 right-0 z-50 border-b border-white/20 shadow-lg">
        <NavigationHeader />
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-blue-400 via-medical to-purple-400 bg-clip-text text-transparent">
            PharmCare Services
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Upload your prescription or search for medicines directly from our extensive catalog
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <Card className="border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Upload className="mr-2 h-5 w-5 text-medical" />
                Upload Prescription
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <div className="w-full max-w-md">
                  <label 
                    htmlFor="prescription-upload"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-3 text-muted-foreground" />
                      <p className="mb-2 text-sm text-muted-foreground">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, JPG or PNG (MAX. 10MB)
                      </p>
                    </div>
                    <input 
                      id="prescription-upload" 
                      type="file" 
                      className="hidden" 
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileChange} 
                    />
                  </label>
                </div>
                {selectedFile && (
                  <div className="mt-4 p-2 bg-medical/10 rounded w-full max-w-md">
                    <p className="text-sm font-medium">{selectedFile.name}</p>
                  </div>
                )}
                <div className="mt-6">
                  <Button>
                    Submit Prescription
                    <Upload className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search medicines..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Popular Medicines</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedicines.map((medicine) => (
              <motion.div
                key={medicine.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="aspect-square w-full bg-muted flex items-center justify-center overflow-hidden">
                    <img
                      src={medicine.image}
                      alt={medicine.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold">{medicine.name}</h3>
                    <p className="text-sm text-muted-foreground">{medicine.description}</p>
                    <p className="mt-2 text-medical font-bold">₹{medicine.price.toFixed(2)}</p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button 
                      onClick={() => handleAddToCart(medicine.id, medicine.name, medicine.price)}
                      className="w-full"
                    >
                      Add to Cart
                      <ShoppingCart className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredMedicines.length === 0 && (
            <div className="text-center p-8 bg-muted/30 rounded-lg">
              <p className="text-lg font-medium">No medicines found matching "{searchTerm}"</p>
              <p className="text-muted-foreground mt-2">Try a different search term or browse our popular medicines</p>
            </div>
          )}

          {cart.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 p-6 bg-card rounded-lg shadow-lg border border-border"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <ShoppingCart className="mr-2 h-5 w-5 text-medical" />
                Your Cart
              </h3>
              <div className="space-y-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2 border-b border-border/50">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="text-sm text-muted-foreground ml-2">x{item.quantity}</span>
                    </div>
                    <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-2 font-bold">
                  <span>Total</span>
                  <span>₹{cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Medical Support. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Medicare;
