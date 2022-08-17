import { Route, Switch } from 'react-router-dom';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main
//import Content from './components/main/Content';
//import Visual from './components/main/Visual';
import Main from './components/main/Main';

//sub
import Community from './components/sub/Community.js';
import Department from './components/sub/Department.js';
import Gallery from './components/sub/Gallery.js';
import Youtube from './components/sub/Youtube.js';
import Location from './components/sub/Location';
import Members from './components/sub/Members.js';

import './scss/style.scss';

function App() {
	return (
		<>
			<Switch>
				{/* <Route exact path='/'>
					<Header type={'main'} />
					<Visual />
					<Content />
				</Route>

				<Route path='/'>
					<Header type={'sub'} />
				</Route> */}

				<Route exact path='/' component={Main} />
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Route path='/department' component={Department} />
			<Route path='/community' component={Community} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/location' component={Location} />
			<Route path='/members' component={Members} />

			<Footer />
		</>
	);
}

export default App;
