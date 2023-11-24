"use client";
import "../../style/diary.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function diary() {
  const [judul, setJudul] = useState([]);
  const [isiDiary, setIsiDiary] = useState([]);

  const endpointAPI = "https://65607d2a83aba11d99d0ed0d.mockapi.io/Diary";

  async function getDiary() {
    const res = await axios.get(endpointAPI);

    //ambil data
    const data = res.data;

    //ambil judul
    const judul = data.map((item) => item.judul);
    setJudul(judul);

    //ambil isi_diarynp
    const isi_diary = data.map((item) => item.isi_diary);
    setIsiDiary(isi_diary);
  }

  useEffect(() => {
    getDiary();
  }, []);

  
  return (
    <div>
      {judul.length > 0 ? (
        
        <ul>
          {judul.map((item, idx) => (
            <Link href={`/diary/${item}/${isiDiary[idx]}`}>
              <li key={idx}>
                <div className="diary-container">
                    <h1>{judul[idx]}</h1>
                    <p className="p-diary">{isiDiary[idx]}</p>
                </div>
              </li>
              </Link>

          ))}
        </ul>
      ) : (
        "API is loading"
      )}
    </div>
  );
}