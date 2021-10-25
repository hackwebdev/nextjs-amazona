import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import useStyles from '../utils/styles'

export default function Layout({ children }) {
  const classes = useStyles()
  const { main, navbar, footer } = classes
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position='static' className={navbar}>
        <Toolbar>
          <Typography>amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container className={main}>{children}</Container>
      <footer className={footer}>
        <Typography>All rights reserve . Next Amazona</Typography>
      </footer>
    </div>
  )
}
