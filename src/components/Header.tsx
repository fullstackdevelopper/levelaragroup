"use client"
import Image from "next/image"
import { useEffect, useRef } from "react";
import Typed from 'typed.js'
import Link from "next/link";
export default function Header() {

  const el = useRef<HTMLSpanElement | null>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (!el.current) return;

    // créer instance
    typedInstance.current = new Typed(el.current, {
      strings: [
        "LevelARA Pro Academy",
        "LevelARA Invest-Market",
        "LevelARA Career",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      backDelay: 2000,
    });

    // 🔥 cleanup (TRÈS IMPORTANT)
    return () => {
      typedInstance.current?.destroy();
    };
  }, []);

  return (
    <>
      <section id="hero" className="hero section dark-background">
        <Image src="/img/18516.jpg" alt="" data-aos="fade-in" className="" width={1500} height={1000} />

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <h2>LevelARA Group</h2>
          <p>
            <span className="typed" ref={el}>LevelARA Group</span>
          </p>
          <div className="ctl">
            <Link href="/contact">
              <button className="btn btn-info btn-contact btn-lg text-white shadow fw-bold">
                <i className="bi bi-telephone me-2"></i>
                Contactez-nous
              </button>
            </Link>
          </div>
        </div>
      </section >
    </>
  )
}