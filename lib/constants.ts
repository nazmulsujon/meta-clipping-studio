import {
  Camera,
  Palette,
  ShoppingCart,
  Car,
  Layers,
  CheckCircle,
  Sparkles,
  CuboidIcon as Cube,
  ImageIcon,
  Ghost,
  Scissors,
  Paintbrush,
} from "lucide-react";

export const siteConfig = {
  name: "MetaClippingStudio",
  logo: "/logo.png",
  description:
    "We help retailers create high-performing visual content for their products.",
  location: {
    lat: 23.8103, // Example coordinates (Dhaka, Bangladesh)
    lng: 90.4125,
    zoom: 15,
  },
};

export const navItems = [
  { label: "HOME", href: "/" },
  {
    label: "SERVICES",
    href: "/services",
    dropdown: true,
    items: [
      {
        label: "Real-Estate Photo Editing",
        href: "/services/real-estate",
        icon: Camera,
      },
      {
        label: "Color Correction/Adjustment",
        href: "/services/color-correction",
        icon: Palette,
      },
      {
        label: "eCommerce Editing Services",
        href: "/services/ecommerce",
        icon: ShoppingCart,
      },
      {
        label: "Automotive",
        href: "/services/automotive",
        icon: Car,
      },
      {
        label: "Masking",
        href: "/services/masking",
        icon: Layers,
      },
      {
        label: "Only Edited",
        href: "/services/only-edited",
        icon: CheckCircle,
      },
      {
        label: "Shadow & Reflection",
        href: "/services/shadow-reflection",
        icon: Sparkles,
      },
      {
        label: "3D Modeling and Rendering Services",
        href: "/services/3d-modeling",
        icon: Cube,
      },
      {
        label: "Photo Retouching/On-Model/Fashion etc.",
        href: "/services/photo-retouching",
        icon: ImageIcon,
      },
      {
        label: "Ghost/3D Mannequin",
        href: "/services/ghost-mannequin",
        icon: Ghost,
      },
      {
        label: "Clipping Path/Deep etching/Silo",
        href: "/services/clipping-path",
        icon: Scissors,
      },
      {
        label: "Recoloring",
        href: "/services/recoloring",
        icon: Paintbrush,
      },
    ],
  },
  { label: "GALLERY", href: "/gallery" },
  { label: "ABOUT US", href: "/about" },
  { label: "PRICING", href: "/pricing" },
  { label: "FREE TRIAL", href: "/free-trial" },
  { label: "CONTACT US", href: "/contact" },
];

export const heroContent = [
  {
    title: "Start at Just $0.40 Per Image",
    description:
      "We help retailers create high-performing visual content for their products.",
    image: "/Banner-1.webp",
    buttonText: "GET IN TOUCH",
  },
  {
    title: "Visual Content for eCommerce",
    description: "Where little touches of excellence makes the difference",
    image: "/Banner-3.webp",
    buttonText: "GET IN TOUCH",
  },
  {
    title: "Start at Just $0.40 Per Image",
    description:
      "We help retailers create high-performing visual content for their products.",
    image: "/Banner-1.webp",
    buttonText: "GET IN TOUCH",
  },
];

export const aboutContent = {
  title: "ABOUT US",
  columns: [
    {
      title: "ADVANCED INNOVATION BD",
      items: [
        "We are a professional photo editing company with a team of highly skilled photo editors.",
        "We provide high-quality photo editing services at affordable prices.",
        "Our team is dedicated to delivering exceptional results that exceed client expectations.",
      ],
    },
    {
      title: "QUALITY & CONFIDENTIALITY",
      items: [
        "100% quality assurance",
        "Strict confidentiality",
        "Secure file transfer",
        "24/7 customer support",
        "Fast turnaround time",
      ],
    },
    {
      title: "SECURE, RELIABLE, TRANSPARENT",
      items: [
        "Secure payment methods",
        "Reliable service delivery",
        "Transparent pricing",
        "No hidden charges",
        "Money-back guarantee",
      ],
    },
  ],
  skills: [
    { name: "Photo Editing", percentage: 95 },
    { name: "Customer Satisfaction", percentage: 98 },
    { name: "On-time Delivery", percentage: 99 },
    { name: "Quality Assurance", percentage: 97 },
  ],
  certification: {
    image: "/iso-cert.png",
    text: "ISO 9001",
  },
};

export const servicesContent = {
  title: "OUR SERVICES",
  services: [
    {
      title: "Jewelry Photo Retouching",
      description:
        "Professional jewelry retouching to make your products shine with perfect clarity and brilliance.",
      image: "/p-1.webp",
      link: "#",
    },
    {
      title: "Ghost Mannequin/3D Services",
      description:
        "Create a 3D effect for your clothing items with our professional ghost mannequin service.",
      image: "/p-2.jpg",
      link: "#",
    },
    {
      title: "Model Photo Editing",
      description:
        "Enhance your model photos with our professional editing services to create stunning visuals.",
      image: "/p-3.jpg",
    },
    {
      title: "Image Masking Services",
      description:
        "Perfect image masking for complex objects, hair, and transparent items.",
      image: "/p-4.jpg",
      link: "#",
    },
    {
      title: "Product Photo Retouching",
      description:
        "Make your products look their best with our professional retouching services.",
      image: "/p-1.webp",
      link: "#",
    },
    {
      title: "Portrait Retouching",
      description:
        "Enhance portraits while maintaining natural looks with our expert retouching.",
      image: "/p-2.jpg",
      link: "#",
    },
    {
      title: "Fashion Photo Editing",
      description:
        "Create stunning fashion photos that stand out with our professional editing services.",
      image: "/p-3.jpg",
      link: "#",
    },
    {
      title: "Color Correction Services",
      description:
        "Perfect colors for your product images to ensure consistency across your catalog.",
      image: "/p-4.jpg",
      link: "#",
    },
    {
      title: "Real Estate Photo Editing",
      description:
        "Enhance real estate photos to showcase properties in their best light.",
      image: "/p-1.webp",
      link: "#",
    },
    {
      title: "Beauty Retouching",
      description:
        "Professional beauty retouching for magazines, catalogs, and advertising.",
      image: "/p-4.jpg",
      link: "#",
    },
    {
      title: "Automotive Editing",
      description:
        "Specialized editing for automotive photography to showcase vehicles at their best.",
      image: "/p-2.jpg",
      link: "#",
    },
    {
      title: "Wedding Photo Editing",
      description:
        "Make wedding memories even more special with our professional editing services.",
      image: "/p-4.jpg",
      link: "#",
    },
  ],
};

export const clientsContent = {
  title: "VALUABLE CLIENTS",
  clients: [
    { name: "Carter's", logo: "/asics.jpg" },
    { name: "FatFace", logo: "/fatface.png" },
    { name: "Rhone", logo: "/rhone.png" },
    { name: "Graingers", logo: "/graingers.jpg" },
    { name: "Carter's", logo: "/asics.jpg" },
    { name: "FatFace", logo: "/fatface.png" },
    { name: "Rhone", logo: "/rhone.png" },
    { name: "Graingers", logo: "/graingers.jpg" },
    { name: "Carter's", logo: "/asics.jpg" },
    { name: "FatFace", logo: "/fatface.png" },
    { name: "Rhone", logo: "/rhone.png" },
    { name: "Graingers", logo: "/graingers.jpg" },
    { name: "Carter's", logo: "/asics.jpg" },
    { name: "FatFace", logo: "/fatface.png" },
    { name: "Rhone", logo: "/rhone.png" },
    { name: "Graingers", logo: "/graingers.jpg" },
    { name: "Carter's", logo: "/asics.jpg" },
    { name: "FatFace", logo: "/fatface.png" },
    { name: "Rhone", logo: "/rhone.png" },
    { name: "Graingers", logo: "/graingers.jpg" },
  ],
};

export const showcaseContent = {
  title: "SHOWCASE",
  images: [
    { id: "image-1", src: "/showcase/gallery2.jpg", alt: "Showcase image 1" },
    { id: "image-2", src: "/showcase/gallery3.jpg", alt: "Showcase image 2" },
    { id: "image-3", src: "/showcase/gallery4.jpg", alt: "Showcase image 3" },
    { id: "image-4", src: "/showcase/gallery2.jpg", alt: "Showcase image 4" },
    { id: "image-5", src: "/showcase/gallery3.jpg", alt: "Showcase image 1" },
    { id: "image-6", src: "/showcase/gallery4.jpg", alt: "Showcase image 2" },
    { id: "image-7", src: "/showcase/gallery2.jpg", alt: "Showcase image 3" },
    { id: "image-8", src: "/showcase/gallery3.jpg", alt: "Showcase image 4" },
    { id: "image-9", src: "/showcase/gallery2.jpg", alt: "Showcase image 1" },
    { id: "image-10", src: "/showcase/gallery3.jpg", alt: "Showcase image 2" },
    { id: "image-11", src: "/showcase/gallery4.jpg", alt: "Showcase image 3" },
    { id: "image-12", src: "/showcase/gallery2.jpg", alt: "Showcase image 4" },
  ],
};

export const trialContent = {
  title: "Want A Free Trial?",
  buttonText: "Click Here",
  buttonLink: "#",
  backgroundImage: "/free_trial.jpg",
};

export const blogsContent = {
  title: "BLOGS",
  blogs: [
    {
      title:
        "eCommerce Editing Services – Boost Your Sales with Professional Product Images",
      category: "eCommerce",
      image: "/showcase/gallery2.jpg",
      link: "#",
    },
    {
      title:
        "Shadow & Reflection Effects – How to Create Them for Your Products",
      category: "Techniques",
      image: "/showcase/gallery3.jpg",
      link: "#",
    },
    {
      title: "Retouching Services – Enhancing Your Photos for Maximum Impact",
      category: "Retouching",
      image: "/showcase/gallery4.jpg",
      link: "#",
    },
    {
      title: "Professional Photo Editing – Why It Matters for Your Brand",
      category: "Branding",
      image: "/showcase/gallery2.jpg",
      link: "#",
    },
    {
      title: "Fashion Photography Editing – Latest Trends and Techniques",
      category: "Fashion",
      image: "/showcase/gallery3.jpg",
      link: "#",
    },
    {
      title: "Retail Success Stories – How Quality Images Increased Sales",
      category: "Success Stories",
      image: "/showcase/gallery4.jpg",
      link: "#",
    },
  ],
};

export const footerContent = {
  address: "123 Editing Street, Design City, 12345",
  phone: "+1 (123) 456-7890",
  email: "info@metaclippingstudio.com",
  socialLinks: [
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "YouTube", url: "https://youtube.com" },
  ],
  quickLinks: [
    { name: "HOME", url: "/" },
    { name: "SERVICES", url: "/services" },
    { name: "GALLERY", url: "/gallery" },
    { name: "ABOUT US", url: "/about" },
    { name: "PRICING", url: "/pricing" },
    { name: "FREE TRIAL", url: "/free-trial" },
    { name: "CONTACT US", url: "/contact" },
  ],
};
