import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import App from "./components/App";
import Message from "./components/Message"
import Inbox from "./components/Inbox";
import Draft from "./components/Draft";
import Contacts from "./components/Contacts";

document.addEventListener( "DOMContentLoaded", () => {
	const reactNode = document.getElementById( "root" );

	if ( reactNode ) {
		ReactDOM.render(
			<Router history={ browserHistory }>
				<Route path="/" component={ App }>
					<Route path="draft" component={ Draft } />
					<Route path="contacts" component={ Contacts } />
					<Route path="inbox" component={ Inbox }>
						<Route path="/inbox/:messageId" component={ Message } />
					</Route>
				</Route>
			</Router>
		, reactNode )
	}
} );
