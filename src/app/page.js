export default function Home() {
  return (
    <div>
      <div style={{
        border: '2px solid black',
        width: '50%',

        fontWeight: 'bold',
        fontFamily: 'arial',
        fontSize: '48pt',

        margin: '5% auto',
        textAlign: 'center',
        padding: '10%'

      }}>LOGO</div>
      <p style={{
        textAlign: 'center',
        fontSize: '24pt'
      }}>Seja bem vindo à galeria de receita.</p>

      <div style={{
        textAlign: 'center'
      }}>
        <a style={{
          fontSize: '32pt',
          textDecoration: 'none',
          color: 'black',
        }} href="#">ENTRAR</a>
      </div>
    </div>
  );
}
