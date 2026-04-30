"use client";

import Image from "next/image";

export default function ComingSoon({
  title = "Bientôt disponible",
  message = "Cette section sera bientôt accessible. Restez connecté !",
}) {
  return (
    <div className="text-center py-5">

      {/* Image / Illustration */}
      {/* <div className="mb-4">
        <Image
          src="/coming-soon.png" // 👉 mets ton image dans /public
          alt="Bientôt disponible"
          width={300}
          height={300}
          className="img-fluid opacity-75"
        />
      </div> */}

      {/* Texte */}
      <h3 className="fw-bold">{title}</h3>
      <p className="text-muted">{message}</p>

      {/* Petit effet UX */}
      <div className="spinner-border text-primary mt-3" role="status">
        <span className="visually-hidden">Chargement...</span>
      </div>
    </div>
  );
}