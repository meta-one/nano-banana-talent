import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Sparkles, Zap, MessageSquare, Image, Target, Layers, Edit3, Repeat, Star, Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-sm">🍌</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Nano Banana</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">Image Editor</a>
              <a href="#showcase" className="text-gray-700 hover:text-orange-600 transition-colors">Showcase</a>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors">
                  <span>Toolbox</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Batch Editor</DropdownMenuItem>
                  <DropdownMenuItem>Background Remover</DropdownMenuItem>
                  <DropdownMenuItem>Features</DropdownMenuItem>
                  <DropdownMenuItem>FAQ</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">API</a>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden sm:inline-flex">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Launch Now
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Notice Banner */}
      <div className="bg-yellow-100 border-b border-yellow-200 py-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-yellow-800">
            Nanobanana.ai is an independent product and is not affiliate with Google or any of its brands
          </p>
        </div>
      </div>

      {/* Try Now Banner */}
      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 py-3">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-200">
            <Target className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-gray-800">The AI model that outperforms Flux Kontext</span>
            <Button size="sm" variant="link" className="text-orange-600 p-0 h-auto font-semibold">
              Try Now →
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-8">
            <div className="text-4xl md:text-6xl animate-bounce">🍌</div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Nano Banana
            </h1>
            <div className="text-4xl md:text-6xl animate-bounce" style={{ animationDelay: '0.5s' }}>🍌</div>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform any image with simple text prompts. Nano-banana's advanced model delivers consistent character editing and scene preservation that surpasses Flux Kontext. Experience the future of AI image editing.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg">
              <Edit3 className="w-5 h-5 mr-2" />
              Start Editing
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-orange-300 font-semibold px-8 py-4 text-lg rounded-full">
              View Examples
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 text-gray-600">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-orange-500" />
              <span className="font-medium">One-shot editing</span>
            </div>
            <div className="flex items-center space-x-2">
              <Layers className="w-5 h-5 text-orange-500" />
              <span className="font-medium">Multi-image support</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-orange-500" />
              <span className="font-medium">Natural language</span>
            </div>
          </div>
        </div>
      </section>

      {/* Try The AI Editor Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Get Started</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Try The AI Editor</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of nano-banana's natural language image editing. Transform any photo with simple text commands
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Prompt Engine */}
            <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-orange-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Prompt Engine</h3>
                  <p className="text-gray-600">Transform your image with AI-powered editing</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Image className="w-4 h-4 mr-2" />
                    Image to Image
                  </Button>
                  <Button size="sm" variant="outline">
                    Text to Image
                  </Button>
                </div>

                <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-yellow-800">Batch Processing</span>
                    <Badge className="bg-yellow-200 text-yellow-800 text-xs">Pro</Badge>
                  </div>
                  <p className="text-xs text-yellow-700">Enable batch mode to process multiple images at once</p>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-2">+</div>
                  <p className="text-sm text-gray-600">Add Image</p>
                  <p className="text-xs text-gray-500">Max 50MB</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-1" />
                    Main Prompt
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                    rows={3}
                    placeholder="A futuristic city powered by nano technology, golden hour lighting, ultra detailed..."
                  />
                  <Button size="sm" variant="ghost" className="mt-2 text-xs">
                    Copy
                  </Button>
                </div>

                <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium py-3">
                  <Zap className="w-4 h-4 mr-2" />
                  Generate Now
                </Button>
              </div>
            </Card>

            {/* Output Gallery */}
            <Card className="p-6 bg-white border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Image className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Output Gallery</h3>
                  <p className="text-gray-600">Your ultra-fast AI creations appear here instantly</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-12 text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Image className="w-8 h-8 text-gray-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Ready for instant generation</h4>
                <p className="text-gray-600">Enter your prompt and unleash the power</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Core Features</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Nano Banana?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nano-banana is the most advanced AI image editor on LMArena. Revolutionize your photo editing with natural language understanding
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MessageSquare,
                title: "Natural Language Editing",
                description: "Edit images using simple text prompts. Nano-banana AI understands complex instructions like GPT for images",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: Target,
                title: "Character Consistency",
                description: "Maintain perfect character details across edits. This model excels at preserving faces and identities",
                color: "from-orange-400 to-red-500"
              },
              {
                icon: Layers,
                title: "Scene Preservation",
                description: "Seamlessly blend edits with original backgrounds. Superior scene fusion compared to Flux Kontext",
                color: "from-red-400 to-pink-500"
              },
              {
                icon: Zap,
                title: "One-Shot Editing",
                description: "Perfect results in a single attempt. Nano-banana solves one-shot image editing challenges effortlessly",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: Layers,
                title: "Multi-Image Context",
                description: "Process multiple images simultaneously. Support for advanced multi-image editing workflows",
                color: "from-orange-400 to-red-500"
              },
              {
                icon: Star,
                title: "AI UGC Creation",
                description: "Create consistent AI influencers and UGC content. Perfect for social media and marketing campaigns",
                color: "from-red-400 to-pink-500"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-orange-100 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section id="showcase" className="py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Showcase</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lightning-Fast AI Creations</h2>
            <p className="text-xl text-gray-600">See what Nano Banana generates in milliseconds</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                image: "https://ext.same-assets.com/1979488571/3571620884.jpeg",
                badge: "Nano Banana Speed",
                title: "Ultra-Fast Mountain Generation",
                description: "Created in 0.8 seconds with Nano Banana's optimized neural engine"
              },
              {
                image: "https://ext.same-assets.com/1979488571/2113194302.png",
                badge: "Nano Banana Speed",
                title: "Instant Garden Creation",
                description: "Complex scene rendered in milliseconds using Nano Banana technology"
              },
              {
                image: "https://ext.same-assets.com/1979488571/347612288.png",
                badge: "Nano Banana Speed",
                title: "Real-time Beach Synthesis",
                description: "Nano Banana delivers photorealistic results at lightning speed"
              },
              {
                image: "https://ext.same-assets.com/1979488571/3654545896.png",
                badge: "Nano Banana Speed",
                title: "Rapid Aurora Generation",
                description: "Advanced effects processed instantly with Nano Banana AI"
              }
            ].map((showcase, index) => (
              <Card key={index} className="overflow-hidden bg-white border-gray-200 hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={showcase.image} alt={showcase.title} className="w-full h-48 object-cover" />
                  <Badge className="absolute top-3 right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                    <Zap className="w-3 h-3 mr-1" />
                    {showcase.badge}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{showcase.title}</h3>
                  <p className="text-gray-600">{showcase.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-700 mb-6">Experience the power of Nano Banana yourself</p>
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-full">
              <Zap className="w-5 h-5 mr-2" />
              Try Nano Banana Generator
            </Button>
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-800 mb-4">User Reviews</Badge>
            <h2 className="text-4xl font-bold text-gray-900">What creators are saying</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "AIArtistPro",
                role: "Digital Creator",
                review: "This editor completely changed my workflow. The character consistency is incredible - miles ahead of Flux Kontext!",
                color: "from-yellow-400 to-orange-500"
              },
              {
                name: "ContentCreator",
                role: "UGC Specialist",
                review: "Creating consistent AI influencers has never been easier. It maintains perfect face details across edits!",
                color: "from-orange-400 to-red-500"
              },
              {
                name: "PhotoEditor",
                role: "Professional Editor",
                review: "One-shot editing is basically solved with this tool. The scene blending is so natural and realistic!",
                color: "from-red-400 to-pink-500"
              }
            ].map((review, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-orange-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${review.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{review.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{review.review}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-800 mb-4">FAQs</Badge>
            <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "What is Nano Banana?",
                answer: "It's a revolutionary AI image editing model that transforms photos using natural language prompts. This is currently the most powerful image editing model available, with exceptional consistency. It offers superior performance compared to Flux Kontext for consistent character editing and scene preservation."
              },
              {
                question: "How does it work?",
                answer: "Simply upload an image and describe your desired edits in natural language. The AI understands complex instructions like \"place the creature in a snowy mountain\" or \"imagine the whole face and create it\". It processes your text prompt and generates perfectly edited images."
              },
              {
                question: "How is it better than Flux Kontext?",
                answer: "This model excels in character consistency, scene blending, and one-shot editing. Users report it \"completely destroys\" Flux Kontext in preserving facial features and seamlessly integrating edits with backgrounds. It also supports multi-image context, making it ideal for creating consistent AI influencers."
              },
              {
                question: "Can I use it for commercial projects?",
                answer: "Yes! It's perfect for creating AI UGC content, social media campaigns, and marketing materials. Many users leverage it for creating consistent AI influencers and product photography. The high-quality outputs are suitable for professional use."
              },
              {
                question: "What types of edits can it handle?",
                answer: "The editor handles complex edits including face completion, background changes, object placement, style transfers, and character modifications. It excels at understanding contextual instructions like \"place in a blizzard\" or \"create the whole face\" while maintaining photorealistic quality."
              },
              {
                question: "Where can I try Nano Banana?",
                answer: "You can try nano-banana on LMArena or through our web interface. Simply upload your image, enter a text prompt describing your desired edits, and watch as nano-banana AI transforms your photo with incredible accuracy and consistency."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-orange-100 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-md flex items-center justify-center">
                <span className="text-xs">🍌</span>
              </div>
              <span className="text-gray-600">2025 nanobanana.ai All rights reserved.</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-orange-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-orange-600 transition-colors">Refund Policy</a>
              <a href="#" className="hover:text-orange-600 transition-colors">Refund Application</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
