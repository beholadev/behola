"use client";
import { useState } from "react";
import styles from "@/styles/infostyles.module.css";
import { Menu } from "lucide-react";
import Link from "next/link";

const InfoMobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <div className="md:hidden">
          <Menu className={styles.menu} onClick={() => setOpen(!open)} />
        </div>
        {open && (
          <div className={styles.responsiveMenu}>
            <Link href={"/"}>Home</Link>
            <Link href={"/info"}>Info</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default InfoMobileNavbar;
