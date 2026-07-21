"use client";

import { FormEvent, useState } from "react";
import LandingFrame from "@/components/LandingFrame";
import ScrollReveal from "@/components/ScrollReveal";
import { contactSection } from "@/lib/siteData";

// TODO: update RESERVATIONS_EMAIL to a dedicated inbox once one is set up
const RESERVATIONS_EMAIL = "hello@marez.co.uk";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const date = (form.elements.namedItem("date") as HTMLInputElement).value;
    const time = (form.elements.namedItem("time") as HTMLInputElement).value;
    const people = (form.elements.namedItem("people") as HTMLInputElement).value;
    const fourLeggedFriends = (form.elements.namedItem("dogs") as HTMLSelectElement).value;
    const highchairs = (form.elements.namedItem("highchairs") as HTMLSelectElement).value;
    const firstName = (form.elements.namedItem("firstname") as HTMLInputElement).value;
    const lastName = (form.elements.namedItem("lastname") as HTMLInputElement).value;

    const body = [
      `Name: ${firstName} ${lastName}`,
      `Date: ${date}`,
      `Time: ${time}`,
      `Number of people: ${people}`,
      `Four-legged friends: ${fourLeggedFriends}`,
      `High chairs needed: ${highchairs}`,
    ].join("\n");

    const mailto = `mailto:${RESERVATIONS_EMAIL}?subject=${encodeURIComponent(
      "Reservation Request"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
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
                    <h2 className="contact-panel-title">Reservations</h2>
                    <p className="type-body contact-panel-intro">
                      We welcome walk-ins first-come, first-served. Use this form to
                      request a booking. It will open your email client pre-filled and
                      ready to send.
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
                  {submitted ? (
                    <p className="type-body-sm contact-panel-success" role="status">
                      Your email client should have opened with your reservation details
                      pre-filled. Just hit send and we&apos;ll be in touch to confirm.
                    </p>
                  ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                      <div className="contact-form-grid">
                        <div className="contact-field">
                          <label htmlFor="firstname" className="contact-label">First name</label>
                          <input
                            id="firstname"
                            type="text"
                            name="firstname"
                            required
                            autoComplete="given-name"
                            placeholder="First name"
                            className="contact-input"
                          />
                        </div>

                        <div className="contact-field">
                          <label htmlFor="lastname" className="contact-label">Last name</label>
                          <input
                            id="lastname"
                            type="text"
                            name="lastname"
                            required
                            autoComplete="family-name"
                            placeholder="Last name"
                            className="contact-input"
                          />
                        </div>

                        <div className="contact-field">
                          <label htmlFor="res-people" className="contact-label">Number of people</label>
                          <input
                            id="res-people"
                            type="number"
                            name="people"
                            min="1"
                            max="50"
                            required
                            placeholder="e.g. 6"
                            className="contact-input"
                          />
                        </div>

                        <div className="contact-field">
                          <label htmlFor="res-date" className="contact-label">Date</label>
                          <input
                            id="res-date"
                            type="date"
                            name="date"
                            required
                            className="contact-input"
                          />
                        </div>

                        <div className="contact-field">
                          <label htmlFor="res-time" className="contact-label">Time</label>
                          <input
                            id="res-time"
                            type="time"
                            name="time"
                            required
                            className="contact-input"
                          />
                        </div>

                        <div className="contact-field">
                          <label htmlFor="res-dogs" className="contact-label">Four-legged friends joining?</label>
                          <select
                            id="res-dogs"
                            name="dogs"
                            className="contact-input res-select"
                          >
                            <option value="No">No four-legged friends</option>
                            <option value="1">1 four-legged friend</option>
                            <option value="2">2 four-legged friends</option>
                            <option value="3+">3+ four-legged friends</option>
                          </select>
                        </div>

                        <div className="contact-field">
                          <label htmlFor="res-highchairs" className="contact-label">High chairs needed</label>
                          <select
                            id="res-highchairs"
                            name="highchairs"
                            className="contact-input res-select"
                          >
                            <option value="None">None</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3+">3+</option>
                          </select>
                        </div>
                      </div>

                      <p className="type-body-sm mt-4 text-[var(--color-text-muted)]">
                        Submitting will open your email app pre-filled. Just hit send.
                      </p>

                      <button type="submit" className="btn-primary contact-submit">
                        Request reservation
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
