export type RouteAvailability = "published" | "planned";

export type PublicRoute = {
  label: string;
  path: string;
  availability: RouteAvailability;
};

export const publicRoutes: PublicRoute[] = [
  { label: "Inicio", path: "/es/", availability: "published" },
  { label: "Servicios", path: "/es/servicios", availability: "planned" },
  { label: "Extranjería", path: "/es/extranjeria", availability: "planned" },
  { label: "Nacionalidad", path: "/es/nacionalidad", availability: "planned" },
  { label: "Laboral", path: "/es/laboral", availability: "planned" },
  { label: "Civil", path: "/es/civil", availability: "planned" },
  { label: "Familia", path: "/es/familia", availability: "planned" },
  { label: "Sobre mí", path: "/es/sobre-mi", availability: "planned" },
  { label: "Contacto", path: "/es/contacto", availability: "planned" },
  { label: "Blog", path: "/es/blog", availability: "planned" },
];
