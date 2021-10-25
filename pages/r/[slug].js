import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'reactstrap';
import styles from '../../styles/Reader.module.css';

export async function getStaticPaths() {
  return { paths: ['/r/[slug]'], fallback: true }
}

export async function getStaticProps(context) {
  const res = await fetch(`https://api.quran.sutanlab.id/surah/36`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default function Slug({ data }) {
  const [state,setState] = React.useState([]);

  React.useEffect(() => {
    setState(data.data.verses)
  }, [data])

  return (
    <div>
      <div className={styles.rAvatar}>
        <div className={styles.subRAvatar}>
          <Image src={'/default-image.png'} height="256" width="256" alt="my-yasiin-logo" />
        </div>
        <div className={styles.rTitle}>
          Yasiin Keluarga Besar M. Adam, SH.
        </div>
        <div className={styles.rDescription}>
          Semoga amal dan ibadah nya di terima oleh Allah Subhana wa Taala... Amiiin
        </div>
      </div>

      <Container>
        <Row>
          <Col>
            <div className={styles.rYasiinTitle}>
              Yasiin | سورة يس 
            </div>
            <div className={styles.rYasiinRevelation}>
              Makkiyah
            </div>
          </Col>
          <Col>
            <div className={styles.rYasiinCount}>
              83 Ayat
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.rYasiinDescription}>
              Surat Yaasiin terdiri atas 83 ayat, termasuk golongan surat-surat Makkiyyah,  diturunkan sesudah surat Jin. Dinamai Yaasiin karena dimulai dengan huruf Yaasiin. Sebagaimana halnya arti huruf-huruf abjad yang terletak pada permulaan beberapa surat Al Quran, maka demikian pula arti Yaasiin yang terdapat pada ayat permulaan surat ini, yaitu Allah mengisyaratkan bahwa sesudah huruf tersebut akan dikemukakan hal-hal yang penting antara lain: Allah bersumpah dengan Al Quran bahwa Muhammad s.a.w. benar-benar seorang rasul yang diutus-Nya kepada kaum yang belum pernah diutus kepada mereka rasul-rasul.
            </div>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: 48 }}>
        <Row style={{ marginBottom: 24 }}>
          <Col>
            <div className={styles.textArab}>
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </div>
            <div className={styles.textBaca}>
              Bismillaahir Rahmaanir Raheem
            </div>
            <div className={styles.textArtian}>
              Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.
            </div>
          </Col>
        </Row>
        {state.map(v => (
          <Row key={v.number.inQuran} style={{ marginBottom: 24 }}>
            <Col>
              <div className={styles.textArab}>
                {v.text.arab}
              </div>
              <div className={styles.textBaca}>
                {v.text.transliteration.en}
              </div>
              <div className={styles.textArtian}>
                {v.tafsir.id.long}
              </div>
            </Col>
          </Row>
        ))}
        <Row>
          <Col>
            <div className={styles.footer}>
              Terima Kasih Telah Membaca Surah Yasiin Untuk Almarhum M.Adam
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
