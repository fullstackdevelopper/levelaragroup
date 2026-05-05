"use client";
import { useEffect } from "react";
import { useState, useRef } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useRouter } from "next/navigation";
import "react-phone-number-input/style.css";

export default function FormCarriereAmbassadeur() {

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = formRef.current;

    if (!form.checkValidity() || phoneError) {
      e.stopPropagation();

      const firstInvalid = form.querySelector(".is-invalid, :invalid");
      firstInvalid?.focus();
      firstInvalid?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      form.classList.add("was-validated");
      return;
    }

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
        autohide: true,
      });

      toast.show();

      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (e.target.classList.contains("is-invalid")) {
      if (e.target.checkValidity()) {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
      }
    }
  };

  const validateStep = () => {
    const form = formRef.current;

    const currentStepFields = form.querySelectorAll(
      `[data-step="${step}"] input, [data-step="${step}"] textarea`
    );

    let isValid = true;

    currentStepFields.forEach((field: any) => {
      if (!field.checkValidity()) {
        field.classList.add("is-invalid");
        field.classList.remove("is-valid");
        isValid = false;
      } else {
        field.classList.remove("is-invalid");
        field.classList.add("is-valid");
      }
    });

    if (step === 2) {
      if (!formData.numero || !isValidPhoneNumber(formData.numero)) {
        setPhoneError(true);
        isValid = false;
      } else {
        setPhoneError(false);
      }
    }

    if (!isValid) {
      const firstInvalid = form.querySelector(".is-invalid, :invalid");
      firstInvalid?.focus();
      firstInvalid?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    form.classList.add("was-validated");

    return isValid;
  };

  const nextStep = () => {
    if (validateStep()) {
      const form = formRef.current;

      form.classList.remove("was-validated");

      const fields = form.querySelectorAll("input, textarea");
      fields.forEach((field: any) => {
        field.classList.remove("is-invalid");
        field.classList.remove("is-valid");
      });

      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    const form = formRef.current;

    form.classList.remove("was-validated");

    const fields = form.querySelectorAll("input, textarea");
    fields.forEach((field: any) => {
      field.classList.remove("is-invalid");
      field.classList.remove("is-valid");
    });

    setPhoneError(false);

    setStep((prev) => prev - 1);
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
          <span className="badge bg-primary">
            Étape {step} / 3
          </span>
        </div>

        {step === 1 && (
          <div data-step="1">
            <h5 className="mb-3">Informations personnelles</h5>

            <input
              name="nom"
              className="form-control mb-1"
              placeholder="Nom"
              onChange={handleChange}
              required
              minLength={3}
              pattern="^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ '-]{1,}$"
            />
            <div className="invalid-feedback">
              Le nom doit contenir au moins 3 caractères
            </div>

            <input
              name="prenom"
              className="form-control mb-1"
              placeholder="Prénom"
              onChange={handleChange}
              required
              minLength={2}
              pattern="^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ '-]{1,}$"
            />
            <div className="invalid-feedback">
              Le prénom est requis
            </div>

            <input
              name="email"
              type="email"
              className="form-control mb-1"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              Email invalide
            </div>

            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={nextStep}
            >
              Suivant
            </button>
          </div>
        )}

        {step === 2 && (
          <div data-step="2">
            <h5 className="mb-3">Coordonnées</h5>

            <div
              className={`form-control mb-1 p-0 ${phoneError ? "is-invalid" : ""
                }`}
            >
              <PhoneInput
                international
                defaultCountry="HT"
                value={formData.numero}
                onChange={(value) => {
                  const numero = value || "";
                  setFormData({ ...formData, numero });

                  if (
                    phoneError &&
                    numero &&
                    isValidPhoneNumber(numero)
                  ) {
                    setPhoneError(false);
                  }
                }}
              />
            </div>

            {phoneError && (
              <div className="invalid-feedback d-block">
                Veuillez entrer un numéro valide
              </div>
            )}

            <input
              name="adresse"
              className="form-control mb-1"
              placeholder="Adresse"
              onChange={handleChange}
              required
              minLength={5}
              maxLength={150}
            />
            <div className="invalid-feedback">
              Adresse incorrecte
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

        {step === 3 && (
          <div data-step="3">
            <h5 className="mb-3">Motivation</h5>

            <textarea
              name="motivation"
              className="form-control mb-1"
              rows={5}
              placeholder="Pourquoi voulez-vous devenir notre ambassadeur ?"
              onChange={handleChange}
              required
              minLength={20}
            />
            <div className="invalid-feedback">
              Minimum 20 caractères requis
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

      {/* Toast */}
      <div className="toast-container position-fixed top-0 end-0 p-3">
        <div
          id="successToast"
          className="toast align-items-center text-bg-success border-0 fade"
          role="alert"
        >
          <div className="d-flex">
            <div className="toast-body">
              <strong>Merci de votre inter&ecirc;t !</strong> <br />
              ✅ Nous vous contacterons bientôt.
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}