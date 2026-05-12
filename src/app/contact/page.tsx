"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {

  const formRef = useRef<any>(null);
  const router = useRouter();

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Soumission
  const handleSubmit = async (e: any) => {

    e.preventDefault();

    setError("");

    const form = formRef.current;

    // Validation Bootstrap
    if (!form.checkValidity()) {

      e.stopPropagation();

      const fields = form.querySelectorAll("input, textarea");

      fields.forEach((field: any) => {

        if (!field.checkValidity()) {

          field.classList.add("is-invalid");
          field.classList.remove("is-valid");

        } else {

          field.classList.remove("is-invalid");
          field.classList.add("is-valid");
        }
      });

      const firstInvalid = form.querySelector(".is-invalid, :invalid");

      firstInvalid?.focus();

      firstInvalid?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      form.classList.add("was-validated");

      return;
    }

    setLoading(true);

    try {

      const res = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data = null;

      try {

        data = await res.json();

      } catch {

        data = null;
      }

      console.log("Réponse API :", data);

      if (!res.ok) {

        setError(
          data?.error ||
          "Erreur lors de l'envoi"
        );

        setLoading(false);

        return;
      }

      // Toast Bootstrap
      const successToast =
        document.getElementById("successToast");

      if (successToast) {

        const bootstrap =
          await import("bootstrap");

        const toast =
          new bootstrap.Toast(successToast, {
            delay: 3000,
            autohide: true,
          });

        toast.show();
      }

      // Reset
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        message: "",
      });

      form.reset();

      const fields =
        form.querySelectorAll("input, textarea");

      fields.forEach((field: any) => {

        field.classList.remove("is-invalid");
        field.classList.remove("is-valid");
      });

      form.classList.remove("was-validated");

      // Refresh
      setTimeout(() => {
        router.refresh();
      }, 3000);

    } catch (error) {

      console.error("Erreur catch :", error);

      setError(
        "Erreur serveur. Vérifiez votre API."
      );
    }

    setLoading(false);
  };

  // Validation dynamique
  const handleChange = (e: any) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Correction dynamique
    if (e.target.checkValidity()) {

      e.target.classList.remove("is-invalid");
      e.target.classList.add("is-valid");

    } else {

      e.target.classList.add("is-invalid");
      e.target.classList.remove("is-valid");
    }
  };

  return (
    <>
      <div className="container py-5">

        <div className="row align-items-center">

          {/* Image */}
          <div className="col-12 col-md-6">

            <Image
              src="/img/110827(1).jpg"
              alt="Contact"
              className="rounded shadow w-100 h-auto mt-md-5"
              width={1500}
              height={1000}
            />

          </div>

          {/* Formulaire */}
          <div className="col-12 col-md-6">

            <h2 className="mb-4 mt-sm-5">
              Contactez-nous
            </h2>

            <form
              ref={formRef}
              className="needs-validation"
              noValidate
              onSubmit={handleSubmit}
            >

              {/* Nom */}
              <div className="mb-3">

                <label className="form-label">
                  Nom
                </label>

                <input
                  type="text"
                  name="nom"
                  className="form-control"
                  placeholder="Votre nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  minLength={3}
                  pattern="^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ '-]{1,}$"
                />

                <div className="invalid-feedback">
                  Le nom doit contenir au moins 3 caractères
                </div>

              </div>

              {/* Prenom */}
              <div className="mb-3">

                <label className="form-label">
                  Prénom
                </label>

                <input
                  type="text"
                  name="prenom"
                  className="form-control"
                  placeholder="Votre prénom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  minLength={2}
                  pattern="^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ '-]{1,}$"
                />

                <div className="invalid-feedback">
                  Le prénom est requis
                </div>

              </div>

              {/* Email */}
              <div className="mb-3">

                <label className="form-label">
                  E-mail
                </label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Votre e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <div className="invalid-feedback">
                  Adresse e-mail invalide
                </div>

              </div>

              {/* Message */}
              <div className="mb-3">

                <label className="form-label">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={5}
                  className="form-control"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                />

                <div className="invalid-feedback">
                  Le message doit contenir au moins 10 caractères
                </div>

              </div>

              {/* Error */}
              {
                error && (
                  <div className="alert alert-danger">
                    {error}
                  </div>
                )
              }

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {
                  loading
                    ? "Envoi..."
                    : "Envoyer"
                }
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* Toast Bootstrap */}
      <div className="toast-container position-fixed top-0 end-0 p-3">

        <div
          id="successToast"
          className="toast align-items-center text-bg-success border-0 fade"
          role="alert"
        >

          <div className="d-flex">

            <div className="toast-body">

              <strong>
                Merci pour votre message !
              </strong>

              <br />

              ✅ Nous vous répondrons bientôt.

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