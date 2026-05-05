"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function FormCarriereMembre() {
  const [step, setStep] = useState(1);
  const formRef = useRef<any>(null);
  const router = useRouter();

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    numero: "",
    adresse: "",
    motivation: "",
  });

  const [phoneError, setPhoneError] = useState(false);

  // 🔁 HANDLE CHANGE
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // validation visuelle dynamique
    if (e.target.classList.contains("is-invalid")) {
      if (e.target.checkValidity()) {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
      }
    }
  };

  // ✅ VALIDATION PAR ÉTAPE
  const validateStep = () => {
    const form = formRef.current;

    const fields = form.querySelectorAll(
      `[data-step="${step}"] input, [data-step="${step}"] textarea`
    );

    let valid = true;

    fields.forEach((field: any) => {
      if (!field.checkValidity()) {
        field.classList.add("is-invalid");
        field.classList.remove("is-valid");
        valid = false;
      } else {
        field.classList.remove("is-invalid");
        field.classList.add("is-valid");
      }
    });

    // téléphone
    if (step === 2) {
      if (!formData.numero || !isValidPhoneNumber(formData.numero)) {
        setPhoneError(true);
        valid = false;
      } else {
        setPhoneError(false);
      }
    }

    // focus sur erreur
    if (!valid) {
      const firstInvalid = form.querySelector(".is-invalid, :invalid");
      firstInvalid?.focus();
      firstInvalid?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    form.classList.add("was-validated");

    return valid;
  };

  // ➡️ NEXT
  const nextStep = () => {
    if (!validateStep()) return;

    resetValidation();
    setStep((prev) => prev + 1);
  };

  // ⬅️ PREV
  const prevStep = () => {
    resetValidation();
    setPhoneError(false);
    setStep((prev) => prev - 1);
  };

  // 🧹 RESET
  const resetValidation = () => {
    const form = formRef.current;

    form.classList.remove("was-validated");

    const fields = form.querySelectorAll("input, textarea");
    fields.forEach((field: any) => {
      field.classList.remove("is-invalid");
      field.classList.remove("is-valid");
    });
  };

  // 🚀 SUBMIT
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateStep()) return;

    const res = await fetch("/api/carriere", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      alert("Erreur lors de l'envoi");
      return;
    }

    const successToast = document.getElementById("successToast");

    if (successToast) {
      const bootstrap = await import("bootstrap");

      const toast = new bootstrap.Toast(successToast, {
        delay: 3000,
      });

      toast.show();

      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  };

  return (
    <>
      <form
        ref={formRef}
        className="mt-3 needs-validation"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="mb-4 text-center">
          <span className="badge bg-primary">Étape {step} / 3</span>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div data-step="1">
            <h5>Informations personnelles</h5>

            <input
              name="nom"
              className="form-control mb-1"
              placeholder="Nom"
              required
              minLength={3}
              pattern="^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ '-]{1,}$"
              onChange={handleChange}
            />
            <div className="invalid-feedback">Nom invalide</div>

            <input
              name="prenom"
              className="form-control mb-1"
              placeholder="Prénom"
              required
              minLength={2}
              onChange={handleChange}
            />
            <div className="invalid-feedback">Prénom requis</div>

            <input
              name="email"
              type="email"
              className="form-control mb-1"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <div className="invalid-feedback">Email invalide</div>

            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={nextStep}
            >
              Suivant
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div data-step="2">
            <h5>Coordonnées</h5>

            <div
              className={`form-control p-0 mb-1 ${phoneError ? "is-invalid" : ""
                }`}
            >
              <PhoneInput
                international
                defaultCountry="HT"
                value={formData.numero}
                onChange={(value) => {
                  const numero = value || "";
                  setFormData({ ...formData, numero });

                  if (isValidPhoneNumber(numero)) {
                    setPhoneError(false);
                  }
                }}
              />
            </div>

            {phoneError && (
              <div className="invalid-feedback d-block">
                Numéro invalide
              </div>
            )}

            <input
              name="adresse"
              className="form-control mb-1"
              placeholder="Adresse"
              required
              minLength={5}
              onChange={handleChange}
            />
            <div className="invalid-feedback">
              Adresse invalide
            </div>

            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn btn-secondary w-50"
                onClick={prevStep}
              >
                Retour
              </button>
              <button
                type="button"
                className="btn btn-primary w-50"
                onClick={nextStep}
              >
                Suivant
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div data-step="3">
            <h5>Motivation</h5>

            <textarea
              name="motivation"
              className="form-control mb-1"
              rows={5}
              required
              minLength={20}
              onChange={handleChange}
              placeholder="Pourquoi voulez-vous rejoindre notre équipe ?"
            />
            <div className="invalid-feedback">
              Minimum 20 caractères
            </div>

            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn btn-secondary w-50"
                onClick={prevStep}
              >
                Retour
              </button>
              <button type="submit" className="btn btn-success w-50">
                Soumettre
              </button>
            </div>
          </div>
        )}
      </form>

      {/* TOAST */}
      <div className="toast-container position-fixed top-0 end-0 p-3">
        <div
          id="successToast"
          className="toast text-bg-success border-0"
        >
          <div className="d-flex">
            <div className="toast-body">
              <strong>Merci de votre inter&ecirc;t !</strong> <br />
              ✅ Nous vous contacterons bientôt.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}