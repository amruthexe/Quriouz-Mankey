import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote:
                "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Haswitha",
            designation: "Product Manager at TechFlow",
            src: "/t1.jpg",
        },
        {
            quote:
                "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Gowthami",
            designation: "CTO at InnovateSphere",
            src: "/t2.jpg",
        },
        {
            quote:
                "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Ashok",
            designation: "Operations Director at CloudScale",
            src: "/t3.jpg",
        },
        {
            quote:
                "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
            name: "Steven Son",
            designation: "Engineering Lead at DataPro",
            src: "/t4.jpg",
        },
        {
            quote:
                "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
            name: "Siddu ",
            designation: "VP of Technology at FutureNet",
            src: "/t5.jpg",
        },{
            "quote": "The platform has revolutionized the way we deliver education. It's intuitive, scalable, and supports our rapid growth.",
            "name": "Vivek",
            "designation": "Working at Tech Mahindra",
            "src": "/t6.png"
        }
        
    ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
