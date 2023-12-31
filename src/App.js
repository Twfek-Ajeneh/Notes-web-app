import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { purple , grey} from '@material-ui/core/colors';
import { ThemeProvider , createTheme } from '@material-ui/core';
import Layout from './components/Layout';

const t = createTheme({
	palette:{
		primary: grey,
		secondary: purple
	},
	typography:{
		fontFamily: 'Quicksand',
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700
	}
});

function App() {
	return (
		<ThemeProvider theme={t}>
			<Router>
				<Layout>
					<Switch>
						<Route exact path="/">
						<Notes />
						</Route>
						<Route path="/create">
						<Create />
						</Route>
					</Switch>
				</Layout>
			</Router>
		</ThemeProvider>
	);
}

export default App;
