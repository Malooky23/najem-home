// import { Mail, MapPin, Phone, PhoneIcon as WhatsApp } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Ship } from "@/components/ship" // Import the Ship component

// const Container = ({ className }: { className?: string }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <rect x="1" y="6" width="22" height="12" rx="2" />
//     <path d="M1 10h22" />
//   </svg>
// )

// const ShipForward = ({ className }: { className?: string }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M18 15s-2-4-6-4-6 4-6 4" />
//     <path d="M12 7v4" />
//     <path d="M4.93 7.93 8 11" />
//     <path d="M19.07 7.93 16 11" />
//     <path d="m16 21 2-2-2-2" />
//     <path d="M3 3v18h18" />
//   </svg>
// )

// const CustomsClearance = ({ className }: { className?: string }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
//     <path d="M14 2v6h6" />
//     <path d="M16 13H8" />
//     <path d="M16 17H8" />
//     <path d="M10 9H8" />
//   </svg>
// )

// const CarTransport = ({ className }: { className?: string }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M10 17h4V5H2v12h3" />
//     <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
//     <path d="M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
//     <path d="M17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
//   </svg>
// )

// const services = [
//   {
//     icon: Container,
//     title: "Container Shipping",
//     description: "Efficient container shipping services for businesses with large-scale logistics needs.",
//   },
//   {
//     icon: ShipForward,
//     title: "Freight Forwarding",
//     description: "Expert consolidation services for import/export, ensuring efficient handling of your cargo.",
//   },
//   {
//     icon: CustomsClearance,
//     title: "Customs Clearance",
//     description: "Comprehensive customs clearance solutions to streamline your shipping process.",
//   },
//   {
//     icon: CarTransport,
//     title: "Car Transportation",
//     description: "Worldwide car transport services with all necessary paperwork handled for you.",
//   },
// ]

// export default function Page() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//         <div className="container flex h-16 items-center justify-between">
//           <div className="flex items-center gap-8">
//             {/* <Image
//               // src="/logo.png"
//               alt="Najem Aleen Shipping Logo"
//               width={180}
//               height={50}
//               className="h-10 w-auto"
//             /> */}
//             <nav className="hidden gap-6 md:flex">
//               <Link
//                 href="#services"
//                 className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
//               >
//                 Services123123
//               </Link>
//               <Link
//                 href="#about"
//                 className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
//               >
//                 About
//               </Link>
//               <Link
//                 href="#contact"
//                 className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
//               >
//                 Contact
//               </Link>
//             </nav>
//           </div>
//           <div className="flex items-center gap-4">
//             <Button variant="ghost" className="hidden md:flex">
//               العربية
//             </Button>
//             <Button className="bg-secondary hover:bg-secondary/90">Get a Quote</Button>
//           </div>
//         </div>
//       </header>

//       <main className="flex-1">
//         <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
//           <div className="container relative py-12 md:py-24 lg:py-32">
//             <div className="grid gap-12 md:grid-cols-2">
//               <div className="flex flex-col justify-center space-y-4">
//                 <div className="space-y-2">
//                   <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
//                     Comprehensive Logistics Services in the UAE
//                   </h1>
//                   <p className="max-w-[600px] text-muted-foreground md:text-xl">
//                     Expert container shipping, freight forwarding, and customs clearance solutions for businesses.
//                   </p>
//                 </div>
//                 <div className="flex flex-col gap-3 min-[400px]:flex-row">
//                   <Button
//                     size="lg"
//                     className="group relative overflow-hidden bg-primary px-8 py-6 transition-all hover:bg-primary/90"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-secondary opacity-0 transition-opacity group-hover:opacity-100" />
//                     <span className="relative">Contact Us</span>
//                   </Button>
//                   <Button
//                     variant="outline"
//                     size="lg"
//                     className="border-secondary px-8 py-6 text-secondary hover:bg-secondary/10 hover:text-secondary"
//                   >
//                     Learn More
//                   </Button>
//                 </div>
//               </div>
//               <div className="relative flex items-center justify-center">
//                 <div className="absolute -right-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-secondary/10" />
//                 <div className="absolute -left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/10" />
//                 <Ship className="relative h-64 w-64 text-primary" strokeWidth={1} />
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="container py-12 md:py-24 lg:py-32" id="services">
//           <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
//             <h2 className="text-3xl font-bold leading-tight tracking-tighter text-primary md:text-5xl lg:leading-[1.1]">
//               Our Services
//             </h2>
//             <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
//               At Najem Aleen Shipping, we specialize in container shipping, freight forwarding, and comprehensive
//               customs clearance solutions.
//             </p>
//           </div>
//           <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
//             {services.map((service, index) => (
//               <Card key={index} className="group relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
//                 <CardContent className="relative p-6">
//                   <div className="space-y-4">
//                     <service.icon className="h-12 w-12 text-secondary" />
//                     <h3 className="text-xl font-bold text-primary">{service.title}</h3>
//                     <p className="text-sm text-muted-foreground">{service.description}</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </section>

//         <section className="border-t bg-gradient-to-b from-white to-blue-50" id="contact">
//           <div className="container py-12 md:py-24 lg:py-32">
//             <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
//               <h2 className="text-3xl font-bold leading-tight tracking-tighter text-primary md:text-5xl lg:leading-[1.1]">
//                 Contact Us
//               </h2>
//               <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
//                 Get in touch for efficient logistics solutions
//               </p>
//             </div>
//             <div className="mx-auto grid max-w-4xl gap-8 py-12 md:grid-cols-2">
//               <Button
//                 size="lg"
//                 className="group relative h-auto overflow-hidden border-primary p-6 hover:border-primary/80"
//                 variant="outline"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/0 transition-colors group-hover:from-primary/10" />
//                 <Phone className="h-6 w-6 text-primary" />
//                 <div className="relative ml-4 flex flex-col items-start">
//                   <span className="text-lg font-semibold text-primary">Click to Call Now</span>
//                   <span className="text-sm text-muted-foreground">Available 24/7</span>
//                 </div>
//               </Button>
//               <Button
//                 size="lg"
//                 className="group relative h-auto overflow-hidden border-secondary p-6 hover:border-secondary/80"
//                 variant="outline"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-secondary/0 transition-colors group-hover:from-secondary/10" />
//                 <WhatsApp className="h-6 w-6 text-secondary" />
//                 <div className="relative ml-4 flex flex-col items-start">
//                   <span className="text-lg font-semibold text-secondary">Contact via WhatsApp</span>
//                   <span className="text-sm text-muted-foreground">Quick Response</span>
//                 </div>
//               </Button>
//               <Button
//                 size="lg"
//                 className="group relative h-auto overflow-hidden border-primary p-6 hover:border-primary/80"
//                 variant="outline"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/0 transition-colors group-hover:from-primary/10" />
//                 <MapPin className="h-6 w-6 text-primary" />
//                 <div className="relative ml-4 flex flex-col items-start">
//                   <span className="text-lg font-semibold text-primary">Find us on Google Maps</span>
//                   <span className="text-sm text-muted-foreground">Get Directions</span>
//                 </div>
//               </Button>
//               <Button
//                 size="lg"
//                 className="group relative h-auto overflow-hidden border-secondary p-6 hover:border-secondary/80"
//                 variant="outline"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-secondary/0 transition-colors group-hover:from-secondary/10" />
//                 <Mail className="h-6 w-6 text-secondary" />
//                 <div className="relative ml-4 flex flex-col items-start">
//                   <span className="text-lg font-semibold text-secondary">Email Us</span>
//                   <span className="text-sm text-muted-foreground">sales@najemaleen.com</span>
//                 </div>
//               </Button>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="border-t bg-gradient-to-b from-blue-50 to-white">
//         <div className="container flex h-16 items-center justify-between">
//           <p className="text-sm text-muted-foreground">© 2024 Najem Aleen Shipping. All rights reserved.</p>
//           <nav className="flex gap-4 sm:gap-6">
//             <Link href="#" className="text-sm text-muted-foreground hover:text-secondary">
//               Privacy Policy
//             </Link>
//             <Link href="#" className="text-sm text-muted-foreground hover:text-secondary">
//               Terms of Service
//             </Link>
//           </nav>
//         </div>
//       </footer>
//     </div>
//   )
// }

