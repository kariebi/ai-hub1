"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "David Mbategwu",
    avatar: "D",
    title: "Python Developer",
    description: "Unleashing the power of AI, this platform has revolutionized my workflow!",
  },
  {
    name: "Bright Nnameka",
    avatar: "B",
    title: "Photographer",
    description: "From stunning image generation to captivating videos, AI-Hub is my creative sanctuary!",
  },
  {
    name: "Emma Thompson",
    avatar: "E",
    title: "Content Creator",
    description: "AI-Hub is a game-changer. It helps me draft engaging content in a breeze!",
  },
  {
    name: "John Smith",
    avatar: "J",
    title: "Digital Artist",
    description: "Creating digital masterpieces is a delight with AI-Hub. A true haven for artists!",
  },
  {
    name: "Sophia Martin",
    avatar: "S",
    title: "Video Producer",
    description: "Video Generation AI at AI-Hub is my secret weapon for crafting outstanding videos!",
  },
  {
    name: "Daniel Lee",
    avatar: "D",
    title: "Software Engineer",
    description: "As a developer, AI-Hub sparks my creativity and simplifies complex tasks.",
  },
  {
    name: "Linda Johnson",
    avatar: "L",
    title: "Blogger",
    description: "With AI-Hub's AI-powered blog writing, my words flow effortlessly. A true gem!",
  },
  {
    name: "Alex Parker",
    avatar: "A",
    title: "Social Media Manager",
    description: "AI-Hub is my go-to for crafting attention-grabbing posts. A social media game-changer!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-white/10 border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-gray-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
