import Image from 'next/image'

export default function Home() {

  return (
    <div style={{margin: 0, padding: 0}}>
      <Image style={{
        position: 'relative',
        top: '50%', left: '50%',
        translate: '-50% 10%',
        width: '80%', 
        height: '60vh'}} 
        width={1920} 
        height={1080} 
        src="https://cdn.gencraft.com/prod/user/0285e069-7c81-4fdd-9934-0bd701ee2a99/9381a0c6-f83f-482b-a32d-5eb65ba9112c/image/image1_0.jpg?Expires=1711145215&Signature=RXzJCrABMsmxZWM4XU5MKpeTyV8V3CQVwlS0rG-vfC1ZIo9i7x9G8or-sFqFRV1gQbGhuCuFu14gU2XInoSBz8XlNAcGYPy9~v~gjiPDlzjObvatkY2~DTBGHBFOeMAA8Ld~BZ2w9NVd28I3mYmZEMCjVUPFiQDDVEzUSSmjmmCPhIalYMJDn6mMg1vsAAsmLQJQ5JJZLCu3bhwbwqzhZYG4Bpe1Jn2Gcfm88y6MCb2tdhH21jt5zEogUX8Yfk0ibM2lu4m4t5u9kWGtTOKqZRYDwtf-k0K-RQ93jxBz~G82Rbr5oprKOF6KGOVZgExUzyPa187TtEuyBDIhjahHww__&Key-Pair-Id=K3RDDB1TZ8BHT8" />
      <p style={{
        textAlign: 'center',
        fontSize: '24pt',
        marginTop: 50,
      }}>Seja bem vindo à galeria de receita.</p>

      <div style={{
        textAlign: 'center'
      }}>
        <a style={{
          fontSize: '32pt',
          textDecoration: 'none',
          color: 'black',
        }} href="galery">ENTRAR</a>
      </div>
    </div>
  );
}
