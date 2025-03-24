// import { useTranslations } from "next-intl";
// import { Link } from "@/i18n/routing";
// import { Metadata } from "next";
// import Image from "next/image";
// import { generatePageMetadata } from "@/utils/metadata";
// import Breadcrumbs from "@/components/Breadcrumbs";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, CheckCircle, Globe, Package, Shield, Truck, Clock, FileText } from "lucide-react";

// type Props = {
//   params: { locale: string };
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   return generatePageMetadata({
//     locale: params.locale,
//     pageName: "services",
//     titleEn: "Our Services | Najem Aleen Shipping",
//     titleAr: "خدماتنا | نجم الين للشحن",
//     descriptionEn: "Explore our comprehensive range of shipping, customs clearance, and logistics services for businesses and individuals in Dubai and the UAE.",
//     descriptionAr: "استكشف مجموعة خدماتنا الشاملة بما في ذلك الشحن والتخليص الجمركي والخدمات اللوجستية للشركات والأفراد في دبي والإمارات العربية المتحدة.",
//   });
// }

// export default function ServicesPage({ params }: Props) {
//   const t = useTranslations("Index");
//   const pageT = useTranslations("ServicesPage");

//   const services = [
//     {
//       id: "shipping-to-syria",
//       title: pageT("services.shippingToSyria.title"),
//       description: pageT("services.shippingToSyria.description"),
//       icon: <Truck className="h-10 w-10 text-primary" />,
//       image: "/images/services/shipping-to-syria.jpg",
//       features: [
//         pageT("services.shippingToSyria.features.feature1"),
//         pageT("services.shippingToSyria.features.feature2"),
//         pageT("services.shippingToSyria.features.feature3"),
//         pageT("services.shippingToSyria.features.feature4"),
//         pageT("services.shippingToSyria.features.feature5"),
//       ],
//     },
//     {
//       id: "customs-clearance",
//       title: pageT("services.customsClearance.title"),
//       description: pageT("services.customsClearance.description"),
//       icon: <FileText className="h-10 w-10 text-primary" />,
//       image: "/images/services/customs-clearance.jpg",
//       features: [
//         pageT("services.customsClearance.features.feature1"),
//         pageT("services.customsClearance.features.feature2"),
//         pageT("services.customsClearance.features.feature3"),
//         pageT("services.customsClearance.features.feature4"),
//         pageT("services.customsClearance.features.feature5"),
//       ],
//     },
//     {
//       id: "freight-forwarding",
//       title: pageT("services.freightForwarding.title"),
//       description: pageT("services.freightForwarding.description"),
//       icon: <Globe className="h-10 w-10 text-primary" />,
//       image: "/images/services/freight-forwarding.jpg",
//       features: [
//         pageT("services.freightForwarding.features.feature1"),
//         pageT("services.freightForwarding.features.feature2"),
//         pageT("services.freightForwarding.features.feature3"),
//         pageT("services.freightForwarding.features.feature4"),
//         pageT("services.freightForwarding.features.feature5"),
//       ],
//     },
//     {
//       id: "container-shipping",
//       title: pageT("services.containerShipping.title"),
//       description: pageT("services.containerShipping.description"),
//       icon: <Package className="h-10 w-10 text-primary" />,
//       image: "/images/services/container-shipping.jpg",
//       features: [
//         pageT("services.containerShipping.features.feature1"),
//         pageT("services.containerShipping.features.feature2"),
//         pageT("services.containerShipping.features.feature3"),
//         pageT("services.containerShipping.features.feature4"),
//         pageT("services.containerShipping.features.feature5"),
//       ],
//     },
//     {
//       id: "car-transportation",
//       title: pageT("services.carTransportation.title"),
//       description: pageT("services.carTransportation.description"),
//       icon: <Truck className="h-10 w-10 text-primary" />,
//       image: "/images/services/car-transportation.jpg",
//       features: [
//         pageT("services.carTransportation.features.feature1"),
//         pageT("services.carTransportation.features.feature2"),
//         pageT("services.carTransportation.features.feature3"),
//         pageT("services.carTransportation.features.feature4"),
//         pageT("services.carTransportation.features.feature5"),
//       ],
//     },
//     {
//       id: "warehousing-solutions",
//       title: pageT("services.warehousing.title"),
//       description: pageT("services.warehousing.description"),
//       icon: <Shield className="h-10 w-10 text-primary" />,
//       image: "/images/services/warehousing.jpg",
//       features: [
//         pageT("services.warehousing.features.feature1"),
//         pageT("services.warehousing.features.feature2"),
//         pageT("services.warehousing.features.feature3"),
//         pageT("services.warehousing.features.feature4"),
//         pageT("services.warehousing.features.feature5"),
//       ],
//     },
//     {
//       id: "packaging-repackaging",
//       title: pageT("services.packagingRepackaging.title"),
//       description: pageT("services.packagingRepackaging.description"),
//       icon: <Package className="h-10 w-10 text-primary" />,
//       image: "/images/services/packaging.jpg",
//       features: [
//         pageT("services.packagingRepackaging.features.feature1"),
//         pageT("services.packagingRepackaging.features.feature2"),
//         pageT("services.packagingRepackaging.features.feature3"),
//         pageT("services.packagingRepackaging.features.feature4"),
//         pageT("services.packagingRepackaging.features.feature5"),
//       ],
//     },
//     {
//       id: "logistics-consultation",
//       title: pageT("services.logisticsConsultation.title"),
//       description: pageT("services.logisticsConsultation.description"),
//       icon: <Clock className="h-10 w-10 text-primary" />,
//       image: "/images/services/logistics-consultation.jpg",
//       features: [
//         pageT("services.logisticsConsultation.features.feature1"),
//         pageT("services.logisticsConsultation.features.feature2"),
//         pageT("services.logisticsConsultation.features.feature3"),
//         pageT("services.logisticsConsultation.features.feature4"),
//         pageT("services.logisticsConsultation.features.feature5"),
//       ],
//     },
//   ];

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="bg-muted/40 py-12 md:py-24">
//         <div className="container">
//           <Breadcrumbs 
//             items={[
//               { label: pageT("heroTitle") }
//             ]}
//             className="mb-4"
//           />
//           <div className="mx-auto max-w-3xl text-center">
//             <h1 className="mb-4 text-4xl font-bold tracking-tight gradient-heading md:text-5xl">
//               {pageT("heroTitle")}
//             </h1>
//             <p className="mb-8 text-lg text-muted-foreground">
//               {pageT("heroDescription")}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Services Overview */}
//       <section className="py-12 md:py-24">
//         <div className="container">
//           <div className="grid gap-16">
//             {services.map((service, index) => (
//               <div
//                 key={service.id}
//                 id={service.id}
//                 className={`flex flex-col gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}
//               >
//                 <div className="relative h-64 w-full md:h-auto md:w-1/2">
//                   <Image
//                     src={service.image || "/placeholder.svg"}
//                     alt={service.title}
//                     fill
//                     className="rounded-lg object-cover"
//                   />
//                 </div>
//                 <div className="md:w-1/2">
//                   <div className="mb-4">{service.icon}</div>
//                   <h2 className="mb-4 text-3xl font-bold">{service.title}</h2>
//                   <p className="mb-6 text-muted-foreground">{service.description}</p>
//                   <ul className="mb-6 space-y-2">
//                     {service.features.map((feature, i) => (
//                       <li key={i} className="flex items-start">
//                         <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-primary" />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <Button asChild>
//                     <Link href={`/${params.locale}/services/${service.id}`}>
//                       {pageT("learnMoreButton")}
//                       <ArrowRight className="ml-2 h-4 w-4" />
//                     </Link>
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-primary py-12 md:py-24">
//         <div className="container text-center">
//           <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
//             {pageT("ctaTitle")}
//           </h2>
//           <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/90">
//             {pageT("ctaDescription")}
//           </p>
//           <div className="flex flex-col justify-center gap-4 sm:flex-row">
//             <Button size="lg" variant="secondary" asChild>
//               <Link href={`/${params.locale}/contact?type=quote`}>
//                 {pageT("getQuoteButton")}
//               </Link>
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
//               asChild
//             >
//               <Link href={`/${params.locale}/contact`}>
//                 {pageT("contactButton")}
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
