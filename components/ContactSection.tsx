// // // // // // import { useTranslations } from "next-intl"
// // // // // // import { Button } from "@/components/ui/button"
// // // // // // import { Mail, MapPin, Phone, PhoneIcon as WhatsApp } from "lucide-react"

// // // // // // export default function ContactSection() {
// // // // // //   const t = useTranslations("Index")

// // // // // //   const contactMethods = [
// // // // // //     { icon: Phone, key: "call", color: "primary" },
// // // // // //     { icon: WhatsApp, key: "whatsApp", color: "secondary" },
// // // // // //     { icon: MapPin, key: "maps", color: "primary" },
// // // // // //     { icon: Mail, key: "email", color: "secondary" },
// // // // // //   ]

// // // // // //   return (
// // // // // //     <section className="border-t bg-gradient-to-b from-white to-blue-50" id="contact">
// // // // // //       <div className="container py-12 md:py-24 lg:py-32">
// // // // // //         <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
// // // // // //           <h2 className="text-3xl font-bold leading-tight tracking-tighter text-primary md:text-5xl lg:leading-[1.1]">
// // // // // //             {t("contactTitle")}
// // // // // //           </h2>
// // // // // //           <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">{t("contactDescription")}</p>
// // // // // //         </div>
// // // // // //         <div className="mx-auto grid max-w-4xl gap-8 py-12 md:grid-cols-2">
// // // // // //           {contactMethods.map((method, index) => (
// // // // // //             <Button
// // // // // //               key={index}
// // // // // //               size="lg"
// // // // // //               className={`group relative h-auto overflow-hidden border-${method.color} p-6 hover:border-${method.color}/80`}
// // // // // //               variant="outline"
// // // // // //             >
// // // // // //               <div
// // // // // //                 className={`absolute inset-0 bg-gradient-to-r from-${method.color}/5 to-${method.color}/0 transition-colors group-hover:from-${method.color}/10`}
// // // // // //               />
// // // // // //               <method.icon className={`h-6 w-6 text-${method.color}`} />
// // // // // //               <div className="relative ml-4 flex flex-col items-start">
// // // // // //                 <span className={`text-lg font-semibold text-${method.color}`}>{t(`${method.key}Now`)}</span>
// // // // // //                 <span className="text-sm text-muted-foreground">
// // // // // //                   {t(`${method.key}${method.key === "email" ? "Address" : "Availability"}`)}
// // // // // //                 </span>
// // // // // //               </div>
// // // // // //             </Button>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   )
// // // // // // }

// // // // // import { useTranslations } from "next-intl"
// // // // // import { Button } from "@/components/ui/button"
// // // // // import { Mail, MapPin, Phone, PhoneIcon as WhatsApp } from "lucide-react"

// // // // // export default function ContactSection() {
// // // // //   const t = useTranslations("Index")

// // // // //   const contactMethods = [
// // // // //     {
// // // // //       icon: Phone,
// // // // //       key: "call",
// // // // //       labelKey: "callNow",
// // // // //       descriptionKey: "callAvailability",
// // // // //       gradient: "bg-gradient-to-r from-primary/10 to-primary/0", // Gradient for background
// // // // //       hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-primary/20 group-hover:to-primary/0", // Hover gradient
// // // // //       borderColor: "border-primary", // Border color
// // // // //       hoverBorderColor: "group-hover:border-primary/80", // Hover border color
// // // // //       iconColor: "text-primary",
// // // // //       textColor: "text-primary",
// // // // //     },
// // // // //     {
// // // // //       icon: WhatsApp,
// // // // //       key: "whatsApp",
// // // // //       labelKey: "whatsAppNow",
// // // // //       descriptionKey: "whatsAppAvailability",
// // // // //       gradient: "bg-gradient-to-r from-green-500/10 to-green-500/0",
// // // // //       hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-green-500/20 group-hover:to-green-500/0",
// // // // //       borderColor: "border-green-500",
// // // // //       hoverBorderColor: "group-hover:border-green-500/80",
// // // // //       iconColor: "text-green-500",
// // // // //       textColor: "text-green-500",
// // // // //     },
// // // // //     {
// // // // //       icon: MapPin,
// // // // //       key: "maps",
// // // // //       labelKey: "mapsNow",
// // // // //       descriptionKey: "mapsAvailability",
// // // // //       gradient: "bg-gradient-to-r from-blue-500/10 to-blue-500/0",
// // // // //       hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-blue-500/0",
// // // // //       borderColor: "border-blue-500",
// // // // //       hoverBorderColor: "group-hover:border-blue-500/80",
// // // // //       iconColor: "text-blue-500",
// // // // //       textColor: "text-blue-500",
// // // // //     },
// // // // //     {
// // // // //       icon: Mail,
// // // // //       key: "email",
// // // // //       labelKey: "emailNow",
// // // // //       descriptionKey: "emailAddress",
// // // // //       gradient: "bg-gradient-to-r from-yellow-500/10 to-yellow-500/0",
// // // // //       hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-yellow-500/20 group-hover:to-yellow-500/0",
// // // // //       borderColor: "border-yellow-500",
// // // // //       hoverBorderColor: "group-hover:border-yellow-500/80",
// // // // //       iconColor: "text-yellow-500",
// // // // //       textColor: "text-yellow-500",
// // // // //     },
// // // // //   ];
// // // // //   return (
// // // // //     <section className="border-t bg-gradient-to-b from-white to-blue-50" id="contact">
// // // // //       <div className="container py-12 md:py-24 lg:py-32">
// // // // //         <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
// // // // //           <h2 className="text-3xl font-bold leading-tight tracking-tighter text-primary md:text-5xl lg:leading-[1.1]">
// // // // //             {t("contactTitle")}
// // // // //           </h2>
// // // // //           <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">{t("contactDescription")}</p>
// // // // //         </div>
// // // // //         <div className="mx-auto grid max-w-4xl gap-8 py-12 md:grid-cols-2">
// // // // //           {contactMethods.map((method) => (
// // // // //             <Button
// // // // //               key={method.key} // Use method.key
// // // // //               size="lg"
// // // // //               className={`group relative h-auto overflow-hidden ${method.borderColor} p-6 transition-colors hover:${method.hoverBorderColor}`} // Correct border classes
// // // // //               variant="outline"
// // // // //             >
// // // // //               <div
// // // // //                 className={`absolute inset-0 transition-opacity duration-300 ${method.gradient} hover:${method.hoverGradient}`} // Correct gradient classes
// // // // //               />
// // // // //               <div className="flex items-center">
// // // // //                 <method.icon className={`h-6 w-6 mr-3 ${method.iconColor}`} />
// // // // //                 <div className="text-left">
// // // // //                   <span className={`text-lg font-semibold block ${method.textColor}`}>{t(method.labelKey)}</span>
// // // // //                   <span className="text-sm text-muted-foreground block">{t(method.descriptionKey)}</span>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </Button>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </section >
// // // // //   )
// // // // // }

// // // // import { useTranslations } from "next-intl"
// // // // import { Button } from "@/components/ui/button"
// // // // import { Mail, MapPin, Phone, PhoneIcon as WhatsApp } from "lucide-react"

// // // // export default function ContactSection() {
// // // //   const t = useTranslations("Index")
  
// // // //   const contactMethods = [
// // // //     {
// // // //       icon: Phone,
// // // //       key: "call",
// // // //       labelKey: "callNow",
// // // //       descriptionKey: "callAvailability",
// // // //       gradient: "bg-gradient-to-r from-primary/10 to-primary/0",
// // // //       hoverGradient: "from-primary/20 to-primary/0", // Removed group-hover prefix
// // // //       borderColor: "border-primary",
// // // //       hoverBorderColor: "border-primary/80", // Removed group-hover prefix
// // // //       iconColor: "text-primary",
// // // //       textColor: "text-primary",
// // // //     },
// // // //     {
// // // //       icon: WhatsApp,
// // // //       key: "whatsApp",
// // // //       labelKey: "whatsAppNow",
// // // //       descriptionKey: "whatsAppAvailability",
// // // //       gradient: "bg-gradient-to-r from-green-500/10 to-green-500/0",
// // // //       hoverGradient: "from-green-500/20 to-green-500/0", // Removed group-hover prefix
// // // //       borderColor: "border-green-500",
// // // //       hoverBorderColor: "border-green-500/80", // Removed group-hover prefix
// // // //       iconColor: "text-green-500",
// // // //       textColor: "text-green-500",
// // // //     },
// // // //     {
// // // //       icon: MapPin,
// // // //       key: "maps",
// // // //       labelKey: "mapsNow",
// // // //       descriptionKey: "mapsAvailability",
// // // //       gradient: "bg-gradient-to-r from-blue-500/10 to-blue-500/0",
// // // //       hoverGradient: "from-blue-500/20 to-blue-500/0", // Removed group-hover prefix
// // // //       borderColor: "border-blue-500",
// // // //       hoverBorderColor: "border-blue-500/80", // Removed group-hover prefix
// // // //       iconColor: "text-blue-500",
// // // //       textColor: "text-blue-500",
// // // //     },
// // // //     {
// // // //       icon: Mail,
// // // //       key: "email",
// // // //       labelKey: "emailNow",
// // // //       descriptionKey: "emailAddress",
// // // //       gradient: "bg-gradient-to-r from-yellow-500/10 to-yellow-500/0",
// // // //       hoverGradient: "from-yellow-500/20 to-yellow-500/0", // Removed group-hover prefix
// // // //       borderColor: "border-yellow-500",
// // // //       hoverBorderColor: "border-yellow-500/80", // Removed group-hover prefix
// // // //       iconColor: "text-yellow-500",
// // // //       textColor: "text-yellow-500",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <section className="border-t bg-gradient-to-b from-white to-blue-50" id="contact">
// // // //       <div className="container py-12 md:py-24 lg:py-32">
// // // //         <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
// // // //           <h2 className="text-3xl font-bold leading-tight tracking-tighter text-primary md:text-5xl lg:leading-[1.1]">
// // // //             {t("contactTitle")}
// // // //           </h2>
// // // //           <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">{t("contactDescription")}</p>
// // // //         </div>
// // // //         <div className="mx-auto grid max-w-4xl gap-8 py-12 md:grid-cols-2">
// // // //           {contactMethods.map((method) => (
// // // //             <Button
// // // //               key={method.key}
// // // //               size="lg"
// // // //               className={`group relative h-auto overflow-hidden border ${method.borderColor} p-6 transition-colors hover:${method.hoverBorderColor}`}
// // // //               variant="outline"
// // // //             >
// // // //               <div
// // // //                 className={`absolute inset-0 transition-opacity duration-300 ${method.gradient} group-hover:bg-gradient-to-r group-hover:${method.hoverGradient}`}
// // // //               />
// // // //               <div className="flex items-center">
// // // //                 <method.icon className={`h-6 w-6 mr-3 ${method.iconColor}`} />
// // // //                 <div className="text-left">
// // // //                   <span className={`text-lg font-semibold block ${method.textColor}`}>{t(method.labelKey)}</span>
// // // //                   <span className="text-sm text-muted-foreground block">{t(method.descriptionKey)}</span>
// // // //                 </div>
// // // //               </div>
// // // //             </Button>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   )
// // // // }
// // // import { useTranslations } from "next-intl"
// // // import { Button } from "@/components/ui/button"
// // // import { Mail, MapPin, Phone, PhoneIcon as WhatsApp } from "lucide-react"

// // // export default function ContactSection() {
// // //   const t = useTranslations("Index")
  
// // //   const contactMethods = [
// // //     {
// // //       icon: Phone,
// // //       key: "call",
// // //       labelKey: "callNow",
// // //       descriptionKey: "callAvailability",
// // //       gradient: "bg-gradient-to-r from-primary/5 via-primary/3 to-transparent",
// // //       hoverGradient: "from-primary/15 via-primary/10 to-transparent",
// // //       borderColor: "border-primary/30",
// // //       hoverBorderColor: "border-primary/60",
// // //       iconColor: "text-primary",
// // //       textColor: "text-primary",
// // //       iconHoverColor: "group-hover:text-primary",
// // //     },
// // //     {
// // //       icon: WhatsApp,
// // //       key: "whatsApp",
// // //       labelKey: "whatsAppNow",
// // //       descriptionKey: "whatsAppAvailability",
// // //       gradient: "bg-gradient-to-r from-green-500/5 via-green-500/3 to-transparent",
// // //       hoverGradient: "from-green-500/15 via-green-500/10 to-transparent",
// // //       borderColor: "border-green-500/30",
// // //       hoverBorderColor: "border-green-500/60",
// // //       iconColor: "text-green-500",
// // //       textColor: "text-green-500",
// // //       iconHoverColor: "group-hover:text-green-500",
// // //     },
// // //     {
// // //       icon: MapPin,
// // //       key: "maps",
// // //       labelKey: "mapsNow",
// // //       descriptionKey: "mapsAvailability",
// // //       gradient: "bg-gradient-to-r from-blue-500/5 via-blue-500/3 to-transparent",
// // //       hoverGradient: "from-blue-500/15 via-blue-500/10 to-transparent",
// // //       borderColor: "border-blue-500/30",
// // //       hoverBorderColor: "border-blue-500/60",
// // //       iconColor: "text-blue-500",
// // //       textColor: "text-blue-500",
// // //       iconHoverColor: "group-hover:text-blue-500",
// // //     },
// // //     {
// // //       icon: Mail,
// // //       key: "email",
// // //       labelKey: "emailNow",
// // //       descriptionKey: "emailAddress",
// // //       gradient: "bg-gradient-to-r from-yellow-500/5 via-yellow-500/3 to-transparent",
// // //       hoverGradient: "from-yellow-500/15 via-yellow-500/10 to-transparent",
// // //       borderColor: "border-yellow-500/30",
// // //       hoverBorderColor: "border-yellow-500/60",
// // //       iconColor: "text-yellow-500",
// // //       textColor: "text-yellow-500",
// // //       iconHoverColor: "group-hover:text-yellow-500",
// // //     },
// // //   ];

// // //   return (
// // //     <section className="border-t bg-gradient-to-b from-white to-blue-50" id="contact">
// // //       <div className="container py-12 md:py-24 lg:py-32">
// // //         <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
// // //           <h2 className="text-3xl font-bold leading-tight tracking-tighter text-primary md:text-5xl lg:leading-[1.1]">
// // //             {t("contactTitle")}
// // //           </h2>
// // //           <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">{t("contactDescription")}</p>
// // //         </div>
// // //         <div className="mx-auto grid max-w-4xl gap-8 py-12 md:grid-cols-2">
// // //           {contactMethods.map((method) => (
// // //             <Button
// // //               key={method.key}
// // //               size="lg"
// // //               className={`group relative h-auto overflow-hidden border ${method.borderColor} p-6 transition-all duration-300 ease-in-out hover:shadow-md hover:${method.hoverBorderColor}`}
// // //               variant="outline"
// // //             >
// // //               <div
// // //                 className={`absolute inset-0 transition-opacity duration-300 ${method.gradient} group-hover:bg-gradient-to-r group-hover:${method.hoverGradient}`}
// // //               />
// // //               <div className="relative flex items-center">
// // //                 <method.icon className={`h-6 w-6 mr-3 transition-colors duration-300 ${method.iconColor}`} />
// // //                 <div className="text-left">
// // //                   <span className={`text-lg font-semibold block transition-colors duration-300 ${method.textColor}`}>
// // //                     {t(method.labelKey)}
// // //                   </span>
// // //                   <span className="text-sm text-muted-foreground block group-hover:text-muted-foreground/80 transition-colors duration-300">
// // //                     {t(method.descriptionKey)}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </Button>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }
// import { useTranslations } from "next-intl"
// import { Button } from "@/components/ui/button"
// import { Mail, MapPin, Phone, PhoneIcon as WhatsApp } from "lucide-react"

// export default function ContactSection() {
//   const t = useTranslations("Index")
  
//   const contactMethods = [
//     {
//       icon: Phone,
//       key: "call",
//       labelKey: "callNow",
//       descriptionKey: "callAvailability",
//       gradient: "bg-gradient-to-r from-primary/5 via-primary/3 to-transparent",
//       hoverGradient: "bg-gradient-to-r from-primary/25 via-primary/15 to-transparent",
//       borderColor: "border-primary/30",
//       hoverBorderColor: "border-primary/80",
//       iconColor: "text-primary",
//       textColor: "text-primary",
//       iconHoverColor: "group-hover:text-primary-600",
//       shadowHover: "group-hover:shadow-lg group-hover:shadow-primary/20"
//     },
//     {
//       icon: WhatsApp,
//       key: "whatsApp",
//       labelKey: "whatsAppNow",
//       descriptionKey: "whatsAppAvailability",
//       gradient: "bg-gradient-to-r from-green-500/5 via-green-500/3 to-transparent",
//       hoverGradient: "bg-gradient-to-r from-green-500/25 via-green-500/15 to-transparent",
//       borderColor: "border-green-500/30",
//       hoverBorderColor: "border-green-500/80",
//       iconColor: "text-green-500",
//       textColor: "text-green-500",
//       iconHoverColor: "group-hover:text-green-600",
//       shadowHover: "group-hover:shadow-lg group-hover:shadow-green-500/20"
//     },
//     {
//       icon: MapPin,
//       key: "maps",
//       labelKey: "mapsNow",
//       descriptionKey: "mapsAvailability",
//       gradient: "bg-gradient-to-r from-blue-500/5 via-blue-500/3 to-transparent",
//       hoverGradient: "bg-gradient-to-r from-blue-500/25 via-blue-500/15 to-transparent",
//       borderColor: "border-blue-500/30",
//       hoverBorderColor: "border-blue-500/80",
//       iconColor: "text-blue-500",
//       textColor: "text-blue-500",
//       iconHoverColor: "group-hover:text-blue-600",
//       shadowHover: "group-hover:shadow-lg group-hover:shadow-blue-500/20"
//     },
//     {
//       icon: Mail,
//       key: "email",
//       labelKey: "emailNow",
//       descriptionKey: "emailAddress",
//       gradient: "bg-gradient-to-r from-yellow-500/5 via-yellow-500/3 to-transparent",
//       hoverGradient: "bg-gradient-to-r from-yellow-500/25 via-yellow-500/15 to-transparent",
//       borderColor: "border-yellow-500/30",
//       hoverBorderColor: "border-yellow-500/80",
//       iconColor: "text-yellow-500",
//       textColor: "text-yellow-500",
//       iconHoverColor: "group-hover:text-yellow-600",
//       shadowHover: "group-hover:shadow-lg group-hover:shadow-yellow-500/20"
//     },
//   ];

//   return (
//     <section className="border-t bg-gradient-to-b from-white to-blue-50" id="contact">
//       <div className="container py-12 md:py-24 lg:py-32">
//         <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
//           <h2 className="text-3xl font-bold leading-tight tracking-tighter text-primary md:text-5xl lg:leading-[1.1]">
//             {t("contactTitle")}
//           </h2>
//           <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">{t("contactDescription")}</p>
//         </div>
//         <div className="mx-auto grid max-w-4xl gap-8 py-12 md:grid-cols-2">
//           {contactMethods.map((method) => (
//             <Button
//               key={method.key}
//               size="lg"
//               className={`group relative h-auto overflow-hidden border ${method.borderColor} p-6 transition-all duration-300 ease-in-out hover:${method.hoverBorderColor} ${method.shadowHover} hover:translate-y-[-2px]`}
//               variant="outline"
//             >
//               <div
//                 className={`absolute inset-0 transition-all duration-300 ${method.gradient} group-hover:${method.hoverGradient}`}
//               />
//               <div className="relative flex items-center">
//                 <method.icon className={`h-6 w-6 mr-3 transition-colors duration-300 ${method.iconColor} ${method.iconHoverColor}`} />
//                 <div className="text-left">
//                   <span className={`text-lg font-semibold block transition-colors duration-300 ${method.textColor} ${method.iconHoverColor}`}>
//                     {t(method.labelKey)}
//                   </span>
//                   <span className="text-sm text-muted-foreground block transition-colors duration-300 group-hover:text-current/70">
//                     {t(method.descriptionKey)}
//                   </span>
//                 </div>
//               </div>
//             </Button>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, PhoneIcon as WhatsApp } from "lucide-react"

export default function ContactSection() {
  const t = useTranslations("Index")
  
  const contactMethods = [
    {
      icon: Phone,
      key: "call",
      labelKey: "callNow",
      descriptionKey: "callAvailability",
      // Using direct color classes for consistency
      gradient: "bg-gradient-to-r from-blue-600/5 via-blue-600/3 to-transparent",
      hoverGradient: "bg-gradient-to-r from-blue-600/25 via-blue-600/15 to-transparent",
      borderColor: "border-blue-600/30",
      hoverBorderColor: "border-blue-600/80",
      iconColor: "text-blue-600",
      textColor: "text-blue-600",
      iconHoverColor: "group-hover:text-blue-700",
      shadowHover: "group-hover:shadow-md group-hover:shadow-blue-600/20"
    },
    {
      icon: WhatsApp,
      key: "whatsApp",
      labelKey: "whatsAppNow",
      descriptionKey: "whatsAppAvailability",
      gradient: "bg-gradient-to-r from-green-500/5 via-green-500/3 to-transparent",
      hoverGradient: "bg-gradient-to-r from-green-500/25 via-green-500/15 to-transparent",
      borderColor: "border-green-500/30",
      hoverBorderColor: "border-green-500/80",
      iconColor: "text-green-500",
      textColor: "text-green-500",
      iconHoverColor: "group-hover:text-green-600",
      shadowHover: "group-hover:shadow-md group-hover:shadow-green-500/20"
    },
    {
      icon: MapPin,
      key: "maps",
      labelKey: "mapsNow",
      descriptionKey: "mapsAvailability",
      gradient: "bg-gradient-to-r from-blue-500/5 via-blue-500/3 to-transparent",
      hoverGradient: "bg-gradient-to-r from-blue-500/25 via-blue-500/15 to-transparent",
      borderColor: "border-blue-500/30",
      hoverBorderColor: "border-blue-500/80",
      iconColor: "text-blue-500",
      textColor: "text-blue-500",
      iconHoverColor: "group-hover:text-blue-600",
      shadowHover: "group-hover:shadow-md group-hover:shadow-blue-500/20"
    },
    {
      icon: Mail,
      key: "email",
      labelKey: "emailNow",
      descriptionKey: "emailAddress",
      gradient: "bg-gradient-to-r from-amber-500/5 via-amber-500/3 to-transparent",
      hoverGradient: "bg-gradient-to-r from-amber-500/25 via-amber-500/15 to-transparent",
      borderColor: "border-amber-500/30",
      hoverBorderColor: "border-amber-500/80",
      iconColor: "text-amber-500",
      textColor: "text-amber-500",
      iconHoverColor: "group-hover:text-amber-600",
      shadowHover: "group-hover:shadow-md group-hover:shadow-amber-500/20"
    },
  ];

  return (
    <section className="border-t bg-gradient-to-b from-white to-blue-50" id="contact">
      <div className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter text-blue-600 md:text-5xl lg:leading-[1.1]">
            {t("contactTitle")}
          </h2>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">{t("contactDescription")}</p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-8 py-12 md:grid-cols-2">
          {contactMethods.map((method) => (
            <Button
              key={method.key}
              size="lg"
              className={`group relative h-auto overflow-hidden border ${method.borderColor} p-6 transition-all duration-300 ease-in-out hover:${method.hoverBorderColor} ${method.shadowHover} hover:translate-y-[-2px]`}
              variant="outline"
            >
              <div
                className={`absolute inset-0 transition-all duration-300 ${method.gradient} group-hover:${method.hoverGradient}`}
              />
              <div className="relative flex items-center">
                <method.icon className={`h-6 w-6 mr-3 transition-colors duration-300 ${method.iconColor} ${method.iconHoverColor}`} />
                <div className="text-left">
                  <span className={`text-lg font-semibold block transition-colors duration-300 ${method.textColor} ${method.iconHoverColor}`}>
                    {t(method.labelKey)}
                  </span>
                  <span className="text-sm text-muted-foreground block transition-colors duration-300 group-hover:text-current/70">
                    {t(method.descriptionKey)}
                  </span>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

// import { useTranslations } from "next-intl"
// import { Button } from "@/components/ui/button"
// import { Mail, MapPin, Phone, PhoneIcon as WhatsApp } from "lucide-react"

// export default function ContactSection() {
//   const t = useTranslations("Index")
  
//   const contactMethods = [
//     {
//       icon: Phone,
//       key: "call",
//       labelKey: "callNow",
//       descriptionKey: "callAvailability",
//       gradient: "bg-gradient-to-r from-primary/5 via-primary/3 to-transparent",
//       hoverGradient: "from-primary/25 via-primary/15 to-transparent",
//       borderColor: "border-primary/30",
//       hoverBorderColor: "border-primary/80",
//       iconColor: "text-primary",
//       textColor: "text-primary",
//       iconHoverColor: "text-primary/90",
//       shadowHover: "shadow-md shadow-primary/10",
//     },
//     {
//       icon: WhatsApp,
//       key: "whatsApp",
//       labelKey: "whatsAppNow",
//       descriptionKey: "whatsAppAvailability",
//       gradient: "bg-gradient-to-r from-green-500/5 via-green-500/3 to-transparent",
//       hoverGradient: "from-green-500/25 via-green-500/15 to-transparent",
//       borderColor: "border-green-500/30",
//       hoverBorderColor: "border-green-500/80",
//       iconColor: "text-green-500",
//       textColor: "text-green-500",
//       iconHoverColor: "text-green-500/90",
//       shadowHover: "shadow-md shadow-green-500/10",
//     },
//     {
//       icon: MapPin,
//       key: "maps",
//       labelKey: "mapsNow",
//       descriptionKey: "mapsAvailability",
//       gradient: "bg-gradient-to-r from-blue-500/5 via-blue-500/3 to-transparent",
//       hoverGradient: "from-blue-500/25 via-blue-500/15 to-transparent",
//       borderColor: "border-blue-500/30",
//       hoverBorderColor: "border-blue-500/80",
//       iconColor: "text-blue-500",
//       textColor: "text-blue-500",
//       iconHoverColor: "text-blue-500/90",
//       shadowHover: "shadow-md shadow-blue-500/10",
//     },
//     {
//       icon: Mail,
//       key: "email",
//       labelKey: "emailNow",
//       descriptionKey: "emailAddress",
//       gradient: "bg-gradient-to-r from-amber-500/5 via-amber-500/3 to-transparent",
//       hoverGradient: "bg-red-500", // Increased transparency here
//       borderColor: "",
//       hoverBorderColor: "",
//       iconColor: "",
//       textColor: "",
//       iconHoverColor: "",
//       shadowHover: "",
//       // shadowHover: "shadow-md shadow-amber-500/10",
//       // borderColor: "border-amber-500/30",
//       // hoverBorderColor: "border-amber-500/80",
//       // iconColor: "text-amber-500",
//       // textColor: "text-amber-500",
//       // iconHoverColor: "text-amber-500/90",
//     },
//   ];

//   return (
//     <section className="border-t bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950" id="contact">
//       <div className="container py-12 md:py-24 lg:py-32">
//         <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
//           <h2 className="text-3xl font-bold leading-tight tracking-tighter text-primary md:text-5xl lg:leading-[1.1]">
//             {t("contactTitle")}
//           </h2>
//           <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">{t("contactDescription")}</p>
//         </div>
//         <div className="mx-auto grid max-w-4xl gap-8 py-12 md:grid-cols-2">
//           {contactMethods.map((method) => (
//             <Button
//               key={method.key}
//               size="lg"
//               className={`group relative h-auto overflow-hidden border ${method.borderColor} p-6 transition-all duration-300 ease-in-out hover:${method.hoverBorderColor} hover:${method.shadowHover} hover:translate-y-[-2px]`}
//               // className={`group relative h-auto overflow-hidden border ${method.borderColor} p-6 transition-all duration-300 ease-in-out hover:${method.hoverBorderColor} ${method.shadowHover} hover:translate-y-[-2px]`}
//               variant="ghost"
//             >
//               <div
//                 // className={`absolute inset-0 transition-all duration-300 ${method.gradient} group-hover:bg-gradient-to-r group-hover:${method.hoverGradient}`}
//                 className={`absolute inset-0 transition-all duration-300 ${method.gradient} group-hover:bg-gradient-to-r group-hover:${method.hoverGradient}`}
//               />
//               <div className="relative flex items-center">
//                 <method.icon className={`h-6 w-6 mr-3 transition-colors duration-300 ${method.iconColor} group-hover:${method.iconHoverColor}`} />
//                 <div className="text-left">
//                   <span className={`text-lg font-semibold block transition-colors duration-300 ${method.textColor} group-hover:${method.iconHoverColor}`}>
//                     {t(method.labelKey)}
//                   </span>
//                   <span className="text-sm text-muted-foreground block transition-colors duration-300 group-hover:text-muted-foreground/80">
//                     {t(method.descriptionKey)}
//                   </span>
//                 </div>
//               </div>
//             </Button>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }