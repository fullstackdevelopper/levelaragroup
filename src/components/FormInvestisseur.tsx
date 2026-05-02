"use client";

import { useState } from "react";

export default function FormInvestisseur() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    adresse: "",
    email: "",
    numero: "",
    pays: "",
    ville: "",
    source: "",
    budget: "",
    produits: "",
    quantite: "",
    paiement: "",
    livraison: "",
    experience: "",
    formation: "",
    temps: "",
    referral: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Navigation
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Produits
  const produitsMap: any = {
    cosmetiques: ["Déodorant", "Lotion", "Pommade"],
    beauty: ["Hair humain", "Perruque"],
    gadget: ["Casque", "Chargeur"],
  };

  return (
    <form className="mt-3">

      {/* STEP INDICATOR */}
      <div className="mb-4 text-center">
        <span className="badge bg-primary">Étape {step} / 3</span>
      </div>

      {/* ================= STEP 1 ================= */}
      {step === 1 && (
        <>
          <h5 className="mb-3">Identification</h5>

          <input name="nom" className="form-control mb-3" placeholder="Nom" onChange={handleChange} />
          <input name="prenom" className="form-control mb-3" placeholder="Prénom" onChange={handleChange} />
          <input name="adresse" className="form-control mb-3" placeholder="Adresse" onChange={handleChange} />
          <input name="email" className="form-control mb-3" placeholder="Email" onChange={handleChange} />
          <input name="numero" className="form-control mb-3" placeholder="Numéro" onChange={handleChange} />
          <input name="pays" className="form-control mb-2" placeholder="Pays" onChange={handleChange} />
          <input name="ville" className="form-control mb-3" placeholder="Ville" onChange={handleChange} />

          <select name="source" className="form-select mb-3" onChange={handleChange}>
            <option value="">Comment nous avez-vous connu ?</option>
            <option>Google</option>
            <option>Réseaux sociaux</option>
            <option>Référence</option>
            <option>Autres</option>
          </select>

          <button type="button" className="btn btn-primary w-100" onClick={nextStep}>
            Suivant
          </button>
        </>
      )}

      {/* ================= STEP 2 ================= */}
      {step === 2 && (
        <>
          <h5 className="mb-3">Informations d'achat</h5>

          <select name="budget" className="form-select mb-3" onChange={handleChange}>
            <option value="">Budget</option>
            <option>$500 - $1000</option>
            <option>$2,500 - $5,000</option>
            <option>$10,000+</option>
          </select>

          <select name="produits" className="form-select mb-3" onChange={handleChange}>
            <option value="">Catégorie produit</option>
            <option value="cosmetiques">Cosmétiques</option>
            <option value="beauty">Beauty</option>
            <option value="gadget">Gadget</option>
          </select>

          {formData.produits && (
            <div className="mb-3 p-3 border rounded bg-light">
              <strong>Produits disponibles :</strong>
              <ul>
                {produitsMap[formData.produits].map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <select name="quantite" className="form-select mb-3" onChange={handleChange}>
            <option value="">Quantité</option>
            <option>Palette</option>
            <option>½ palette</option>
            <option>Caisse</option>
            <option>Demie-caisse</option>
            <option>Douzaine</option>
            <option>Autres</option>
          </select>

          <select name="paiement" className="form-select mb-3" onChange={handleChange}>
            <option value="">Paiement</option>
            <option>Cash</option>
            <option>Carte</option>
            <option>Plan de paiement</option>
            <option>Autres</option>
          </select>

          <select name="livraison" className="form-select mb-3" onChange={handleChange}>
            <option value="">Livraison</option>
            <option>Pick up</option>
            <option>Delivery service</option>
            <option>Trans-board</option>
          </select>

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
          <h5 className="mb-3">Profil & engagement</h5>

          <select name="experience" className="form-select mb-3" onChange={handleChange}>
            <option value="">Expérience</option>
            <option>Débutant</option>
            <option>Intermédiaire</option>
            <option>Avancé</option>
          </select>

          <select name="formation" className="form-select mb-3" onChange={handleChange}>
            <option value="">Disponibilité formation</option>
            <option>15 jours</option>
            <option>30 jours</option>
            <option>60 jours</option>
          </select>

          <input name="temps" className="form-control mb-3"
            placeholder="Temps disponible par semaine"
            onChange={handleChange}
          />

          <select name="referral" className="form-select mb-3" onChange={handleChange}>
            <option value="">Références</option>
            <option>1</option>
            <option>3</option>
            <option>5</option>
            <option>10+</option>
          </select>

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