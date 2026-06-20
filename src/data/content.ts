// Central content for the Validum landing page.
// SVG icons stored as inner-path strings, wrapped by `icon()`.

export const icon = (paths: string) =>
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

export const nav = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "ecosistema", label: "Ecosistema" },
  { id: "contacto", label: "Contacto" },
];

export const marquee = [
  { label: "Seguridad Social", icon: icon('<path d="M12 2 L20 5 V11 C20 16 16.5 19.5 12 22 C7.5 19.5 4 16 4 11 V5 Z"/>') },
  { label: "Nómina Electrónica", icon: icon('<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>') },
  { label: "EPS", icon: icon('<path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.65-7 10-7 10z"/>') },
  { label: "ARL", icon: icon('<path d="M12 3l8 4v5c0 4.5-3.4 7.6-8 9-4.6-1.4-8-4.5-8-9V7z"/><path d="M9 12l2 2 4-4"/>') },
  { label: "Pensión", icon: icon('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>') },
  { label: "Caja de Compensación", icon: icon('<circle cx="9" cy="8" r="3"/><circle cx="17.5" cy="9" r="2.2"/><path d="M3 20a6 6 0 0 1 12 0M15 20a5 5 0 0 1 6-3.8"/>') },
  { label: "Facturación DIAN", icon: icon('<path d="M6 2h9l3 3v17l-3-2-3 2-3-2-3 2V4a2 2 0 0 1 2-2z"/><path d="M9 8h6M9 12h6"/>') },
  { label: "Novedades Laborales", icon: icon('<path d="M21 2v6h-6M3 22v-6h6"/><path d="M21 8a9 9 0 0 0-15-3M3 16a9 9 0 0 0 15 3"/>') },
];

export const heroStats = [
  { value: 100, suffix: "%", plain: null, label: "Cumplimiento normativo DIAN", accent: true },
  { value: null, suffix: "", plain: "360°", label: "Gestión administrativa integral", accent: false },
  { value: null, suffix: "", plain: "24/7", label: "Acompañamiento continuo", accent: false },
];

export const heroChips = [
  { depth: 34, top: "24px", left: "-54px", float: "6s", iconBg: "#6B7280",
    icon: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M5 12.5 L9.5 17 L19 7" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    title: "Nómina al día", sub: "Aportes y reportes", abbr: null },
  { depth: 22, bottom: "34px", right: "-58px", float: "7s", iconBg: "#1A1C22",
    icon: null, abbr: "DIAN", title: "Facturación electrónica", sub: "Bajo normativa vigente" },
];

export const about = {
  tags: ["Seguridad social", "Administración de nómina", "Documentos electrónicos", "Cumplimiento DIAN"],
};

export const services = [
  { num: "01", title: "Afiliaciones a seguridad social", desc: "Vinculación y trámite ante EPS, ARL, fondos de pensión y caja de compensación familiar.", icon: icon('<path d="M12 2 L20 5 V11 C20 16 16.5 19.5 12 22 C7.5 19.5 4 16 4 11 V5 Z"/><path d="M9 12 l2 2 4-4"/>') },
  { num: "02", title: "Radicación de novedades laborales", desc: "Ingresos, retiros, incapacidades, licencias y demás movimientos, radicados a tiempo.", icon: icon('<path d="M4 4h11l5 5v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><path d="M14 4v5h5"/><path d="M8 13h7M8 17h5"/>') },
  { num: "03", title: "Administración de nómina", desc: "Cálculo, liquidación, aportes y reportes mensuales con total precisión y trazabilidad.", icon: icon('<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/>') },
  { num: "04", title: "Implementación de facturación electrónica", desc: "Emisión de facturas conforme a la normativa de la DIAN, lista para operar.", icon: icon('<path d="M6 2h9l3 3v17l-3-2-3 2-3-2-3 2V4a2 2 0 0 1 2-2z"/><path d="M9 8h6M9 12h6"/>') },
  { num: "05", title: "Gestión de documentos electrónicos", desc: "Soportes de nómina y demás documentos exigidos por la legislación vigente, organizados y seguros.", icon: icon('<path d="M4 6a2 2 0 0 1 2-2h5l2 2h5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/>') },
];

export const netStats = [
  { k: "6 entidades", v: "EPS · ARL · Pensión · Caja · DIAN · Nómina" },
  { k: "Flujo único", v: "Seguro y trazable" },
  { k: "100% digital", v: "Gestión documental" },
];

export const valores = [
  { title: "Outsourcing especializado y universal", desc: "Soluciones adaptadas tanto para empresas consolidadas como para independientes.", icon: icon('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z"/>') },
  { title: "Cumplimiento normativo garantizado", desc: "Cada proceso ejecutado bajo la legislación colombiana vigente, sin riesgos.", icon: icon('<path d="M12 2 L20 5 V11 C20 16 16.5 19.5 12 22 C7.5 19.5 4 16 4 11 V5 Z"/><path d="M9 12 l2 2 4-4"/>') },
  { title: "Optimización de recursos", desc: "Reducción real de costos y tiempos administrativos en tu operación.", icon: icon('<path d="M3 17l6-6 4 4 7-7"/><path d="M14 8h6v6"/>') },
  { title: "Atención personalizada", desc: "Acompañamiento continuo con un equipo que entiende tu negocio.", icon: icon('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>') },
  { title: "Plataformas digitales seguras", desc: "Gestión documental y transaccional protegida de extremo a extremo.", icon: icon('<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>') },
];

export const beneficios = [
  { title: "Evita sanciones y riesgos legales", desc: "Cumplimiento garantizado ante DIAN, MinTrabajo y entidades de seguridad social, sin errores ni retrasos.", icon: icon('<path d="M12 2 L20 5 V11 C20 16 16.5 19.5 12 22 C7.5 19.5 4 16 4 11 V5 Z"/>') },
  { title: "Delega procesos críticos en expertos", desc: "Un equipo especializado gestiona afiliaciones, novedades y nómina con total precisión y trazabilidad.", icon: icon('<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 11l2 2 4-4"/>') },
  { title: "Accede a herramientas modernas", desc: "Plataformas digitales seguras para documentos electrónicos, facturación DIAN y reportes en tiempo real.", icon: icon('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>') },
  { title: "Más tiempo para crecer tu negocio", desc: "Libera horas estratégicas que hoy gastas en trámites administrativos y enfócalas en tu operación.", icon: icon('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>') },
  { title: "Tranquilidad y respaldo profesional", desc: "Acompañamiento continuo de expertos que conocen tu empresa y responden ante cualquier requerimiento.", icon: icon('<path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/>') },
];

export const publico = [
  { n: "01", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&h=560&q=80", alt: "Empresas", title: "Empresas de cualquier tamaño", desc: "De cualquier sector que buscan eficiencia operativa y cumplimiento normativo garantizado." },
  { n: "02", img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&h=560&q=80", alt: "Independientes con empleados", title: "Independientes con empleados", desc: "Que requieren soluciones administrativas confiables sin montar un área interna." },
  { n: "03", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&h=560&q=80", alt: "Organizaciones en crecimiento", title: "Organizaciones en crecimiento", desc: "Que desean externalizar procesos para enfocarse en su core business." },
];

export const contactInfo = [
  { k: "Correo", v: "contacto@validum.com.co" },
  { k: "Cobertura", v: "Colombia" },
  { k: "Horario", v: "Lun–Vie · 8am–6pm" },
];

export const formFields = [
  { label: "Nombre / Empresa", ph: "Tu nombre o razón social", type: "text" },
  { label: "Correo electrónico", ph: "nombre@empresa.com", type: "email" },
  { label: "Teléfono", ph: "+57 ...", type: "tel" },
];
