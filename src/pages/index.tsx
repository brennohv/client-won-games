import Home from 'templates/Home'

export default function Index() {
  return <Home />
}

// getStaticProps => gera o estatico em build time
// getServerSideProps => gera via ssr a cada request
// getInitialProps => gera via ssr a cada request

export function getStaticProps() {
  // Faz a logica
  // Pode sbuscar dados numa API
  // Fazer calculo/ leitura de context

  // retorno dos dados
  return {
    props: {
      heading: 'Olha eu aqui!!!'
    }
  }
}

//ATENÇÃO:
// Os METODOS GetStaticProps e GetServerSideProps SÓ FUNCIONAM EM PAGES
