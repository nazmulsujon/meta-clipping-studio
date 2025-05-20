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
    href: "#",
    dropdown: true,
    items: [
      {
        label: "Real-Estate Photo Editing",
        href: "#",
        icon: Camera,
      },
      {
        label: "Color Correction/Adjustment",
        href: "#",
        icon: Palette,
      },
      {
        label: "eCommerce Editing Services",
        href: "#",
        icon: ShoppingCart,
      },
      {
        label: "Automotive",
        href: "#",
        icon: Car,
      },
      {
        label: "Masking",
        href: "#",
        icon: Layers,
      },
      {
        label: "Only Edited",
        href: "#",
        icon: CheckCircle,
      },
      {
        label: "Shadow & Reflection",
        href: "#",
        icon: Sparkles,
      },
      {
        label: "3D Modeling and Rendering Services",
        href: "#",
        icon: Cube,
      },
      {
        label: "Photo Retouching/On-Model/Fashion etc.",
        href: "#",
        icon: ImageIcon,
      },
      {
        label: "Ghost/3D Mannequin",
        href: "#",
        icon: Ghost,
      },
      {
        label: "Clipping Path/Deep etching/Silo",
        href: "#",
        icon: Scissors,
      },
      {
        label: "Recoloring",
        href: "#",
        icon: Paintbrush,
      },
    ],
  },
  { label: "GALLERY", href: "#" },
  { label: "ABOUT US", href: "#" },
  { label: "PRICING", href: "#" },
  { label: "FREE TRIAL", href: "#" },
  { label: "CONTACT US", href: "#" },
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
      title: "META CLIPPING STUDIO",
      items: [
        "Team of 75 professional Image Editing designers & artists.",
        "Ready to fulfill your requirements with high-end quality.",
        "Renowned for Image Editing & Retouching services globally.",
      ],
    },
    {
      title: "SECURITY & CONFIDENTIALITY",
      items: [
        "100% secure handling of information and images.",
        "No sharing without your informed consent.",
        "We uphold the Personal Data Protection Act (PDPA).",
        "Non-Disclosure Agreement (NDA) signed with clients.",
      ],
    },
    {
      title: "HIGH-END EDITING & RETOUCHING",
      items: [
        "Cost-effective clipping path service starting at $0.40 USD.",
        "24/7 production facility including holidays.",
        "Guaranteed service availability even during Christmas.",
        "Reliable image editing solutions for outsourcing clients.",
      ],
    },
    {
      title: "OUR STORY",
      items: [
        "Meta Clipping Studio is a Multinational Firm.",
        "Specializing in Image Editing, SEO Marketing, Video Production.",
        "Also offers Web-Development and Online Marketing services.",
        "Located in Dhaka, Bangladesh.",
      ],
    },
    {
      title: "ISO 9001:2015 CERTIFIED",
      items: [
        "Committed to quality management and continuous improvement.",
        "Ensures consistent service delivery and customer satisfaction.",
        "Adheres to international standards for quality assurance.",
        "Regular audits to maintain certification status.",
      ],
    },
    {
      title: "OUR SERVICES",
      items: [
        "Clipping Path, Image Masking, Background Removal.",
        "E-commerce Photo Editing, Shadow Creation, Color Correction.",
        "Photo Retouching, Ghost Mannequin, Real Estate Photo Editing.",
        "Raster To Vector Conversion.",
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
    text: "ISO 9001:2015 Certified",
  },
};

export const servicesContent = {
  title: "OUR SERVICES",
  services: [
    {
      title: "Clipping Path / Deep Etching / Silo",
      description:
        "We cut out a 2D image using the Photoshop Pen Tool to deliver precise, clean, and professional outputs.",
      image: "/p-1.webp",
      link: "#",
    },
    {
      title: "Ghost Mannequin / 3D Mannequin",
      description:
        "Combine multiple images to create a realistic invisible mannequin effect for apparel products.",
      image: "/p-2.jpg",
      link: "#",
    },
    {
      title: "Real Estate Photo Editing",
      description:
        "Enhance property photos to attract buyers by adjusting lighting, color, and clarity for a professional look.",
      image: "/p-3.jpg",
      link: "#",
    },
    {
      title: "3D Modeling and Rendering",
      description:
        "Perfect product visuals by removing flaws, fixing shape issues, and adding realistic textures and lighting.",
      image: "/p-4.jpg",
      link: "#",
    },
    {
      title: "Photo Retouching / On-Model / Fashion",
      description:
        "Retouch fashion and on-model shots by removing blemishes, adjusting symmetry, and enhancing overall appearance.",
      image: "/p-1.webp",
      link: "#",
    },
    {
      title: "Recoloring",
      description:
        "Display all available product color variants efficiently through our expert recoloring workflow.",
      image: "/p-2.jpg",
      link: "#",
    },
    {
      title: "Shadow & Reflection",
      description:
        "Maintain realism by preserving or adding natural shadows, drop shadows, and reflections to product images.",
      image: "/p-3.jpg",
      link: "#",
    },
    {
      title: "eCommerce Editing Services",
      description:
        "High-quality image editing services tailored for eCommerce platforms to deliver pixel-perfect visuals.",
      image: "/p-4.jpg",
      link: "#",
    },
    {
      title: "Color Correction / Adjustment",
      description:
        "Ensure consistent and accurate color across your product catalog by fixing color values and tone mismatches.",
      image: "/p-1.webp",
      link: "#",
    },
    {
      title: "Image Masking",
      description:
        "Advanced masking techniques to isolate subjects with complex edges like hair, fur, or fabrics.",
      image: "/p-2.jpg",
      link: "#",
    },
    {
      title: "Automotive Editing",
      description:
        "Expert editing for car images, including background removal, color correction, reflections, and detail enhancement.",
      image: "/p-3.jpg",
      link: "#",
    },
    {
      title: "Only Edited",
      description:
        "Quick and clean edits using the Pen Tool to deliver ready-to-use product cutouts with no extra effects.",
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
        "eCommerce Editing Services – Enhancing Product Images for Maximum Impact",
      category: "Uncategorized",
      image: "/showcase/gallery2.jpg",
      link: "#",
    },
    {
      title: "Shadow & Reflection Effects: Making Images Look More Realistic",
      category: "Uncategorized",
      image: "/showcase/gallery3.jpg",
      link: "#",
    },
    {
      title: "Recoloring Services: Transforming Images with Precision",
      category: "Recoloring",
      image: "/showcase/gallery4.jpg",
      link: "#",
    },
    {
      title: "Photo Retouching for Fashion & On-Model Photography",
      category: "Fashion",
      image: "/showcase/gallery2.jpg",
      link: "#",
    },
    {
      title: "3D Modeling and Rendering Services by Advanced Innovation BD",
      category: "3D Modeling and Rendering",
      image: "/showcase/gallery3.jpg",
      link: "#",
    },
    {
      title:
        "Real Estate Photo Editing: Transforming Property Images for Maximum Impact",
      category: "Real-Estate Photo Editing",
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
    { name: "SERVICES", url: "" },
    { name: "GALLERY", url: "/gallery" },
    { name: "ABOUT US", url: "/about" },
    { name: "PRICING", url: "/pricing" },
    { name: "FREE TRIAL", url: "/free-trial" },
    { name: "CONTACT US", url: "/contact" },
  ],
};
