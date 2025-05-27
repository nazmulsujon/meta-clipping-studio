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
    href: "/#services",
    dropdown: true,
    items: [
      {
        label: "Real-Estate Photo Editing",
        href: "real-estate-editing",
        icon: Camera,
      },
      {
        label: "Color Correction/Adjustment",
        href: "color-correction",
        icon: Palette,
      },
      {
        label: "eCommerce Editing Services",
        href: "ecommerce-editing",
        icon: ShoppingCart,
      },
      {
        label: "Automotive",
        href: "automotive-editing",
        icon: Car,
      },
      {
        label: "Masking",
        href: "masking",
        icon: Layers,
      },
      {
        label: "Only Edited",
        href: "only-edited",
        icon: CheckCircle,
      },
      {
        label: "Shadow & Reflection",
        href: "shadow-reflection",
        icon: Sparkles,
      },
      {
        label: "3D Modeling and Rendering Services",
        href: "3d-modeling-rendering",
        icon: Cube,
      },
      {
        label: "Photo Retouching/On-Model/Fashion etc.",
        href: "photo-retouching",
        icon: ImageIcon,
      },
      {
        label: "Ghost/3D Mannequin",
        href: "ghost-mannequin",
        icon: Ghost,
      },
      {
        label: "Clipping Path/Deep etching/Silo",
        href: "clipping-path",
        icon: Scissors,
      },
      {
        label: "Recoloring",
        href: "recoloring",
        icon: Paintbrush,
      },
    ],
  },
  { label: "GALLERY", href: "/#gallery" },
  { label: "ABOUT US", href: "/#about" },
  { label: "PRICING", href: "/pricing" },
  { label: "FREE TRIAL", href: "/#free-trial" },
  { label: "CONTACT US", href: "/#contact" },
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
  {
    title: "Visual Content for eCommerce",
    description: "Where little touches of excellence makes the difference",
    image: "/Banner-3.webp",
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
      slug: "#",
      content: "",
    },
    {
      title: "Ghost Mannequin / 3D Mannequin",
      description:
        "Combine multiple images to create a realistic invisible mannequin effect for apparel products.",
      image: "/p-2.jpg",
      slug: "#",
      content: "",
    },
    {
      title: "Real Estate Photo Editing",
      description:
        "Enhance property photos to attract buyers by adjusting lighting, color, and clarity for a professional look.",
      image: "/p-3.jpg",
      slug: "#",
      content: "",
    },
    {
      title: "3D Modeling and Rendering",
      description:
        "Perfect product visuals by removing flaws, fixing shape issues, and adding realistic textures and lighting.",
      image: "/p-4.jpg",
      slug: "#",
      content: "",
    },
    {
      title: "Photo Retouching / On-Model / Fashion",
      description:
        "Retouch fashion and on-model shots by removing blemishes, adjusting symmetry, and enhancing overall appearance.",
      image: "/p-1.webp",
      slug: "#",
      content: "",
    },
    {
      title: "Recoloring",
      description:
        "Display all available product color variants efficiently through our expert recoloring workflow.",
      image: "/p-2.jpg",
      slug: "#",
      content: "",
    },
    {
      title: "Shadow & Reflection",
      description:
        "Maintain realism by preserving or adding natural shadows, drop shadows, and reflections to product images.",
      image: "/p-3.jpg",
      slug: "#",
      content: "",
    },
    {
      title: "eCommerce Editing Services",
      description:
        "High-quality image editing services tailored for eCommerce platforms to deliver pixel-perfect visuals.",
      image: "/p-4.jpg",
      slug: "#",
      content: "",
    },
    {
      title: "Color Correction / Adjustment",
      description:
        "Ensure consistent and accurate color across your product catalog by fixing color values and tone mismatches.",
      image: "/p-1.webp",
      slug: "#",
      content: "",
    },
    {
      title: "Image Masking",
      description:
        "Advanced masking techniques to isolate subjects with complex edges like hair, fur, or fabrics.",
      image: "/p-2.jpg",
      slug: "#",
      content: "",
    },
    {
      title: "Automotive Editing",
      description:
        "Expert editing for car images, including background removal, color correction, reflections, and detail enhancement.",
      image: "/p-3.jpg",
      slug: "#",
      content: "",
    },
    {
      title: "Only Edited",
      description:
        "Quick and clean edits using the Pen Tool to deliver ready-to-use product cutouts with no extra effects.",
      image: "/p-4.jpg",
      slug: "#",
      content: "",
    },
  ],
};

export const servicesDetailsData = [
  {
    title: "Real-Estate Photo Editing",
    slug: "real-estate-editing",
    description:
      "Real estate photo editing service is critical when it’s time to attract its buyer like all other product photos. We make it look perfect.",
    bannerImages: ["/p-1.webp", "/p-2.jpg", "/p-3.jpg", "/p-1.webp"],
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
      {
        id: "image-10",
        src: "/showcase/gallery3.jpg",
        alt: "Showcase image 2",
      },
      {
        id: "image-11",
        src: "/showcase/gallery4.jpg",
        alt: "Showcase image 3",
      },
      {
        id: "image-12",
        src: "/showcase/gallery2.jpg",
        alt: "Showcase image 4",
      },
    ],
  },
  {
    title: "Color Correction/Adjustment",
    slug: "color-correction",
    description:
      "Enhance the visual appeal of your images by adjusting tones, brightness, contrast, and white balance.",
    bannerImages: ["/p-1.webp", "/p-2.jpg", "/p-3.jpg", "/p-1.webp"],
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
      {
        id: "image-10",
        src: "/showcase/gallery3.jpg",
        alt: "Showcase image 2",
      },
      {
        id: "image-11",
        src: "/showcase/gallery4.jpg",
        alt: "Showcase image 3",
      },
      {
        id: "image-12",
        src: "/showcase/gallery2.jpg",
        alt: "Showcase image 4",
      },
    ],
  },
  {
    title: "eCommerce Editing Services",
    slug: "ecommerce-editing",
    description:
      "Professional editing for product images that convert more customers and align with platform guidelines.",
    bannerImages: ["/p-1.webp", "/p-2.jpg", "/p-3.jpg", "/p-1.webp"],
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
      {
        id: "image-10",
        src: "/showcase/gallery3.jpg",
        alt: "Showcase image 2",
      },
      {
        id: "image-11",
        src: "/showcase/gallery4.jpg",
        alt: "Showcase image 3",
      },
      {
        id: "image-12",
        src: "/showcase/gallery2.jpg",
        alt: "Showcase image 4",
      },
    ],
  },
  {
    title: "Automotive",
    slug: "automotive-editing",
    description:
      "High-end automotive retouching services to make your vehicle images more captivating and dynamic.",
    bannerImages: ["/p-1.webp", "/p-2.jpg", "/p-3.jpg", "/p-1.webp"],
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
      {
        id: "image-10",
        src: "/showcase/gallery3.jpg",
        alt: "Showcase image 2",
      },
      {
        id: "image-11",
        src: "/showcase/gallery4.jpg",
        alt: "Showcase image 3",
      },
      {
        id: "image-12",
        src: "/showcase/gallery2.jpg",
        alt: "Showcase image 4",
      },
    ],
  },
  {
    title: "Masking",
    slug: "masking",
    description:
      "Professional image masking service to remove complex backgrounds and isolate objects with precision.",
    bannerImages: ["/p-1.webp", "/p-2.jpg", "/p-3.jpg", "/p-1.webp"],
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
      {
        id: "image-10",
        src: "/showcase/gallery3.jpg",
        alt: "Showcase image 2",
      },
      {
        id: "image-11",
        src: "/showcase/gallery4.jpg",
        alt: "Showcase image 3",
      },
      {
        id: "image-12",
        src: "/showcase/gallery2.jpg",
        alt: "Showcase image 4",
      },
    ],
  },
  {
    title: "Only Edited",
    slug: "only-edited",
    description:
      "Receive only the edited version of your submitted images, fine-tuned to your specifications.",
    bannerImages: ["/p-1.webp", "/p-2.jpg", "/p-3.jpg", "/p-1.webp"],
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
      {
        id: "image-10",
        src: "/showcase/gallery3.jpg",
        alt: "Showcase image 2",
      },
      {
        id: "image-11",
        src: "/showcase/gallery4.jpg",
        alt: "Showcase image 3",
      },
      {
        id: "image-12",
        src: "/showcase/gallery2.jpg",
        alt: "Showcase image 4",
      },
    ],
  },
  {
    title: "Shadow & Reflection",
    slug: "shadow-reflection",
    description:
      "Create natural-looking shadows and reflections to make your products look grounded and realistic.",
    bannerImages: ["/p-1.webp", "/p-2.jpg", "/p-3.jpg", "/p-1.webp"],
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
      {
        id: "image-10",
        src: "/showcase/gallery3.jpg",
        alt: "Showcase image 2",
      },
      {
        id: "image-11",
        src: "/showcase/gallery4.jpg",
        alt: "Showcase image 3",
      },
      {
        id: "image-12",
        src: "/showcase/gallery2.jpg",
        alt: "Showcase image 4",
      },
    ],
  },
  {
    title: "3D Modeling and Rendering Services",
    slug: "3d-modeling-rendering",
    description:
      "Build photorealistic 3D models and renders that help visualize your products before production.",
    bannerImages: ["/p-1.webp", "/p-2.jpg", "/p-3.jpg", "/p-1.webp"],
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
      {
        id: "image-10",
        src: "/showcase/gallery3.jpg",
        alt: "Showcase image 2",
      },
      {
        id: "image-11",
        src: "/showcase/gallery4.jpg",
        alt: "Showcase image 3",
      },
      {
        id: "image-12",
        src: "/showcase/gallery2.jpg",
        alt: "Showcase image 4",
      },
    ],
  },
  {
    title: "Photo Retouching/On-Model/Fashion etc.",
    slug: "photo-retouching",
    description:
      "High-end fashion and model photo retouching that enhances beauty and corrects imperfections.",
    bannerImages: ["/p-1.webp", "/p-2.jpg", "/p-3.jpg", "/p-1.webp"],
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
      {
        id: "image-10",
        src: "/showcase/gallery3.jpg",
        alt: "Showcase image 2",
      },
      {
        id: "image-11",
        src: "/showcase/gallery4.jpg",
        alt: "Showcase image 3",
      },
      {
        id: "image-12",
        src: "/showcase/gallery2.jpg",
        alt: "Showcase image 4",
      },
    ],
  },
  {
    title: "Ghost/3D Mannequin",
    slug: "ghost-mannequin",
    description:
      "Combine several images of a garment to create an invisible mannequin look.",
    bannerImages: ["/p-1.webp", "/p-2.jpg", "/p-3.jpg", "/p-1.webp"],
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
      {
        id: "image-10",
        src: "/showcase/gallery3.jpg",
        alt: "Showcase image 2",
      },
      {
        id: "image-11",
        src: "/showcase/gallery4.jpg",
        alt: "Showcase image 3",
      },
      {
        id: "image-12",
        src: "/showcase/gallery2.jpg",
        alt: "Showcase image 4",
      },
    ],
  },
  {
    title: "Clipping Path/Deep etching/Silo",
    slug: "clipping-path",
    description:
      "Precise clipping path services to remove backgrounds and highlight your subjects with clean edges.",
    bannerImages: ["/p-1.webp", "/p-2.jpg", "/p-3.jpg", "/p-1.webp"],
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
      {
        id: "image-10",
        src: "/showcase/gallery3.jpg",
        alt: "Showcase image 2",
      },
      {
        id: "image-11",
        src: "/showcase/gallery4.jpg",
        alt: "Showcase image 3",
      },
      {
        id: "image-12",
        src: "/showcase/gallery2.jpg",
        alt: "Showcase image 4",
      },
    ],
  },
  {
    title: "Recoloring",
    slug: "recoloring",
    description:
      "Recolor your product photos to offer variety or match your branding without reshooting.",
    bannerImages: ["/p-1.webp", "/p-2.jpg", "/p-3.jpg", "/p-1.webp"],
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
      {
        id: "image-10",
        src: "/showcase/gallery3.jpg",
        alt: "Showcase image 2",
      },
      {
        id: "image-11",
        src: "/showcase/gallery4.jpg",
        alt: "Showcase image 3",
      },
      {
        id: "image-12",
        src: "/showcase/gallery2.jpg",
        alt: "Showcase image 4",
      },
    ],
  },
];

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
      description:
        "Introduction In today’s digital marketplace, high-quality product images play a crucial role in attracting customers and driving sales. eCommerce businesses",
      category: "eCommerce Editing",
      image: "/blogs/b-1.jpg",
      slug: "ecommerce-editing-services",
      content: `
        <h2>Introduction</h2>
        <p>In today’s digital marketplace, high-quality product images play a crucial role in attracting customers and driving sales. eCommerce businesses rely on professional image editing services to make their products stand out. Advanced Innovation BD provides top-tier eCommerce image editing services to ensure your products look professional, consistent, and appealing to potential buyers.</p>

        <h3>Key eCommerce Image Editing Services</h3>
        <ul>
          <li><strong>1. Clipping Path & Background Removal</strong><br/>
          Ensures a clean and distraction-free product image. Ideal for platforms like Amazon, eBay, and Shopify.</li>

          <li><strong>2. Image Retouching & Enhancement</strong><br/>
          Includes color correction, blemish removal, and lighting adjustments for a polished look.</li>

          <li><strong>3. Ghost Mannequin & Neck Joint Services</strong><br/>
          Display clothing in a 3D-like appearance without mannequins.</li>

          <li><strong>4. Shadow & Reflection Effects</strong><br/>
          Adds natural depth and professionalism through shadows and reflections.</li>

          <li><strong>5. Color Correction & Color Variants</strong><br/>
          Creates consistent and accurate color options for products.</li>

          <li><strong>6. Product Image Resizing & Optimization</strong><br/>
          Optimizes image sizes for fast-loading websites while maintaining quality.</li>
        </ul>

        <h3>Why Choose Advanced Innovation BD?</h3>
        <ul>
          <li>✅ High-Quality Edits</li>
          <li>✅ Fast Turnaround Time</li>
          <li>✅ Affordable Pricing</li>
          <li>✅ Bulk Editing Support</li>
        </ul>

        <p><strong>Get Started Today!</strong><br/>
        Transform your product images with professional eCommerce editing services from Advanced Innovation BD. Contact us today to get a free quote and take your online store to the next level! 🚀</p>
      `,
    },
    {
      title: "Shadow & Reflection Effects: Making Images Look More Realistic",
      description:
        "Introduction In the competitive world of digital marketing, e-commerce, and professional photography, high-quality images play a crucial role in attracting",
      category: "Uncategorized",
      image: "/blogs/b-2.webp",
      slug: "shadow-reflection-effects",
      content: `
        <h2>Introduction</h2>
        <p>In the competitive world of digital marketing, e-commerce, and professional photography, high-quality images play a crucial role in attracting customers. One of the most effective ways to enhance product images and make them look more appealing is by adding shadow and reflection effects. These techniques help in creating a natural, professional, and realistic look for product images, making them stand out.</p>

        <p>At Advanced Innovation BD, we specialize in providing high-quality shadow and reflection effects to ensure your images appear more engaging, polished, and professional.</p>

        <h3>Why Are Shadows and Reflections Important?</h3>
        <ul>
          <li>Create depth and realism</li>
          <li>Improve product presentation</li>
          <li>Enhance branding and marketing visuals</li>
        </ul>

        <h3>Types of Shadow Effects</h3>
        <ul>
          <li><strong>Drop Shadow:</strong> Creates a floating effect. Best for apparel and electronics.</li>
          <li><strong>Natural Shadow:</strong> Simulates real-world lighting. Best for shoes and furniture.</li>
          <li><strong>Floating Shadow:</strong> Gives elevation and depth. Best for tech gadgets and books.</li>
          <li><strong>Reflection Shadow (Mirror Effect):</strong> Adds a glass-like reflection. Best for jewelry and luxury products.</li>
        </ul>

        <h3>How We Do It</h3>
        <ol>
          <li>Analyze the Image</li>
          <li>Manual Shadow Creation</li>
          <li>Blending & Refinement</li>
          <li>Final Touches</li>
        </ol>

        <h3>Benefits</h3>
        <ul>
          <li>✔ Enhances product appeal</li>
          <li>✔ Increases brand credibility</li>
          <li>✔ Improves sales conversion</li>
        </ul>

        <h3>Why Choose Us?</h3>
        <ul>
          <li>🔹 Experienced Editors</li>
          <li>🔹 High-Quality Output</li>
          <li>🔹 Fast Turnaround</li>
          <li>🔹 Affordable Rates</li>
        </ul>

        <p><strong>Get Started Today!</strong> Contact Advanced Innovation BD for a free trial or consultation.</p>
      `,
    },
    {
      title: "Recoloring Services: Transforming Images with Precision",
      description:
        "What is Image Recoloring? Image recoloring is the process of changing or adjusting the colors of an image to enhance",
      category: "Recoloring",
      image: "/blogs/b-3.jpg",
      slug: "recoloring-services",
      content: `
        <h2>What is Image Recoloring?</h2>
        <p>Image recoloring is the process of changing or adjusting the colors of an image to enhance its visual appeal or meet specific branding requirements. This service is widely used in e-commerce, fashion, advertising, and product photography to create multiple color variations without reshooting the product.</p>

        <h3>Why is Image Recoloring Important?</h3>
        <ul>
          <li>Ensures branding consistency</li>
          <li>Reduces the need for multiple photoshoots</li>
          <li>Enhances product display</li>
          <li>Enables easy presentation of color variants</li>
        </ul>

        <h3>Industries That Benefit</h3>
        <ul>
          <li>E-commerce & Retail</li>
          <li>Fashion & Apparel</li>
          <li>Automobile & Manufacturing</li>
          <li>Marketing & Advertising</li>
        </ul>

        <h3>Types of Recoloring Services</h3>
        <ul>
          <li><strong>Product Recoloring:</strong> Showcase different color options</li>
          <li><strong>Fashion & Apparel Recoloring:</strong> Display clothing and accessories in multiple shades</li>
          <li><strong>Skin Tone & Makeup Recoloring:</strong> Demonstrate various makeup tones on models</li>
          <li><strong>Artwork & More:</strong> Custom recoloring to fit creative needs</li>
        </ul>

        <p><strong>Ready to Transform Your Images?</strong><br/>
        Contact Advanced Innovation BD today and discover how our recoloring services can improve your visual content!</p>
      `,
    },
    {
      title: "Photo Retouching for Fashion & On-Model Photography",
      description:
        "Elevate your fashion visuals with expert retouching services by Meta Clipping Studio. We enhance model photography for brands, photographers, and e-commerce.",
      category: "Fashion Retouching",
      image: "/blogs/b-4.jpg",
      slug: "fashion-photo-retouching",
      content: `
        <h2>Elevate Your Fashion Photography with Professional Retouching</h2>
        <p>In the fashion industry, captivating visuals are key to showcasing clothing, accessories, and models. At Meta Clipping Studio, we provide premium photo retouching services tailored for fashion brands, photographers, and online retailers.</p>

        <h3>Key Aspects of Fashion Photo Retouching</h3>
        <ul>
          <li><strong>Skin Retouching & Beauty Enhancement:</strong> Natural skin smoothening, blemish removal, digital makeup, and facial feature enhancement.</li>
          <li><strong>Clothing Retouching:</strong> Remove wrinkles and enhance textures and colors for a polished look.</li>
          <li><strong>On-Model Adjustments:</strong> Subtle body correction, posture refinement, and lighting enhancement.</li>
          <li><strong>Color Grading:</strong> Professional exposure, tone, and white balance correction for consistent branding.</li>
          <li><strong>Background Enhancements:</strong> Remove distractions, clean backgrounds, and add depth.</li>
          <li><strong>High-End Retouching:</strong> Magazine-quality edits using frequency separation and dodge & burn techniques.</li>
        </ul>

        <h3>Why Choose Meta Clipping Studio?</h3>
        <ul>
          <li>✔ Experienced Retouchers in Fashion and Editorial Work</li>
          <li>✔ Natural, Realistic Results</li>
          <li>✔ Fast Turnaround for Tight Deadlines</li>
          <li>✔ Custom Retouching Tailored to Your Brand</li>
        </ul>

        <p><strong>Contact Meta Clipping Studio</strong> today to enhance your fashion imagery with professional and precise retouching services.</p>
      `,
    },
    {
      title: "3D Modeling and Rendering Services",
      description:
        "Meta Clipping Studio offers high-quality 3D modeling and photorealistic rendering for products, architecture, and animations across industries.",
      category: "3D Design",
      image: "/blogs/b-5.jpg",
      slug: "3d-modeling-rendering-services",
      content: `
        <h2>Introduction to 3D Modeling and Rendering</h2>
        <p>Meta Clipping Studio provides expert 3D modeling and rendering solutions for diverse industries including architecture, gaming, and e-commerce. Our creative team crafts accurate, high-quality visuals to bring your concepts to life.</p>

        <h3>3D Modeling Services</h3>
        <ul>
          <li>Product Models – Showcase items with precision in e-commerce and advertising.</li>
          <li>Architectural Models – Realistic interior and exterior modeling for real estate and design projects.</li>
          <li>Character Models – Custom designs for gaming, branding, and animation.</li>
          <li>Industrial Models – Prototyping and machinery visualization for engineering and manufacturing.</li>
        </ul>

        <h3>3D Rendering Services</h3>
        <ul>
          <li>Product Rendering – Lifelike images for marketing and e-stores.</li>
          <li>Architectural Rendering – Photorealistic visuals of homes, buildings, and layouts.</li>
          <li>Animated Rendering – 3D walkthroughs and motion visuals.</li>
        </ul>

        <h3>Industries We Serve</h3>
        <ul>
          <li>✅ E-commerce & Retail</li>
          <li>✅ Real Estate & Architecture</li>
          <li>✅ Gaming & Animation</li>
          <li>✅ Manufacturing & Engineering</li>
        </ul>

        <p><strong>Why Meta Clipping Studio?</strong> We combine creativity with technical expertise using Blender, 3ds Max, and Maya to deliver professional 3D outcomes. Fast turnaround and competitive pricing guaranteed.</p>

        <p><strong>Get a Free Consultation</strong> and let us help you visualize your next big idea in 3D!</p>
      `,
    },
    {
      title: "Real Estate Photo Editing: Transforming Property Images",
      description:
        "Boost your property listings with expert real estate photo editing services from Meta Clipping Studio. HDR, sky replacement, and virtual staging included.",
      category: "Real Estate Editing",
      image: "/blogs/b-6.jpg",
      slug: "real-estate-photo-editing",
      content: `
        <h2>Introduction</h2>
        <p>At Meta Clipping Studio, we transform ordinary property photos into market-ready visuals. Our real estate photo editing services help listings stand out and drive sales faster with premium enhancements.</p>

        <h3>Top Services We Offer</h3>
        <ul>
          <li><strong>Image Enhancement:</strong> Adjust brightness, sharpness, contrast, and color for stunning clarity.</li>
          <li><strong>Sky Replacement:</strong> Swap dull skies with vibrant, sunny backgrounds to elevate appeal.</li>
          <li><strong>HDR Blending:</strong> Combine multiple exposures for well-lit, detailed images.</li>
          <li><strong>Virtual Staging:</strong> Add digital furniture and decor to empty rooms.</li>
          <li><strong>Object Removal:</strong> Eliminate wires, clutter, and distractions for a clean finish.</li>
          <li><strong>Window View Fixes:</strong> Balance interior and exterior exposures for a clear view.</li>
          <li><strong>Lawn & Garden Enhancement:</strong> Improve greenery and outdoor aesthetics.</li>
          <li><strong>3D Floor Plan & Visualization:</strong> Help buyers visualize space and layout better.</li>
        </ul>

        <h3>Why Meta Clipping Studio?</h3>
        <ul>
          <li>✅ Skilled Team of Editors</li>
          <li>✅ Fast Delivery (24-48 Hours)</li>
          <li>✅ Affordable Rates</li>
          <li>✅ Satisfaction Guaranteed</li>
        </ul>

        <p>Choose Meta Clipping Studio for top-tier real estate image editing that helps you sell faster. <strong>Contact us today</strong> for a quote!</p>
      `,
    },
  ],
};

export const pricingData = [
  {
    id: 1,
    name: "Clipping Path",
    price: "$0.40 USD per image",
    image: "/p-1.webp",
  },
  {
    id: 2,
    name: "Background Removal",
    price: "$0.50 USD per image",
    image: "/p-2.jpg",
  },
  {
    id: 3,
    name: "Multi-Path",
    price: "$1.50 USD per image",
    image: "/p-3.jpg",
  },
  {
    id: 4,
    name: "Image Retouching",
    price: "$1.50 USD per image",
    image: "/p-1.webp",
  },
  {
    id: 5,
    name: "Shadow Creation",
    price: "$0.50 USD per image",
    image: "/p-2.jpg",
  },
  {
    id: 6,
    name: "Reflection Creation",
    price: "$0.50 USD per image",
    image: "/p-2.jpg",
  },
  {
    id: 7,
    name: "Color Correction",
    price: "$0.50 USD per image",
    image: "/p-3.jpg",
  },
  {
    id: 8,
    name: "Image Masking",
    price: "$1.00 USD per image",
    image: "/p-1.webp",
  },
  {
    id: 9,
    name: "Ghost Mannequin",
    price: "$1.20 USD per image",
    image: "/p-2.jpg",
  },
  {
    id: 10,
    name: "Automotive (Vehicles)",
    price: "$0.60 USD per image",
    image: "/p-1.webp",
  },
  {
    id: 11,
    name: "Image Manipulation (based on complexity level)",
    price: "$5.00+ USD per image",
    image: "/p-3.jpg",
  },
  {
    id: 12,
    name: "Raster to Vector Conversion",
    price: "$5.00+ USD per image",
    image: "/p-2.jpg",
  },
];

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
