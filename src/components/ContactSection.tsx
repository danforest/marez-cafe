"use client";

import { FormEvent, useState } from "react";
import LandingFrame from "@/components/LandingFrame";
import ScrollReveal from "@/components/ScrollReveal";
import { contactSection } from "@/lib/siteData";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("success");
  };

  return (
    <section id="contact" className="bg-[var(--color-bg)] py-6 md:py-8">
      <div className="section-container">
        <ScrollReveal>
          <LandingFrame>
            <div className="contact-panel">
              <div className="contact-panel-layout">
                <aside className="contact-panel-aside">
                  <header className="contact-panel-header">
                    <p className="type-eyebrow contact-panel-eyebrow">
                      {contactSection.eyebrow}
                    </p>
                    <h2 className="contact-panel-title">{contactSection.title}</h2>
                    <p className="type-body contact-panel-intro">
                      {contactSection.intro}
                    </p>
                  </header>

                  <div className="contact-plain-details">
                    <a href={`tel:${contactSection.phone}`} className="contact-plain-link">
                      {contactSection.phoneDisplay}
                    </a>
                    <a href={`mailto:${contactSection.email}`} className="contact-plain-link">
                      {contactSection.email}
                    </a>
                  </div>
                </aside>

                <div className="contact-panel-main">
                  {status === "success" ? (
                    <p
                      className="type-body-sm contact-panel-success"
                      role="status"
                    >
                      {contactSection.successMessage}
                    </p>
                  ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                      <div className="contact-form-grid">
                        <input
                          type="text"
                          name="name"
                          required
                          autoComplete="name"
                          placeholder="Your name"
                          className="contact-input"
                          aria-label="Name"
                        />
                        <input
                          type="email"
                          name="email"
                          required
                          autoComplete="email"
                          placeholder="Email address"
                          className="contact-input"
                          aria-label="Email"
                        />
                        <textarea
                          name="message"
                          required
                          rows={6}
                          placeholder="What can we help with?"
                          className="contact-input contact-textarea contact-textarea-full"
                          aria-label="Message"
                        />
                      </div>
                      <button type="submit" className="btn-primary contact-submit">
                        {contactSection.submitLabel}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </LandingFrame>
        </ScrollReveal>
      </div>
    </section>
  );
}
