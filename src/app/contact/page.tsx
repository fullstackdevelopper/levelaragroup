'use client'
import Image from "next/image"

export default function Contact() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">


        <div className="col-12 col-md-6 ">
          <Image
            src="/img/110827(1).jpg"
            alt="Contact"
            className="rounded shadow w-100 h-auto mt-5"
            width={1500}
            height={1000}
          />
        </div>


        <div className="col-12 col-md-6">
          <h2 className="mb-4">Contactez-nous</h2>

          <form>
            <div className="mb-3">
              <label className="form-label">Nom</label>
              <input type="text" className="form-control" placeholder="Votre nom" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Votre email" />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows={5} placeholder="Votre message"></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Envoyer
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}