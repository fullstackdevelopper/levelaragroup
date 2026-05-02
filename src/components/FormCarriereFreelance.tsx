"use client";

import { useState } from "react";

export default function FormCarriereFreelance() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    numero: "",
    adresse: "",
    motivation: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="mt-3" onSubmit={handleSubmit}>

      {/* STEP INDICATOR */}
      <div className="mb-4 text-center">
        <span className="badge bg-primary">Étape {step} / 3</span>
      </div>

      {/* ================= STEP 1 ================= */}
      {step === 1 && (
        <>
          <h5 className="mb-3">Informations personnelles</h5>

          <input
            name="nom"
            className="form-control mb-3"
            placeholder="Nom"
            onChange={handleChange}
          />

          <input
            name="prenom"
            className="form-control mb-3"
            placeholder="Prénom"
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            onChange={handleChange}
          />

          <button type="button" className="btn btn-primary w-100" onClick={nextStep}>
            Suivant
          </button>
        </>
      )}

      {/* ================= STEP 2 ================= */}
      {step === 2 && (
        <>
          <h5 className="mb-3">Coordonnées</h5>

          <input
            name="numero"
            className="form-control mb-3"
            placeholder="Numéro de téléphone"
            onChange={handleChange}
          />

          <input
            name="adresse"
            className="form-control mb-3"
            placeholder="Adresse"
            onChange={handleChange}
          />

          <div className="d-flex gap-2">
            <button type="button" className="btn btn-secondary w-50" onClick={prevStep}>
              Retour
            </button>
            <button type="button" className="btn btn-primary w-50" onClick={nextStep}>
              Suivant
            </button>
          </div>
        </>
      )}

      {/* ================= STEP 3 ================= */}
      {step === 3 && (
        <>
          <h5 className="mb-3">Motivation</h5>

          <textarea
            name="motivation"
            className="form-control mb-3"
            rows={5}
            placeholder="Pourquoi devrions nous vous accepter comme notre travailleur freelance ?"
            onChange={handleChange}
          />

          <div className="d-flex gap-2">
            <button type="button" className="btn btn-secondary w-50" onClick={prevStep}>
              Retour
            </button>
            <button type="submit" className="btn btn-success w-50">
              Soumettre
            </button>
          </div>
        </>
      )}

    </form>
  );
}