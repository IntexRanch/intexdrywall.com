"use client";

import { FormEvent, useState } from "react";
import { Button } from "./Button";

type FormState = "idle" | "submitting" | "success" | "error";

export function InviteToBidForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function buildMailtoLink(values: Record<string, FormDataEntryValue>) {
    const name = (values.name as string) || "";
    const company = (values.company as string) || "";
    const email = (values.email as string) || "";
    const phone = (values.phone as string) || "";
    const projectName = (values.projectName as string) || "";
    const projectLocation = (values.projectLocation as string) || "";
    const bidDueDate = (values.bidDueDate as string) || "";
    const scopeDescription = (values.scopeDescription as string) || "";
    const plansLink = (values.plansLink as string) || "";

    const subject = encodeURIComponent(
      `Invite to Bid – ${projectName || "New Project"}`
    );

    const bodyLines = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      projectName ? `Project Name: ${projectName}` : "",
      projectLocation ? `Project Location: ${projectLocation}` : "",
      bidDueDate ? `Bid Due Date: ${bidDueDate}` : "",
      "",
      "Scope Description:",
      scopeDescription || "(not provided)",
      "",
      "Plans / Specs Link:",
      plansLink || "(not provided)",
    ].filter(Boolean);

    const body = encodeURIComponent(bodyLines.join("\n"));

    return `mailto:intexranch@gmail.com?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot field (should be left empty by real users)
    const honey = formData.get("company_website") as string;
    if (honey && honey.trim().length > 0) {
      // Likely spam
      setFormState("idle");
      return;
    }

    // Build a mailto link so this works on static hosting (no API needed).
    const entries = Object.fromEntries(formData.entries());
    const mailtoLink = buildMailtoLink(entries);

    try {
      const res = await fetch("/api/invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entries),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setFormState("success");
      form.reset();
    } catch (err) {
      // Fall back to mailto so the user can still send the invite.
      window.location.href = mailtoLink;
      setFormState("error");
      setErrorMessage(
        "We could not send the invite automatically. Your email app should open instead."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-800" htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
          />
        </div>
        <div className="space-y-1">
          <label
            className="text-sm font-medium text-slate-800"
            htmlFor="company"
          >
            Company *
          </label>
          <input
            id="company"
            name="company"
            required
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-800" htmlFor="role">
            Role
          </label>
          <select
            id="role"
            name="role"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
            defaultValue="GC"
          >
            <option value="GC">General Contractor</option>
            <option value="CM">Construction Manager</option>
            <option value="Owner">Owner / Owner Rep</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="space-y-1">
          <label
            className="text-sm font-medium text-slate-800"
            htmlFor="email"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
          />
        </div>
        <div className="space-y-1">
          <label
            className="text-sm font-medium text-slate-800"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
          />
        </div>
        <div className="space-y-1">
          <label
            className="text-sm font-medium text-slate-800"
            htmlFor="projectName"
          >
            Project Name
          </label>
          <input
            id="projectName"
            name="projectName"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
          />
        </div>
        <div className="space-y-1">
          <label
            className="text-sm font-medium text-slate-800"
            htmlFor="projectLocation"
          >
            Project Location (City, State)
          </label>
          <input
            id="projectLocation"
            name="projectLocation"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
          />
        </div>
        <div className="space-y-1">
          <label
            className="text-sm font-medium text-slate-800"
            htmlFor="bidDueDate"
          >
            Bid Due Date
          </label>
          <input
            id="bidDueDate"
            name="bidDueDate"
            type="date"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label
          className="text-sm font-medium text-slate-800"
          htmlFor="scopeDescription"
        >
          Brief Scope Description
        </label>
        <textarea
          id="scopeDescription"
          name="scopeDescription"
          rows={4}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
        />
      </div>

      <div className="space-y-1">
        <label
          className="text-sm font-medium text-slate-800"
          htmlFor="plansLink"
        >
          Plans / Specs Link
        </label>
        <textarea
          id="plansLink"
          name="plansLink"
          rows={2}
          placeholder="Paste a link to your shared folder or plan room."
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
        />
      </div>

      {/* Honeypot: hidden from users */}
      <div className="hidden">
        <label htmlFor="company_website">Company Website</label>
        <input
          id="company_website"
          name="company_website"
          autoComplete="off"
        />
      </div>

      {errorMessage && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      {formState === "success" && (
        <p className="text-sm text-emerald-700" role="status">
          Thank you. Your request has been submitted and we will follow up
          shortly.
        </p>
      )}

      <div className="pt-2">
        <Button
          type="submit"
          disabled={formState === "submitting"}
          className="w-full sm:w-auto"
        >
          {formState === "submitting" ? "Submitting..." : "Submit Invite to Bid"}
        </Button>
      </div>
    </form>
  );
}
