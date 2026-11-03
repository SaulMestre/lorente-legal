// Datos de contacto públicos del despacho.

/** Número de WhatsApp en formato internacional, solo dígitos (ej. prefijo país + número). */
export const WHATSAPP_NUMBER = "34694906783";

/** Teléfono tal y como se mostrará (ej. "+34 600 000 000") y su versión para tel:. */
export const PHONE_DISPLAY = "+34 694 906 783";
export const PHONE_TEL = "+34694906783";

export const EMAIL = "lauralorentte@gmail.com";

export const OFFICE_ADDRESS = "";
export const OFFICE_HOURS = "";
export const GOOGLE_MAPS_URL = "";

const PENDING_ANCHOR = "#despacho";

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export const contactInfo = {
  whatsappHref: digitsOnly(WHATSAPP_NUMBER) ? `https://wa.me/${digitsOnly(WHATSAPP_NUMBER)}` : PENDING_ANCHOR,
  phoneHref: digitsOnly(PHONE_TEL) ? `tel:${PHONE_TEL.replace(/[^\d+]/g, "")}` : PENDING_ANCHOR,
  emailHref: EMAIL ? `mailto:${EMAIL}` : PENDING_ANCHOR,
  mapsHref: GOOGLE_MAPS_URL || PENDING_ANCHOR,
  isWhatsappConfigured: Boolean(digitsOnly(WHATSAPP_NUMBER)),
  isMapsConfigured: Boolean(GOOGLE_MAPS_URL),
  phoneDisplay: PHONE_DISPLAY || "[Teléfono pendiente]",
  emailDisplay: EMAIL || "[Email pendiente]",
  address: OFFICE_ADDRESS || "[Dirección del despacho pendiente]",
  hours: OFFICE_HOURS || "[Horario pendiente]",
};
