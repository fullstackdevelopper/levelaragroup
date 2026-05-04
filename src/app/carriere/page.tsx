"use client";

import { useState } from "react";
import Image from "next/image";
import FormCarriereAmbassadeur from "@/components/FormCarriereAmbassadeur";
import FormCarriereMembre from "@/components/FormCarriereMembre";
import FormCarriereInvestisseur from "@/components/FormCarriereInvestisseur";
import FormCarriereFreelance from "@/components/FormCarriereFreelance";
import BientotDispo from "@/components/BientotDispo"

export default function Carriere() {
    const [selected, setSelected] = useState("");

    return (
        <div className="container py-5 overflow-hidden">
            <div className="row align-items-md-center">

                {/* Image */}
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                    <Image
                        src="/img/25164 (1).jpg"
                        alt="Carrière"
                        className="rounded shadow w-100 h-auto"
                        width={600}
                        height={500}
                    />
                </div>

                {/* Choix + Formulaire dynamique */}
                <div className="col-12 col-md-6 mt-3 mt-md-0 d-flex flex-column">
                    <h2 className="mb-2 text-primary mt-md-2">Faites partie de l’aventure</h2>
                    <div className="d-flex flex-column justify-content-md-center flex-grow-1"></div>
                    <p className="text-muted mb-4">
                        Découvrez les opportunités qui vous correspondent et évoluez avec nous.
                    </p>

                    {/* Sélecteur */}
                    <div className="mb-4">
                        <label className="form-label">
                            Quelle catégorie voulez-vous rejoindre ?
                        </label>

                        <select
                            className="form-select"
                            value={selected}
                            onChange={(e) => setSelected(e.target.value)}
                        >
                            <option value="" disabled>-- choisissez une cat&eacute;gorie --</option>
                            <option value="ambassadeur">Ambassadeur</option>
                            <option value="membre">Membre</option>
                            <option value="investisseur">Investisseur</option>
                            <option value="freelance">Freelance</option>
                        </select>
                    </div>

                    {/* 🔥 Formulaire dynamique */}
                    {selected === "ambassadeur" && <FormCarriereAmbassadeur />}
                    {selected === "membre" && <FormCarriereMembre />}
                    {selected === "investisseur" && <FormCarriereInvestisseur />}
                    {selected === "freelance" && <FormCarriereFreelance />}
                </div>
            </div>
        </div >
    );
}