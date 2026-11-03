"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/config/contact-info";
import { contactContent } from "../content/es";

type FieldName = keyof typeof contactContent.form.errors;
type Errors = Partial<Record<FieldName, string>>;

const fieldClass = "mt-2 block min-h-12 w-full rounded-action border border-moss/40 bg-white px-4 py-3 text-base text-ink";

function validate(data: FormData): Errors {
  const { errors } = contactContent.form;
  const text = (key: string) => String(data.get(key) ?? "").trim();
  const result: Errors = {};

  if (text("name").length < 2) result.name = errors.name;
  if (!/^[+\d][\d\s().-]{5,}$/.test(text("phone"))) result.phone = errors.phone;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text("email"))) result.email = errors.email;
  if (!text("area")) result.area = errors.area;
  if (text("message").length < 5) result.message = errors.message;
  if (!text("channel")) result.channel = errors.channel;
  if (data.get("privacy") !== "on") result.privacy = errors.privacy;
  return result;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return <p id={id} className="mt-2 text-sm font-semibold text-red-800"><span aria-hidden="true">⚠ </span>{message}</p>;
}

export function ContactForm() {
  const { form } = contactContent;
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(new FormData(event.currentTarget));
    setErrors(found);
    setSubmitted(false);

    const firstInvalid = (Object.keys(found) as FieldName[])[0];
    if (firstInvalid) {
      event.currentTarget.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const body = [
      `Nombre: ${value("name")}`,
      `Teléfono: ${value("phone")}`,
      `Email: ${value("email")}`,
      `Área de consulta: ${value("area")}`,
      `Medio de contacto preferido: ${value("channel")}`,
      "",
      value("message"),
    ].join("\n");
    const subject = `Consulta web: ${value("area")}`;

    setSubmitted(true);
    window.open(`${contactInfo.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_self");
  }

  const describe = (name: FieldName) => (errors[name] ? { "aria-invalid": true, "aria-describedby": `${name}-error` } : {});

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-6">
      <div>
        <label htmlFor="name" className="font-semibold">{form.fields.name}</label>
        <input id="name" name="name" type="text" autoComplete="name" required className={fieldClass} {...describe("name")} />
        <FieldError id="name-error" message={errors.name} />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="font-semibold">{form.fields.phone}</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required className={fieldClass} {...describe("phone")} />
          <FieldError id="phone-error" message={errors.phone} />
        </div>
        <div>
          <label htmlFor="email" className="font-semibold">{form.fields.email}</label>
          <input id="email" name="email" type="email" autoComplete="email" required className={fieldClass} {...describe("email")} />
          <FieldError id="email-error" message={errors.email} />
        </div>
      </div>
      <div>
        <label htmlFor="area" className="font-semibold">{form.fields.area}</label>
        <select id="area" name="area" required defaultValue="" className={fieldClass} {...describe("area")}>
          <option value="" disabled>{form.areaPlaceholder}</option>
          {form.areas.map((area) => <option key={area} value={area}>{area}</option>)}
        </select>
        <FieldError id="area-error" message={errors.area} />
      </div>
      <div>
        <label htmlFor="message" className="font-semibold">{form.fields.message}</label>
        <textarea id="message" name="message" rows={5} required className={fieldClass} {...describe("message")} />
        <FieldError id="message-error" message={errors.message} />
      </div>
      <fieldset aria-describedby={errors.channel ? "channel-error" : undefined}>
        <legend className="font-semibold">{form.fields.channel}</legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {form.channels.map((channel, index) => (
            <label key={channel} className="flex min-h-12 cursor-pointer items-center gap-3 rounded-action border border-moss/40 bg-white px-4">
              <input type="radio" name="channel" value={channel} required={index === 0} className="size-5 accent-moss" />
              {channel}
            </label>
          ))}
        </div>
        <FieldError id="channel-error" message={errors.channel} />
      </fieldset>
      <div>
        <div className="flex items-start gap-3">
          <input id="privacy" name="privacy" type="checkbox" required className="mt-1 size-6 shrink-0 accent-moss" {...describe("privacy")} />
          <label htmlFor="privacy">
            {form.fields.privacy}{" "}
            <Link href={form.privacyPath} className="underline decoration-sage underline-offset-4">(ver política)</Link>
          </label>
        </div>
        <FieldError id="privacy-error" message={errors.privacy} />
      </div>
      <div>
        <Button type="submit" className="min-h-14 w-full px-8 text-base sm:w-auto">{form.submit}</Button>
        <p role="status" className={submitted ? "mt-4 rounded-action border border-moss/40 bg-sand p-4 text-sm text-ink" : "sr-only"}>
          {submitted ? form.unavailable : ""}
        </p>
      </div>
    </form>
  );
}
