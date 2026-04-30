"use client";

export default function FormAmbassadeur() {
  return (
    <form className="mt-3">
      <div className="mb-3">
        <label className="form-label">Nom</label>
        <input className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Réseaux sociaux</label>
        <input className="form-control" />
      </div>

      <button className="btn btn-primary w-100">
        Postuler comme ambassadeur
      </button>
    </form>
  );
}