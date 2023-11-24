<<<<<<< HEAD
import "../../../../styles/diarypost.css";
=======
import "../../style/diary.css";
>>>>>>> 131bdd8d50d05602bdb4aa44fd7084db0bc3c609

export default function DiaryPost({params}) {
    const {judul, isi_diary} = params

    return (
        <div className= " diary-post-container">
            <h1>{decodeURIComponent(judul)}</h1>
            <p>{decodeURIComponent(isi_diary)}</p>
        </div>
    )
}
